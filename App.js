import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Navbar from "./src/components/Navbar/Navbar";
import { REAT_APP_API_KEY } from "@env";
import WeatherContainer from "./src/components/WeatherContainer/WeatherContainer";

export default function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("Bordeaux");
  const currentHours = new Date().getHours();
  const morning = currentHours >= 6 && currentHours <= 12;
  const afternoon = currentHours >= 12 && currentHours <= 18;
  const evening = currentHours >= 18 && currentHours <= 24;
  const night = currentHours >= 0 && currentHours <= 6;
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${REAT_APP_API_KEY}&q=${city}&lang=fr&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, []);

  return (
    <View>
      <ImageBackground
        source={
          morning
            ? require("./assets/images/morning.jpg")
            : afternoon
            ? require("./assets/images/afternoon.jpg")
            : evening
            ? require("./assets/images/evening.jpg")
            : night
            ? require("./assets/images/night.jpg")
            : require("./assets/images/morning.jpg")
        }
        resizeMode="cover"
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        ></View>
        {/* <Navbar /> */}
        <WeatherContainer weather={weather} />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
