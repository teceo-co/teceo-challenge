const useMoney = () => {
  const format = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return {
    format,
  };
};

export default useMoney;
