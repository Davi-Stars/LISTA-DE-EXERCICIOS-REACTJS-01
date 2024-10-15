function Autenticacao({ autenticado }) {
  if (autenticado) {
    return <h1>Bem-vindo, usuário!</h1>;
  }
  return null;  // Retorna pra nada se não for autenticado
}

export default Autenticacao;