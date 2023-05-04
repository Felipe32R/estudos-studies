import api from "../Utils/axios";
import { Text } from "../components/Text";

export function Main() {
  const pokemons = api.get("/");
  console.log("pokemons", pokemons);
  return (
    <>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
    </>
  );
}
