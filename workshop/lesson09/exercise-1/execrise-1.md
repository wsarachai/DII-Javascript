## [Home](../../../README.md) > [Back](../lesson.md) > Exercise #1

### Your tasks:

1. Register a new account with `https://api.openweathermap.org` to get the API key.

   - Login to the `https://api.openweathermap.org` and generate the new API key.

2. Register a new account with `https://geocode.xyz` to get the API key.

   - Login to the `https://geocode.xyz` and generate the new API key.

3. Use the API key to in our code and test the program. (You should read and understand the code)

4. Modify the existing code:

   - The `https://api.openweathermap.org/geo/1.0/direct` API uses the name of the country to get the information including the location that we use to get the weather data. However, we will use another Web API.
   - Modify the weather code by replacing the `https://api.openweathermap.org/geo/1.0/direct` with the new Geoparsing API (API Doc: https://geocode.xyz/api) to get the location instesd:
     - For example, the AJAX call will be called to the URL with this format: 'https://geocode.xyz/Chiang+Mai?json=1&auth=xxxxxxxxxx'. Use the fetch API and promises to get the data.
   - The response data from `https://geocode.xyz` include the information that succeeded or failed with that API call using the following code to check the error and throw an exception:

     ```
       if (!response.ok)
         throw new Error(`Something went wrong (${response.status})`);
     ```

Node: you can use `console.log(response)` to see the details.

### Test data for bonus:

- Country or City 1: Chiang Mai
- Coordinates 2: London
- Coordinates 3: Usa
