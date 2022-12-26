import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    mensagem: "",
    anexo: "",
  });

  function handleInputChange(event) {
    if (event.target.name === "anexo") {
      campos[event.target.name] = event.target.files[0];
    } else campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
  }

  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite o e=mail de destino..."
          onChange={handleInputChange}
        />
        <label htmlFor="email">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o seu nome..."
          onChange={handleInputChange}
        />
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Digite sua mensagem...."
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="anexo">Anexo</label>
        <input
          type="file"
          id="anexo"
          name="anexo"
          onChange={handleInputChange}
        />

        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}

export default App;
