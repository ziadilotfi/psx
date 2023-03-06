<?php
namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Core\Entities\CoreImage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Modules\Core\Constants\Constants;
use Illuminate\Support\Facades\File;

class ImageService extends PsService
{
//    protected $upload_path = 'public/uploads/';
//    protected $thumb1x_path = 'public/thumbnail/';
//    protected $thumb2x_path = 'public/thumbnail2x/';
//    protected $thumb3x_path = 'public/thumbnail3x/';

    // for under root public start
    protected $upload_path = 'storage/uploads/';
    protected $thumb1x_path = 'storage/thumbnail/';
    protected $thumb2x_path = 'storage/thumbnail2x/';
    protected $thumb3x_path = 'storage/thumbnail3x/';
    // for under root public end

    // protected $storage_thumb1x_path = '/storage/thumbnail/';
    // protected $storage_thumb2x_path = '/storage/thumbnail2x/';
    // protected $storage_thumb3x_path = '/storage/thumbnail3x/';

    protected $coreImageIdCol, $coreImageImgTypeCol, $coreImageImgParentIdCol, $img_folder_path,$storage_upload_path, $storage_thumb1x_path, $storage_thumb2x_path, $storage_thumb3x_path;

    public function __construct()
    {
        $this->coreImageIdCol = CoreImage::id;
        $this->coreImageImgTypeCol = CoreImage::imgType;
        $this->coreImageImgParentIdCol = CoreImage::imgParentId;
        $this->img_folder_path = Constants::folderPath;
        $this->storage_upload_path= '/storage/' .$this->getFolderImagePath(). '/uploads/';
        $this->storage_thumb1x_path= '/storage/' .$this->getFolderImagePath() . '/thumbnail/';
        $this->storage_thumb2x_path= '/storage/' .$this->getFolderImagePath() . '/thumbnail2x/';
        $this->storage_thumb3x_path= '/storage/' .$this->getFolderImagePath() . '/thumbnail3x/';
    }

//    public function getImage($id = null, $imgParentId = null, $imgType = null){
//        $image = CoreImage::when($id, function ($q, $id){
//                    $q->where($this->coreImageIdCol, $id);
//                })
//                ->when($imgParentId, function ($q, $imgParentId){
//                    $q->where($this->coreImageImgParentIdCol, $imgParentId);
//                })
//                ->when($imgType, function ($q, $imgType){
//                    $q->where($this->coreImageImgTypeCol, $imgType);
//                })
//                ->first();
//        return $image;
//    }

    public function getFolderImagePath()
    {
        return $this->img_folder_path;
    }

    public function store($request){
        DB::beginTransaction();
        try{
            $image = new CoreImage();
            if(isset($request->img_parent_id) && !empty($request->img_parent_id))
                $image->img_parent_id = $request->img_parent_id;

            if(isset($request->img_type) && !empty($request->img_type))
                $image->img_type = $request->img_type;

            if(isset($request->img_path) && !empty($request->img_path))
                $image->img_path = $request->img_path;

            if(isset($request->img_width) && !empty($request->img_width))
                $image->img_width = $request->img_width;

            if(isset($request->img_height) && !empty($request->img_height))
                $image->img_height = $request->img_height;

            if (isset($request->ordering) && !empty($request->ordering))
                $image->ordering = $request->ordering;
            else
                $image->ordering = 1;

            if (isset($request->added_user_id) && !empty($request->added_user_id))
                $image->added_user_id = $request->added_user_id;
            else
                $image->added_user_id = Auth::user()->id;

            $image->save();

            DB::commit();
            return $image;
        }catch(\Throwable $e){
            DB::rollBack();
            return ['error' => $e];
        }
    }

