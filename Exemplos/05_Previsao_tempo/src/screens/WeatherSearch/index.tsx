import { useState } from "react";
import { SourceCodePro_900Black } from "@expo-google-fonts/source-code-pro";
import { useFonts } from "expo-font";
import {
  ButtonText,
  Caption,
  Card,
  Container,
  SearchButton,
  SearchInput,
  SubTitle,
  Icon,
  TextLarge,
} from "./styles";
import axios from "axios";
import { WeatherResponse } from "../../types/weather";
import { Keyboard, Text } from "react-native";
import { SkeletonCard } from "../../components/SkeletonCard";

const WeatherSearch = () => {
  const [searchParam, setSearchParam] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const [loaded] = useFonts({
    SourceCodePro_900Black,
  });

  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const APP_ID = "e4b4c5f18e7a71e7b43a24ccc9b3cffa";
  const API_CONFIGS = "units=metric&lang=pt_br";

  const FULL_URL = `${BASE_URL}?q=${searchParam}&appid=${APP_ID}&${API_CONFIGS}`;

  const handleSearchWeather = async () => {
    if (searchParam && searchParam.length > 0) {
      Keyboard.dismiss();

      try {
        setLoading(true);
        const response = await axios.get<WeatherResponse>(FULL_URL);

        setWeatherData(response.data);
        setSearchParam("");
      } catch (error) {
        console.log(error);
        setWeatherData(undefined);
      } finally {
        setLoading(false);
      }
    }
  };

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
          <Card
            style={{
              width: "95%",
              /*
              ios ->
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
            <SearchInput
              onChangeText={setSearchParam}
              value={searchParam}
              placeholder="Escreva a cidade"
              returnKeyType="search"
            />
            <SearchButton onPress={handleSearchWeather}>
              <ButtonText>Buscar</ButtonText>
            </SearchButton>
          </Card>
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
