import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import api from "./src/Utils/axios";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  // useFonts({
  //   GenerealSans400: require("./src/assets/fonts/GenerealSans-Regular.otf"),
  // });
  const [pokemons, setPokemons] = useState([]);

  function getPokemons() {
    var endpoints = [];
    for (var i = 1; i++; i < 50) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res: any) => console.log(res));
    // api.get("/pokemon").then((response) => setPokemons(response.data));
  }

  useEffect(() => {
    getPokemons();
  }, []);

  console.log("pokemons", pokemons);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon List</Text>

      <ScrollView style={styles.scrollView}>
        {!pokemons ? (
          <Text>Carregando lista..</Text>
        ) : (
          <>
            {/* <FlatList
            data={pokemons?.results}
            renderItem={({ item }) => (
              <Text style={styles.list}>{item.key}</Text>
            )}
          /> */}
            {pokemons?.map((pokemon: any) => (
              <View>
                <Text> {pokemon.data.name}</Text>
                <Image source={{ uri: pokemon.data.sprites.front_default }} />
              </View>
            ))}

            <StatusBar style="auto" />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  list: {
    color: "#000",
  },
  title: {
    color: "#ff9900",
    marginBottom: "5%",
    marginTop: 50,
    fontSize: 30,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  scrollView: {
    backgroundColor: "#ff9900",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 80,
    paddingVertical: 50,
    borderRadius: 14,
  },
});
