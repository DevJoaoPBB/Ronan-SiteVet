import React, { useState, useEffect } from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Secao from "./Secao";
import Cartao from "./Cartao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";
import Contato from "./Contato";

const Principal = () => {
  const [dados, setDados] = useState([]); // Estado para armazenar os dados

  const campos = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    }, //Fim do OBJETO
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Cidade",
      id: "cidade",
      tipo: "text",
    },
    {
      nome: "Estado",
      id: "estado",
      tipo: "text",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },
  ];

  const campos_serv = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Titulo: ",
      id: "titulo",
      tipo: "text",
    }, //Fim do OBJETO
    {
      nome: "Imagem",
      id: "img",
      tipo: "text",
    },
    {
      nome: "Descrição",
      id: "desc",
      tipo: "text",
    },
  ];

  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/topo.jpg" alt="Topo" />
      </Secao>

      <Secao>
      </Secao>

      <Secao>
        <Titulo texto="Contato" />
        <Contato></Contato>
      </Secao>
    </div>
      );
 
    };
    
    export default Principal;