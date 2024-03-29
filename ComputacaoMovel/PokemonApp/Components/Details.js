//Details.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const Details = (props) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const { state } = props.navigation;
    fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
      .then((res) => res.json())
      .then((details) => setDetails(details));
  };

  return details.name ? (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ff9900' }}>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png`,
        }}
      />
      <Text style={styles.text}>Nome: {details.name}</Text>
      <Text style={styles.text}>Peso: {details.height}</Text>
      <Text style={styles.text}>Altura: {details.weight}</Text>
      <Text style={styles.text}>
        Habilidades: {details.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>Tipo: {details.types[0].type.name}</Text>
    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9900',
  },
});
