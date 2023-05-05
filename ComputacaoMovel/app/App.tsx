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
  const [pokemons, setPokemons] = useState({});
  const [pokemon10, setPokemon10] = useState({});

  async function getPokemons() {
    /*const endpoints = [];
    for (let i = 1; i++; i < 50) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    const response = await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res: any) => {
        setPokemons(res);
        console.log(res);
      });*/
    api.get("pokemon").then((res: any) => setPokemons(res?.data));
    api.get("pokemon/10").then((res: any) => setPokemon10(res?.data));
  }

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {}, [pokemon10]);
  // api.get("/pokemon").then((response) => setPokemons(response.data));
  console.log("pokemons", pokemons?.results, pokemon10?.sprites?.front_default);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon List</Text>

      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          }}
        />
        {!pokemons ? (
          <Text>Carregando lista..</Text>
        ) : (
          <>
            {/* <FlatList
            data={pokemons?.results}
            renderItem={({ item }) => (
              <Text style={styles.list}>{item.key}</Text>
              <Image source={{ uri: pokemon.data.sprites.front_default }} />
            )}
          />*/}

            {pokemons?.results?.map((pokemon: any) => (
              <View style={styles.card} key={pokemon.name}>
                <Text> {pokemon.name}</Text>
                {/* <Image source={{ uri: pokemon10.sprites.front_default }} />*/}
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
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
