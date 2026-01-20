function Produto({ nome, preco }) {
  return (
    <p>
      Produto: {nome} | Preço: R$ {preco}
      {preco > 100 && <strong> CARO</strong>}
    </p>
  );
}

export default Produto;
