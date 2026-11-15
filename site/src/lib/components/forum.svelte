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
    <button type="button" onclick={toggle_advanced}>
      Advance {advanced ? 'v' : '<'}
    </button>
    <div class="field" class:collapsed={!advanced}>
      <p>Temperature:</p>
      <input type="number" bind:value={temp} onchange={update_weather}>
    </div>
    <div class="field" class:collapsed={!advanced}>
      <p>Wind Speed:</p>
      <input type="number" bind:value={wind} onchange={update_weather}>
    </div>
  </form>
</div>

<style>
  #forum {
    width: min(45vw, 500px);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  #date_container,
  .field {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  button {
    box-sizing: border-box;
    width: 100%;
    min-height: 2.4rem;
    padding: 0.45rem 1.25rem;
    border: 1px solid #d1d5db;
    border-radius: 0.6rem;
    background: #fff;
    color: #374151;
    font: inherit;
    cursor: pointer;
    box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
    transition: background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
  }

  button:hover {
    border-color: #4f8f69;
    background: #f4f8f5;
  }

  button:focus-visible {
    outline: none;
    border-color: #4f8f69;
    box-shadow: 0 0 0 3px rgb(79 143 105 / 18%);
  }

  input {
    box-sizing: border-box;
    min-height: 2.4rem;
    padding: 0.45rem 0.7rem;
    border: 1px solid #d1d5db;
    border-radius: 0.6rem;
    background: #fff;
    color: #1f2937;
    font: inherit;
    box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }

  input:focus-visible {
    outline: none;
    border-color: #4f8f69;
    box-shadow: 0 0 0 3px rgb(79 143 105 / 18%);
  }

  input:disabled {
    background: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
  }

  .collapsed {
    visibility: hidden;
  }
</style>
