**React Native Review Exercise 2**

Begin a new React Native app and import react-navigation into it (plus other dependencies). 

**Task 1: Create a Weather Screen**

1. Provide a screen where the user can enter 'city' and 'country' values.
2. Also provide a button on the same screen.
3. Touching the button should invoke a service which makes a call to OpenWeatherMap (using fetch). The URL will look like this:

```js
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
```

4. When the JSON is returned, populate a data model with properties such as the weather description and temperature.
5. Show the description and temperature on the screen.
6. Apply some style to your component via `stylesheet.create()`.

**Task 2: Persist Weather Data**

1. For each successful API call, append the weather results to an array.
2. Use AsyncStorage or SecureStore to persist this array. This way, the historical weather data will be available even if the app is closed and reopened.

**Task 3: Add More Navigation**

1. Implement a tab-based or drawer-based navigation system.
2. Have a tab for the current weather, a tab for the historical weather data, and a tab for settings or other options.

**Task 4: Add Error Handling**

1. Add error handling to the API call. Display a message if the API call fails, or if the user enters a city or country that doesn't exist.

**Task 5: Add More Weather Data**

1. Display more weather data, such as humidity, pressure, or sunrise and sunset times.

**Task 6: Add a Settings Screen**

1. Add a settings screen where the user can choose their preferred units (e.g., Celsius or Fahrenheit for temperature).

**If Time Allows:**

1. Store the weather data in a SQLite database.
2. Add a second screen to show the description and temperature. In the event that weather data is obtained, automatically navigate to this new screen, and provide a

navigation route back to the first screen.

**Optional:**

1. Show the wind speed and direction (and other weather info as you see fit).
2. For each request, append the weather results to an array. 
3. Show this historical array as a flatlist in a new view if the user chooses to navigate to it. 
4. Touching a data member in this view should navigate back to the first view, and should put the city and country values into the fields. Thus the user can easily make a fresh call for the latest weather.

---

This exercise will help you understand the concepts of APIs and data, navigation, and persisting data in React Native. Remember to use the React Native inspector for debugging your styles and layouts. Good luck!

--- 

Here are some helpful code examples.

A fetch example:

```js
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
```

and here's a possible screen that has two inputs and a fetch button:

```js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const fetchWeatherData = () => {
    // Fetch weather data and navigate to WeatherScreen
  };

  return (
    <View>
      <TextInput placeholder="City" value={city} onChangeText={setCity} />
      <TextInput placeholder="Country" value={country} onChangeText={setCountry} />
      <Button title="Fetch Weather" onPress={fetchWeatherData} />
    </View>
  );
};

export default HomeScreen;
```

Some other tips:

Sure, here are some additional hints and tips to help you complete the exercise:

**1. Fetching Weather Data:**

To fetch the weather data, you can use the `fetch` function in JavaScript. Here's a basic example:

```jsx
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  })
  .catch(error => {
    // Handle the error
  });
```

Remember to replace `${city}` and `${country}` with the actual city and country entered by the user.

**2. Navigating Between Screens:**

To navigate to the `WeatherScreen` after fetching the weather data, you can use the `navigation.navigate` function. You can also pass the fetched weather data to the `WeatherScreen` through the `params` argument:

```jsx
navigation.navigate('Weather', { data: data });
```

In the `WeatherScreen`, you can access the passed data through `route.params.data`.

**3. Persisting Weather Data:**

To persist the weather data, you can use the `AsyncStorage` API in React Native. Here's a basic example of how to save and load data:

```jsx
// Save data
AsyncStorage.setItem('weatherData', JSON.stringify(data));

// Load data
AsyncStorage.getItem('weatherData').then(data => {
  if (data !== null) {
    // Do something with the data
  }
});
```

Remember to handle any potential errors and to parse the data with `JSON.parse` after loading it.

**4. Adding More Navigation:**

To add a tab-based or drawer-based navigation system, you can use the `createBottomTabNavigator` or `createDrawerNavigator` function from `@react-navigation/bottom-tabs` or `@react-navigation/drawer`, respectively. You can find detailed examples in the [React Navigation documentation](https://reactnavigation.org/docs/getting-started).

**5. Handling Errors:**

To handle errors, you can use `try...catch` blocks around your code. This is especially important when dealing with asynchronous operations like fetching data from an API or reading data from AsyncStorage. Here's a basic example:

```jsx
try {
  // Do something that might throw an error
} catch (error) {
  // Handle the error
}
```

Remember to provide helpful error messages to the user and to fail gracefully whenever possible.