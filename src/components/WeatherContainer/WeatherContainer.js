import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const WeatherContainer = ({ weather }) => {
  const [icon, setIcon] = useState("");
  const { location, current, forecast } = weather;

  useEffect(() => {
    const icon = current?.condition?.icon;
    setIcon(icon);
  }, [weather]);

  return (
    <View
      style={{
        paddingVertical: 50,
        paddingHorizontal: 20,
        width: "100%",
        height: "100%",
      }}
    >
      <View>
        <Text style={styles.cityName}>
          {" "}
          <Image
            style={{ width: 16, height: 16 }}
            source={require("../../../assets/images/location.png")}
          />
          {location?.name}
        </Text>
      </View>

      <View>
        <Text style={styles.cityWeatherText}>{current?.condition?.text}</Text>
      </View>

      <View>
        <Text style={styles.cityTemp}>
          <Image
            style={{ width: 72, height: 72 }}
            source={{ uri: `https:` + `${icon}` }}
          />
          {current?.temp_c.toFixed(0)}°C
        </Text>
      </View>

      <View style={styles.cityInfosContainer}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
            color: "black",
          }}
        >
          Météo Aujourd'hui
        </Text>

        <ScrollView horizontal={true}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            {forecast?.forecastday[0]?.hour?.map((day, index) => {
              return (
                <View style={styles.cityInfosSquare} key={index}>
                  <Image
                    style={{ width: 48, height: 48, marginBottom: 10 }}
                    source={{ uri: `https:` + `${day.condition.icon}` }}
                  />
                  <Text style={{ color: "#adadad", marginBottom: 10 }}>
                    {day.time.substr(day.time.length - 5).replace(":", "h")}
                  </Text>
                  <Text
                    style={{ color: "black", fontWeight: "bold", fontSize: 24 }}
                  >
                    {day.temp_c.toFixed(0)}°
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  cityName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  cityTemp: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
  },
  cityWeatherText: {
    position: "absolute",
    right: -10,
    top: 150,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    transform: [{ rotate: "-90deg" }],
  },
  cityInfosContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "30%",
  },
  cityInfosSquare: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 20,
  },
});

export default WeatherContainer;
