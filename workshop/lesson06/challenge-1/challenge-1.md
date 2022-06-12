## [Home](../../../README.md) > [Back](lesson.md) > Coding Challenge #1

In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time 😁

### Your tasks:

1. Modify the weather code by replacing the 'https://api.openweathermap.org/geo/1.0/direct' with the new Geoparsing API to do forward geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: 'https://geocode.xyz/Thailand?json=1'. Use the fetch API and promises to get the data.

2. The response data from xxx include the information that succeeded or failed with that API call using the following code to check the error and throw an exception:

```
  if (!response.ok)
    throw new Error(`Something went wrong (${response.status})`);
```

you can use `console.log(response)` to see the details.

### Test data for bonus:

- Country or City 1: Chiang Mai
- Coordinates 2: London
- Coordinates 3: Usa
