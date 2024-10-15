function BotaoAutenticacao({ logado }) {
  return <button>{logado ? "Sair" : "Entrar"}</button>;
}

export default BotaoAutenticacao;