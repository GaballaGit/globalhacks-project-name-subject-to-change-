<script>
    import { UpdateWeather } from "#lib/export.ts";

    let advanced = $state(false);
    let date = $state('');
    let temp = $state(0);
    let wind = $state(0);

  function toggle_advanced() {
    advanced = !advanced;
  }

  function get_weather() {
    return {date, temp, wind };
  }

  function update_weather() {
    UpdateWeather(get_weather());
    //console.log(get_weather());
  }

    $effect(() => {
      console.log(advanced);
    });
</script>


<div id="forum">
  <form>
    <div id="date_container">
      <p>Date:</p>
      <input type="date" bind:value={date} onchange={update_weather} disabled={advanced}> 
    </div>
    {#if !advanced}
      <button type="button" onclick={toggle_advanced}>Advance &#60;</button>
    {:else}
      <button type="button" onclick={toggle_advanced}>Advance v</button>
      <div id="temp_container">
        <p>Temperature:</p>
        <input type="number" bind:value={temp} onchange={update_weather}>
      </div>
      <div id="wind_container">
        <p>Wind Speed:</p>
        <input type="number" bind:value={wind} onchange={update_weather}>
      </div>
    {/if}
  </form>
</div>
