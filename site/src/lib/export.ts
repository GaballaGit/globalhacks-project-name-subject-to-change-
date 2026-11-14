// This file is to export weather/loc data to the backend.

let weather_data: object;
let loc_data: object;

export async function UpdateWeather(weather: object) {
  weather_data = weather;
  await exportData(weather_data, loc_data);
}

export async function UpdateLoc(loc: object) {
  loc_data = loc;
  await exportData(weather_data, loc_data);
}

async function exportData(weather: object, loc: object) {
  const data = {
    weather: weather,
    loc: loc,
  };

  console.log(data);

  await fetch("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
