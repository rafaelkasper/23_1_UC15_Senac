import { useEffect, useState } from "react";
import { SourceCodePro_900Black } from "@expo-google-fonts/source-code-pro";
import { useFonts } from "expo-font";
import * as Location from "expo-location";
import { Caption, Card, Container, SubTitle, Icon, TextLarge } from "./styles";
import axios from "axios";
import { LatitudeLongitude, WeatherResponse } from "../../types/weather";
import { Text } from "react-native";
import { SkeletonCard } from "../../components/SkeletonCard";

const WeatherSearch = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<LatitudeLongitude | any>();

  const [loaded] = useFonts({
    SourceCodePro_900Black,
  });

  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const APP_ID = "";
  const API_CONFIGS = "units=metric&lang=pt_br";

  const FULL_URL = `${BASE_URL}?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&appid=${APP_ID}&${API_CONFIGS}`;

  const handleSearchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get<WeatherResponse>(FULL_URL);

      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      setWeatherData(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    const request = async () => {
      await handleSearchWeather();
    };

    request();
  }, [location]);

  return (
    loaded && (
      <>
        <Container>
          <Text
            style={{
              fontSize: 40,
              color: "#fff",
              margin: 14,
              fontFamily: "SourceCodePro_900Black",
            }}
          >
            Aclimator
          </Text>

          {!!weatherData && !loading && (
            <Card
              style={{
                /*
              borderWidth: 1,
              borderRadius: 2,
              borderColor: "#25252544",
              borderBottomWidth: 4,
              shadowColor: "#000",
              shadowOffset: { width: 4, height: 6 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              */
                elevation: 8,
              }}
            >
              <SubTitle>{weatherData?.name}</SubTitle>
              <TextLarge>{Math.round(weatherData.main.temp)} ºC</TextLarge>

              <Icon
                source={{
                  uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                }}
              />
              <SubTitle>
                {weatherData?.weather[0].description.toUpperCase()}
              </SubTitle>
              <Caption>
                Sensação térmica: {Math.round(weatherData?.main.feels_like)} ºC
              </Caption>
              <Caption>Min: {Math.round(weatherData.main.temp_min)} ºC</Caption>
              <Caption>Max: {Math.round(weatherData.main.temp_max)} ºC</Caption>
            </Card>
          )}
        </Container>

        {loading && (
          <Container>
            <SkeletonCard />
          </Container>
        )}
      </>
    )
  );
};

export default WeatherSearch;
