// sempre importar o useState
import {useState} from "react";
import Nav from "./component/nav";
import "./style.css";


function App() {

  // variavel, setVariavel
  const [contador, setContador] = useState(0)
  const [ativo, setAtivo] = useState (false)
  const [dadosPessoa, setDadosPessoa] = useState ({
    nome: "Lucas",
    idade: "27"
  });
  // contador é o valor = 0;
  // setContador é o que atualiza a variavel contador;

  // criei uma variavel como menor, para fazer a subtração no array function
  const menor = () => {
    if (contador !== 0) {
    setContador(contador - 1);
    }
  }

  const maior = () => {
    setContador(contador + 1);
  }

  const handleAtivo = () =>{
    setAtivo(!ativo);
  } 

  return (
    <div className="App">
      <Nav />
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <button onClick={maior}>Somar</button>
      <button onClick={menor}>Diminuir</button>
      {/* React - class = className */}
      <button onClick={handleAtivo} className={ativo ? "ativo" : "inativo"}>
        {ativo ? "Ativo" : "Inativo"};
      </button>
    </div>
  );
}

export default App;
