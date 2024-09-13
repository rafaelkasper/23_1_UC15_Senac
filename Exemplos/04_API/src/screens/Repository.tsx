import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { RepositoryDTO } from "../types/repositories";
import axios from "axios";
import Card from "../components/Card";
import { axiosInstance } from "../utils/axios";

const Repository = () => {
  const [repositoriesList, setRepositoriesList] = useState<RepositoryDTO[]>([]);

  const getData = async () => {
    // Faz a reqisição
    /*
    // Requisição com fetch
    const response = await fetch(URL);
    const responseFormatted: RepositoryDTO[] = await response.json();
    // Salvar no estado
    setRepositoriesList(responseFormatted);
    console.log(responseFormatted);
    */

    // Requisição com axios com instance
    try {
      const response = await axiosInstance.get<RepositoryDTO[]>("/repos");

      console.log(response.data);
      setRepositoriesList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      // Executa algo independente se deu sucesso ou erro
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={repositoriesList}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
  },
});

export default Repository;
