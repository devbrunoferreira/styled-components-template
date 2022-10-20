import { Carro } from "../Carro/Carro";
import { BotaoGaragem, GaragemContainer, EstacionamentoGrid, EstacionamentoFlex, TituloGaragem} from "./style";

export function Garagem(props) {
  return (
    <GaragemContainer>
      <TituloGaragem>Garagem da {props.nome}</TituloGaragem>
      <BotaoGaragem onClick={props.mensagemAprentacao}>Mensagem</BotaoGaragem>
    <EstacionamentoGrid>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} />
    </EstacionamentoGrid>
    {/* <EstacionamentoFlex>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
    </EstacionamentoFlex>
    <EstacionamentoFlex>
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} />
    </EstacionamentoFlex> */}
    </GaragemContainer>
  );
}
