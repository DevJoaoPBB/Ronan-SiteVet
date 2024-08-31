import React, { useState, useEffect } from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Secao from "./Secao";
import Cartao from "./Cartao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";

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

function Admin(){
    return(
        <Secao>
        <Titulo texto="Serviços" />
        <Formulario campos={campos_serv} idf={"servicos"} TbDestino={"servicos"} />
        <button onClick={() => lerBanco('servicos')}>Ler Serviços</button>
      </Secao>   
    );
};