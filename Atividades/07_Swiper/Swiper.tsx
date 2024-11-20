import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Feather } from "@expo/vector-icons";

interface swipeCard {
  title: string;
}

const Swiper: React.FC = () => {
  // useRef é usado para guardar a referência específica de um item do array ou componente da tela
  const swiperRef = useRef<Swiper<swipeCard>>(null);

  const arrayData = []; // TODO criar array de objetos com os dados

  // Função que é chamada quando o card é deslizado para a direita
  const onSwipeRight = (cardIndex: number) => {
    // Remover o card da listagem
    // Fazer alguma coisa com os cards curtidos
  };

  // Função que é chamada quando o card é deslizado para a esquerda
  const onSwipeLeft = (cardIndex: number) => {
    // Remover o card da listagem
  };

  const handleLike = () => {
    // Função que chama o onSwipeRight quando o card é curtido
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  const handleDislike = () => {
    // Função que chama o onSwipeLeft quando o card é rejeitado
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  return (
    <View style={styles.container}>
      {arrayData.length === 0 ? (
        <View style={styles.warningCard}>
          <Text style={styles.warningText}>Nenhum card disponível!</Text>
        </View>
      ) : (
        <Swiper
          ref={swiperRef}
          cards={arrayData}
          renderCard={} // Componente de card que será exibido -> semelhante ao usado em Flatlist
          onSwipedRight={onSwipeRight} // Função chamada quando o card é arrastado para a direita
          onSwipedLeft={onSwipeLeft} // Função chamada quando o card é arrastado para a esquerda
          cardIndex={0}
          backgroundColor={"#000"}
          stackSize={3}
          overlayLabels={{
            // Mensagem que aparece ao arrastar o card para os lados
            left: {
              title: "REJEITAR",
              style: {
                label: {
                  backgroundColor: "red",
                  color: "white",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "CURTIR",
              style: {
                label: {
                  backgroundColor: "green",
                  color: "white",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      )}

      {
        // Botões de curtir e rejeitar que ficam por cima do card
      }
      {arrayData.length > 0 && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.dislikeButton]}
            onPress={handleDislike}
          >
            <Feather name="x" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.likeButton]}
            onPress={handleLike}
          >
            <Feather name="heart" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Exemplo de estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    justifyContent: "center",
    alignItems: "center",
  },
  warningCard: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  warningText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  details: {
    fontSize: 18,
    color: "#ccc",
    marginTop: 5,
  },
  hobbies: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 5,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 50,
    width: "60%",
  },
  button: {
    backgroundColor: "#ff6b6b",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  likeButton: {
    backgroundColor: "#6bcf63",
  },
  dislikeButton: {
    backgroundColor: "#ff6b6b",
  },
});

export default Swiper;
