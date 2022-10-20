import React from "react";
import { MeuCarro, Lista, TituloCarro } from "./style";

export function Carro(props) {
    return (
      <MeuCarro>
        <TituloCarro>Meu carro</TituloCarro>
        <Lista>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex ? "true" : "false"}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </Lista>
      </MeuCarro>
    );
  }
  