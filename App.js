import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/Header";
import List from "./src/List";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      nome: "Lucas Silva",
      decricao: "Mais um dia de muitos bugs :)",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
      likeada: true,
      likers: 1,
    },
    {
      id: 2,
      nome: "Matheus",
      decricao: "Isso sim é ser Raiz",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      likeada: false,
      likers: 0,
    },
    {
      id: 3,
      nome: "Jose Augusto",
      decricao: "Bora trabalhar",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
      likeada: false,
      likers: 3,
    },
    {
      id: 4,
      nome: "Gustavo Hemrique",
      decricao: "Isso que é T.I",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil4.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
      likeada: false,
      likers: 32,
    },
    {
      id: 1,
      nome: "Guilherme",
      decricao: "Boa Tarde galera do insta...",
      imgPerfil: "https://sujeitoprogramador.com/instareact/fotoPerfil5.png",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      likeada: false,
      likers: 1,
    },
  ]);

  return (
    <View>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  );
}
