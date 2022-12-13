import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const personagem = () => {
  return api.get("/character").then((res) => res.data);
};

/*/const getAllCharacters = (props) => {
  return api.get("/character/", {
    params: {
      name: props.nome
    }
  })
}*/

export { personagem };
