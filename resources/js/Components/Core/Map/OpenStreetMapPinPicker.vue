

<template>
  <div :class="mapSize" id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { onMounted } from "vue";

export default {
  name: "LeafletMap",
  props: {
    lat :{ 
      type: Number,
      default :0
    },
    lng: { 
      type: Number,
      default :0
    },
    mapSize: { 
      type: String,
      default : "h-64 w-64"
    },
    onChange : Function,
    dragValue: { 
      type: Boolean,
      default : true
    } 
  },
  setup(props) {
    let map = null;

    // delete L.Icon.Default.prototype._getIconUrl;
    // L.Icon.Default.mergeOptions({  
    //     iconRetinaUrl: iconRetinaUrl,  
    //     iconUrl: iconUrl,  
    //     shadowUrl: shadowUrl 
    //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
    //     iconUrl: require('leaflet/dist/images/marker-icon.png'),  
    //     shadowUrl: require('leaflet/dist/images/marker-shadow.png') 
    // });

    onMounted(() => {
      map = L.map("mapContainer").setView([props.lat == null || isNaN(props.lat) ? 0 : props.lat, props.lng == null || isNaN(props.lng) ? 0 : props.lng], 12);
      var marker_a;
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      if(props.dragValue) {
        marker_a = new L.Marker([ props.lat, props.lng], {draggable: props.dragValue}).addTo(map);
        marker_a.on('dragend', dragEndHandler);
      } else {
        marker_a = new L.Marker([ props.lat, props.lng]).addTo(map);
        marker_a.on('dragend');
      }
      
      function dragEndHandler(e) {
       
        var latlng = e.target.getLatLng();
        if(props.onChange != undefined){
          props.onChange(latlng);
        }
      }

    });

  }
 
};
</script>
