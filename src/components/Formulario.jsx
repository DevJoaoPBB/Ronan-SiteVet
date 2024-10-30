import "./Formulario.css";
import { useState } from "react";

function Formulario({ campos, idf, TbDestino }) {
  const [dados, setDados] = useState({});

  const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados, [chave]: valor });
  };
  //evento = e = submit
  const salvarDados = async (e) => {
    e.preventDefault(); //prevenindo o evento padrão
    console.log(dados);
    const docRef = await addDoc(collection(db, TbDestino), dados);
  };

  return (
    <form id={idf} onSubmit={salvarDados}>
      {campos.map((item) => {
        return (
          <div className="formulario">
            <label htmlFor={item.id}>{item.nome}</label>
            <input
              id={item.id}
              type={item.tipo}
              value={dados[item.id]}
              onChange={alteraDados}
            />
          </div>
        );
      })}
      <button type="submit"> Enviar informação</button>
    </form>
  );
} //Fim do Componente Formulario

export default Formulario;
