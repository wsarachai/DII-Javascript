## [Home](../../../README.md) > [Back](../lesson.md) > Exercise #1

### Your tasks:

1. The `https://api.openweathermap.org/geo/1.0/direct` API uses the name of the country to get the information including the location that we use to get the weather data. However, we will use another Web API. Modify the weather code by replacing the `https://api.openweathermap.org/geo/1.0/direct` with the new Geoparsing API (API Doc: https://geocode.xyz/api) to get the location instesd, For example, the AJAX call will be called to the URL with this format: 'https://geocode.xyz/Chiang+Mai?json=1'. Use the fetch API and promises to get the data.

2. The response data from `xxx` include the information that succeeded or failed with that API call using the following code to check the error and throw an exception:

```
  if (!response.ok)
    throw new Error(`Something went wrong (${response.status})`);
```

you can use `console.log(response)` to see the details.

### Test data for bonus:

- Country or City 1: Chiang Mai
- Coordinates 2: London
- Coordinates 3: Usa
