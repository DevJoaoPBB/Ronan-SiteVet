import React, { useState, useEffect } from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Secao from "./Secao";
import Cartao from "./Cartao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";

import { collection, getDocs } from "firebase/firestore";
import db from "../database/firebaseConfig";

const Principal = () => {
  const [dados, setDados] = useState([]); // Estado para armazenar os dados

  // Função para carregar dados da coleção
  const lerBanco = async (Ncolec) => {
    const comentarios = await getDocs(collection(db, Ncolec)); // Carrega os dados da Coleção
    const registros = [];   // Cria um array vazio
    comentarios.forEach((documento) => {   // Itera sobre os documentos
      registros.push(documento.data()); // Adiciona os documentos ao array
    });
    setDados(registros); // Atualiza o estado com os dados
    return registros; // Retorna o array com os dados
  };

  // UseEffect para carregar dados ao carregar a pagina
  useEffect(() => {
    lerBanco('servicos');
  }, []); // O array vazio garante que o efeito só seja executado uma vez

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
        <Titulo texto="Serviços Cadastrados" />
        {dados.map((item, index) => (
          <Cartao
            key={index}
            titulo={item.titulo}
            descricao={item.desc}
            imagem={item.img} 
          />
        ))}
      </Secao>

      <Secao>
        <Titulo texto="Contato" />
        <Formulario campos={campos} idf={"contato"} TbDestino={"comentarios"}  />
        <button onClick={() => lerBanco('comentarios')}>Ler Contatos</button>
      </Secao>
    </div>
      );
 
    };
    
    export default Principal;