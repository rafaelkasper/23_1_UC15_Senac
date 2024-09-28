import { useState } from "react";
import { SourceCodePro_900Black } from "@expo-google-fonts/source-code-pro";
import { useFonts } from "expo-font";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
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
  Row,
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
  const APP_ID = "";
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

  const capitalizeFirstLetter = (term: string) => {
    return `${term.charAt(0).toUpperCase()}${term.slice(1)}`;
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
              padding: 16,
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
            <>
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
                <Row>
                  <Feather name="map-pin" size={22} color="#fff" />
                  <SubTitle>{weatherData?.name}</SubTitle>
                </Row>
                <Row>
                  <Feather name="thermometer" size={40} color="#fff" />
                  <TextLarge>{Math.round(weatherData.main.temp)} ºC</TextLarge>
                </Row>
                <Icon
                  source={{
                    uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                  }}
                />
                <SubTitle>
                  {capitalizeFirstLetter(weatherData?.weather[0].description)}
                </SubTitle>
                <Row>
                  <MaterialCommunityIcons
                    name="coolant-temperature"
                    size={20}
                    color="#fff"
                  />
                  <Caption>
                    {Math.round(weatherData?.main.feels_like)} ºC
                  </Caption>
                </Row>
                <Row>
                  <FontAwesome6
                    name="temperature-arrow-up"
                    size={20}
                    color="#fff"
                  />
                  <Caption>{Math.round(weatherData.main.temp_min)} ºC</Caption>
                </Row>
                <Row>
                  <FontAwesome6
                    name="temperature-arrow-down"
                    size={20}
                    color="#fff"
                  />
                  <Caption>{Math.round(weatherData.main.temp_max)} ºC</Caption>
                </Row>
                <Row>
                  <Feather name="wind" size={20} color="#fff" />
                  <Caption>{Math.round(weatherData.wind.speed)} m/s</Caption>
                </Row>
              </Card>
              <Row style={{ marginTop: 24 }}>
                <MaterialCommunityIcons
                  name="copyright"
                  size={20}
                  color="#fff"
                />
                <Caption>by Rafael Kasper</Caption>
              </Row>
            </>
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