    public function insertImage($file, $data, $image = false)
    {
        try{

        $isCreate = $image == false || empty($image) ? true: false;

        $fileName = newFileName($file);
        $extension = $file->getClientOriginalExtension();

        if($extension == 'ico'){
            Storage::putFileAs($this->storage_upload_path, $file, $fileName);
            Storage::putFileAs($this->storage_thumb1x_path, $file, $fileName);
            Storage::putFileAs($this->storage_thumb2x_path, $file, $fileName);
            Storage::putFileAs($this->storage_thumb3x_path, $file, $fileName);
            $org_image = getimagesize($file);

            $width = $org_image[0];
            $height = $org_image[1];

        }else{
            // save original image to 'uploads'
            $org_image = $this->uploadOrgImage($file, $fileName);

            // save thumb 1x image to 'thumbnail'
            $this->createThumbnail1x($file, $fileName);

            // save thumb 2x image to 'thumbnail2x'
            $this->createThumbnail2x($file, $fileName);

            // save thumb 3x image to 'thumbnail3x'
            $this->createThumbnail3x($file, $fileName);

            $width = $org_image->width();
            $height = $org_image->height();
        }

        if($isCreate){
            $image = new CoreImage();
        }

        $image->img_parent_id = $data['img_parent_id'];
        $image->img_type = $data['img_type'];
        $image->img_path = $fileName;
        $image->img_width = $width;
        $image->img_height = $height;
        $image->ordering = isset($data['ordering'])?$data['ordering']:1;


        if(array_key_exists("img_desc", $data)){
            $image->img_desc = $data['img_desc'];
        }

        if($isCreate){
            $image->added_user_id = Auth::user()->id;
            $image->save();
        }else{
            $image->updated_user_id = Auth::user()->id;
            $image->update();
        }

        } catch(\Throwable $e){

            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function insertImageToStorage($file, $old_path = false)
    {
        try{
            if($old_path && !empty($old_path)){
                $this->deleteImage($old_path);
            }
            $fileName = newFileName($file);
            $extension = $file->getClientOriginalExtension();

            if($extension == 'ico'){
                Storage::putFileAs($this->storage_upload_path, $file, $fileName);
                Storage::putFileAs($this->storage_thumb1x_path, $file, $fileName);
                Storage::putFileAs($this->storage_thumb2x_path, $file, $fileName);
                Storage::putFileAs($this->storage_thumb3x_path, $file, $fileName);
                $org_image = getimagesize($file);

            }else{
                // save original image to 'uploads'
                $org_image = $this->uploadOrgImage($file, $fileName);

                // save thumb 1x image to 'thumbnail'
                $this->createThumbnail1x($file, $fileName);

                // save thumb 2x image to 'thumbnail2x'
                $this->createThumbnail2x($file, $fileName);

                // save thumb 3x image to 'thumbnail3x'
                $this->createThumbnail3x($file, $fileName);
            }
            return $fileName;
        }catch(\Throwable $e){
            return ['error' => $e->getMessage()];
        }

    }

    // save orginal image to upload
    public function uploadOrgImage($file, $fileName){
        try{
            $org_image = Image::make($file);
            // dd($this->storage_upload_path);

            if(!File::isDirectory(public_path().$this->storage_upload_path)){
                File::makeDirectory(public_path().$this->storage_upload_path, 0777, true, true);
            }
            $org_image->save(public_path() . $this->storage_upload_path . $fileName, 50);
            return $org_image;
        }catch(Exception $e){
            return $e;
        }
    }

    // save image From URL
    public function saveImage($file, $fileName){

        $this->uploadOrgImage($file, $fileName);
        $this->createThumbnail1x($file, $fileName);
        $this->createThumbnail2x($file, $fileName);
        $this->createThumbnail3x($file, $fileName);

    }

    // save image From URL
    public function saveImageFromUrl($fileName, $url){
        //for uploads
        $data = file_get_contents($url);

        if(!File::isDirectory(public_path().$this->storage_upload_path)){
            File::makeDirectory(public_path().$this->storage_upload_path, 0777, true, true);
        }

        file_put_contents(public_path().$this->storage_upload_path.$fileName, $data);

        $this->createThumbnail1x($data, $fileName);
        $this->createThumbnail2x($data, $fileName);
        $this->createThumbnail3x($data, $fileName);

    }


    // save thumb 1x
    public function createThumbnail1x($file, $fileName){
        $thumbnail1x = Image::make($file);

        if(!File::isDirectory(public_path().$this->storage_thumb1x_path)){
            File::makeDirectory(public_path().$this->storage_thumb1x_path, 0777, true, true);
        }
        $thumbnail1x->resize(200, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $thumbnail1x->save(public_path().$this->storage_thumb1x_path.$fileName);
    }

    // save thumb 2x
    public function createThumbnail2x($file, $fileName){
        $thumbnail2x = Image::make($file);

        if(!File::isDirectory(public_path().$this->storage_thumb2x_path)){
            File::makeDirectory(public_path().$this->storage_thumb2x_path, 0777, true, true);
        }
        $thumbnail2x->resize(400, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $thumbnail2x->save(public_path().$this->storage_thumb2x_path.$fileName);
    }

    // save thumb 3x
    public function createThumbnail3x($file, $fileName){
        $thumbnail3x = Image::make($file);

        if(!File::isDirectory(public_path().$this->storage_thumb3x_path)){
            File::makeDirectory(public_path().$this->storage_thumb3x_path, 0777, true, true);
        }
        $thumbnail3x->resize(600, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $thumbnail3x->save(public_path().$this->storage_thumb3x_path.$fileName);

    }

    // delete images
    public function clearUnuseImage(){
        $files = Storage::files('/storage/thumbnail3x/');
        $filenames = [];
        foreach ($files as $file) {
            array_push($filenames, explode('/', $file)[2]);
        }

        $coreImages = DB::table('psx_core_images')->pluck('img_path')->toArray();
        $userImages = DB::table('users')->pluck('user_cover_photo')->toArray();

        $useFiles = [];
        foreach ($filenames as $filename) {
            if (!in_array($filename, $coreImages) && !in_array($filename, $userImages)) {
                $this->deleteImage($filename);
            }else{
                array_push($useFiles, $filename);
            }
        }
    }
    public function deleteImage($img_path){
        // dd($img_path);

        Storage::delete($this->upload_path . $img_path);
        Storage::delete($this->storage_upload_path . $img_path);
        Storage::delete($this->storage_thumb1x_path . $img_path);
        Storage::delete($this->storage_thumb2x_path . $img_path);
        Storage::delete($this->storage_thumb3x_path . $img_path);
        Storage::delete($this->thumb1x_path . $img_path);
        Storage::delete($this->thumb2x_path . $img_path);
        Storage::delete($this->thumb3x_path . $img_path);
    }
    public function deleteEditorImage($img_path){
        // dd($img_path);
        Storage::delete($this->upload_path . $img_path);
        Storage::delete($this->storage_upload_path . $img_path);
        Storage::delete($this->thumb1x_path . $img_path);
        Storage::delete($this->thumb2x_path . $img_path);
        Storage::delete($this->thumb3x_path . $img_path);
    }

    // insert video
    public function insertVideo($file, $data, $video = false){
        $isCreate = $video == false || empty($video) ? true: false;

        // save original video to 'uploads'
        $fileName = uniqid()."_".$file->getClientOriginalName();
        $file->move(public_path().$this->storage_upload_path, $fileName);

        if($isCreate){
            $video = new CoreImage();
        }

        $video->img_parent_id = $data[$this->coreImageImgParentIdCol];
        $video->img_type = $data[$this->coreImageImgTypeCol];
        $video->img_path = $fileName;

        if(array_key_exists("img_desc", $data)){
            $video->img_desc = $data['img_desc'];
        }

        if($isCreate){
            $video->added_user_id = Auth::user()->id;
            $video->save();
        }else{
            $video->updated_user_id = Auth::user()->id;
            $video->update();
        }
    }

    // update video
    public function updateVideo($request, $id){
        // save video
        $conds = [
            $this->coreImageIdCol => $id,
        ];
        $video = $this->getImage($conds);
        $this->deleteImage($video->img_path);

        if($request->file('video')){
            $file = $request->file('video');
            $fileName = newFileName($file);

            $video->img_path = $fileName;

            $org_image = $this->uploadOrgImage($file, $fileName);
        }

        if (isset($request->updated_user_id) && !empty($request->updated_user_id)) {
            $video->updated_user_id = $request->updated_user_id;
        }else{
            $video->updated_user_id = Auth::user()->id;
        }

        $video->update();
    }

    // delete video
    public function deleteVideo($img_path){
        Storage::delete($this->upload_path . $img_path);
    }

    public function getImage($conds){
        $image = CoreImage::where($conds)->first();
        return $image;
    }

    public function getImages($imgParentId = null, $imgType = null,$limit = null, $offset = null, $notImgTypes = null){
        $images = CoreImage::when($imgParentId, function ($q, $imgParentId){
                                $q->where($this->coreImageImgParentIdCol, $imgParentId);
                            })
                            ->when($imgType, function ($q, $imgType){
                                $q->where($this->coreImageImgTypeCol, $imgType);
                            })
                            ->when($notImgTypes, function ($q, $notImgTypes){
                                $q->whereNotIn($this->coreImageImgTypeCol, $notImgTypes);
                            })
                            ->when($limit, function ($query, $limit) {
                                $query->limit($limit);
                            })
                            ->when($offset, function ($query, $offset) {
                                $query->offset($offset);
                            })->latest()->get();
        return $images;
    }

    public function update($request, $id){
        // save image

        // validation start
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        if ($extension !== 'ico'){
            $request->validate([
                'image' => 'nullable|sometimes|image'
            ]);
        }
        // validation end

        $conds = [
            $this->coreImageIdCol => $id,
        ];
        $image = $this->getImage($conds);
        $this->deleteImage($image->img_path);

        if($request->file('image')){
            $file = $request->file('image');
            $fileName = newFileName($file);

            $image->img_path = $fileName;
            $extension = $file->getClientOriginalExtension();

            if($extension == 'ico'){
                if(!File::isDirectory(public_path().$this->storage_upload_path)){
                    File::makeDirectory(public_path().$this->storage_upload_path, 0777, true, true);
                }
                if(!File::isDirectory(public_path().$this->storage_thumb1x_path)){
                    File::makeDirectory(public_path().$this->storage_thumb1x_path, 0777, true, true);
                }
                if(!File::isDirectory(public_path().$this->storage_thumb2x_path)){
                    File::makeDirectory(public_path().$this->storage_thumb2x_path, 0777, true, true);
                }
                if(!File::isDirectory(public_path().$this->storage_thumb3x_path)){
                    File::makeDirectory(public_path().$this->storage_thumb3x_path, 0777, true, true);
                }
                Storage::putFileAs($this->storage_upload_path, $file, $fileName);
                Storage::putFileAs($this->storage_thumb1x_path, $file, $fileName);
                Storage::putFileAs($this->storage_thumb2x_path, $file, $fileName);
                Storage::putFileAs($this->storage_thumb3x_path, $file, $fileName);
                $org_image = getimagesize($file);

                $image->img_width = $org_image[0];
                $image->img_height = $org_image[1];
            }else{
                $org_image = $this->uploadOrgImage($file, $fileName);
                $this->createThumbnail1x($file, $fileName);
                $this->createThumbnail2x($file, $fileName);
                $this->createThumbnail3x($file, $fileName);

                $image->img_width = $org_image->width();
                $image->img_height = $org_image->height();
            }
        }

        if (isset($request->ordering) && !empty($request->ordering)) {
            $image->ordering = $request->ordering;
        }

        if (isset($request->img_desc) && !empty($request->img_desc)) {
            $image->img_desc = $request->img_desc;
        }

        if (isset($request->img_path) && !empty($request->img_path)) {
            $image->img_path = $request->img_path;
        }

        if (isset($request->updated_user_id) && !empty($request->updated_user_id)) {
            $image->updated_user_id = $request->updated_user_id;
        }else{
            $image->updated_user_id = Auth::user()->id;
        }

        $image->update();
    }

    public function editorUpdateOrCreateImage($request, $fileKey, $imgParentId, $imgType ){
        if ($request->file($fileKey)){
            $conds[$this->coreImageImgParentIdCol] = $imgParentId;
            $conds[$this->coreImageImgTypeCol] = $imgType;


            $file = $request->file($fileKey);
            $data[$this->coreImageImgParentIdCol] = $imgParentId;
            $data[$this->coreImageImgTypeCol] = $imgType;


                $url=$this->insertEditorImage($file, $data);

            return $url;

        }
    }
    public function insertEditorImage($file, $data, $image = false)
    {
        try{

        $isCreate =true;

        $fileName = newFileName($file);
        $extension = $file->getClientOriginalExtension();


        if($extension == 'ico'){
            Storage::putFileAs($this->storage_upload_path, $file, $fileName);
            Storage::putFileAs($this->storage_thumb1x_path, $file, $fileName);
            Storage::putFileAs($this->storage_thumb2x_path, $file, $fileName);
            Storage::putFileAs($this->storage_thumb3x_path, $file, $fileName);
            $org_image = getimagesize($file);

            $width = $org_image[0];
            $height = $org_image[1];

        }else{
            // save original image to 'uploads'
            $org_image = $this->uploadOrgImage($file, $fileName);

            // save thumb 1x image to 'thumbnail'

            $width = $org_image->width();
            $height = $org_image->height();
        }


            $image = new CoreImage();


        $image->img_parent_id = $data['img_parent_id'];
        $image->img_type = $data['img_type'];
        $image->img_path = $fileName;
        $image->img_width = $width;
        $image->img_height = $height;
        $image->ordering = isset($data['ordering'])?$data['ordering']:1;


        if(array_key_exists("img_desc", $data)){
            $image->img_desc = $data['img_desc'];
        }


            $image->added_user_id = Auth::user()->id;
            $image->save();
            $folder_path= 'storage/' .$this->getFolderImagePath(). '/uploads';
            $url = asset($folder_path) . '/' . $image->img_path;
           return $url;

        } catch(\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function updateOrdering($request, $id){
        // save image
        $conds = [
            $this->coreImageIdCol => $id,
        ];
        $image = $this->getImage($conds);

        if (isset($request->ordering) && !empty($request->ordering)) {
            $image->ordering = $request->ordering;
        }

        if (isset($request->updated_user_id) && !empty($request->updated_user_id)) {
            $image->updated_user_id = $request->updated_user_id;
        }else{
            $image->updated_user_id = Auth::user()->id;
        }

        $image->update();
    }

    public function destroy($id){
        $conds = [
            $this->coreImageIdCol => $id,
        ];
        $image = $this->getImage($conds);
        $this->deleteImage($image->img_path);
        $image->delete();

    }
    public function destroyEditor($id){
        $conds = [
            $this->coreImageIdCol => $id,
        ];
        $image = $this->getImage($conds);
        $this->deleteEditorImage($image->img_path);
        $image->delete();

    }

    public function deleteImagesFromBoth($images){
        if(count($images)>0){
            $imageIds = $images->pluck($this->coreImageIdCol);
            CoreImage::destroy($imageIds);
            foreach($images as $image){
                // delete image from storage folder
                $this->deleteImage($image->img_path);
//                $image->delete();
            }
        }
    }

    public function deleteAllBy($conds = null)
    {
        DB::beginTransaction();
        try {
            CoreImage::when($conds, function ($query, $conds) {
                $query->where($conds);

            })->delete();

            DB::commit();
            return true;
        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }
}
