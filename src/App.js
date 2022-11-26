import { useState, useEffect } from "react";
import { personagem } from "./api/api";
import "./App.css";

function App() {
  const [showCharacter, setShowCharacter] = useState([]);
  const [carregando, setCarregando] = useState(false);
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

  const cores = (status) =>
    status === "Alive" ? "green" : status === "Dead" ? "red" : "grey";

  return (
    <div className="App">
      <div>
        <p style={{ color: "#FFF" }}>
          {carregando === true ? "Carregando" : "Não Carregando"}
        </p>
      </div>
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
