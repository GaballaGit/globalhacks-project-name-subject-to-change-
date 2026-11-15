<script>
  import Navbar from "#lib/components/navbar.svelte";
  import Map from "#lib/components/map.svelte";
  import Forum from "#lib/components/forum.svelte";
</script>

<Navbar />
<div id="weather_map_container">
  <Forum />
  <Map />
</div>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  #weather_map_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
</style>
