import { useState, useEffect } from "react";
import { personagem } from "./api/api";
import "./App.css";
import axios from "axios";
import InputPesquisa from "./components/InputPesquisa/index.js";

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

      <InputPesquisa
        name="nome"
        id="nome"
        value={nome}
        type="text"

        placeholder="Pesquise por um personagem"
        aoAlterado={valor => setNome(valor)}
      />
      
      <div className="containerPersonagens">
        {showCharacter.map((person) => (
          <div className="box" key={person.name}>
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
