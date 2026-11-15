<!--
  The purpose of this component block is to render a map on the site.

  When the user moves around the map we should send some information to our backend
  to calculate outage. The info we should pass onto the backend will be: Pan, Zoom, Selected Region.
  For now I decided to do this by passing on the lat and lng.

  TODO:
  We will then display the current region's risk of outage.
-->

<script module>
  import * as maplibregl from 'maplibre-gl';
  import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

  maplibregl.setWorkerUrl(maplibreWorkerUrl);


</script>
<script lang="ts">
  import { MapLibre, MapEvents } from "svelte-maplibre";
  import 'maplibre-gl/dist/maplibre-gl.css';
  import { UpdateLoc } from '#lib/export.ts';

  async function handleMoveEnd(event: { target: import("maplibre-gl").Map }) {                                                                                       
     const map = event.target;                                                                                                                                        
     const center = map.getCenter();                                                                                                                                  
     const bounds = map.getBounds();                                                                                                                                  
                                                                                                                                                                      
     const location = {                                                                                                                                               
       center: { lat: center.lat, lng: center.lng },                                                                                                                  
       zoom: map.getZoom(),                                                                                                                                           
       bounds: bounds.toArray(),                                                                                                                                      
     };                                                                                                                                                               

    //  console.log(location);

    UpdateLoc(location);
                                                                                                                                                                      
   }
</script>

<div id="map_container">
  <MapLibre
    center={[0, 20]}
    zoom={2}
    class="map"
    style="https://tiles.openfreemap.org/styles/liberty"
    >
    <MapEvents onmoveend={handleMoveEnd} />
  </MapLibre>
</div>

<style>
#map_container {
  width: min(45vw, 500px);
  aspect-ratio: 1;
}

:global(.map) {
  width: 100%;
  height: 100%;
}
</style>

