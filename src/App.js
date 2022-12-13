import { useState, useEffect } from "react";
import { personagem } from "./api/api";
import "./App.css";
import axios from "axios";
/*  const getAllCharacters = () => {
    axios
      .get(https://rickandmortyapi.com/api/character/, {
        params: {
          name: nome,
          gender: gender,
          status: status
        },
      })
      .then((res) => setCharacters(res.data.results))
      .catch((err) => {
        if (err.message === 'Request failed with status code 404') {
          window.alert("Não encontrado...")
        }

        console.log(JSON.stringify(err?.message));
      });
  };  */
function App() {
  const [showCharacter, setShowCharacter] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [nome, setNome] = useState('')

  const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
  });

  const getAllCharacters = () => {
    return api.get("/character/", {
      params: {
        name: nome
      }
    }).then((res) => setShowCharacter(res.data.results)).then((res) => setShowCharacter(res.data.results))
  }

  useEffect(() => {
    setCarregando(true);
    personagem()
      .then((res) => {
        setShowCharacter(res.results)
       // console.log(JSON.stringify(res))
      })
      .catch((erro) => {
        console.log(erro);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);
  
  useEffect(() => {
    if (nome !== null && nome.length >= 3) {
      getAllCharacters();
    }
    getAllCharacters();

  }, [nome]);

  const cores = (status) => status === "Alive" ? "green" : status === "Dead" ? "red" : "grey";

  return (
    <div className="App">
     
      <input
        name="nome"
        id="nome"
        onChange={(e) => setNome(e.target.value)}
        className="inputPesquisa" 
        type="text" 
        placeholder="Pesquise por um personagem"
      />
      <div className="containerPersonagens">
        {showCharacter.map((person) => (
          <div className="box">
            <span></span>
            <section>
              <img src={person.image} alt={`Personagem ${person.name}`} />          
              <div className="details">
                <p>Nome:{person.name}</p>
                <p>
                  Status:{" "}
                  <strong style={{ color: cores(person.status) }}>
                    {person.status}
                  </strong>
                </p>

                <p>Espécie: {person.species}</p>
                <p>Gênero: {person.gender}</p>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
