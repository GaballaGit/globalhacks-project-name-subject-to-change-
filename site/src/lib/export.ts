// This file is to export weather/map data to the backend.

export async function export_data(weather: object, map: object) {
  const data = {
    weather: weather,
    map_info: map,
  };

  await fetch("/api/export", {
    method: "POST",
    headers: { "application/type": "json" },
    body: JSON.stringify(data),
  });
}
