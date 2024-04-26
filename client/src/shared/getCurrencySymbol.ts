export const getCurrencySymbol = (currency: string) => {
  const simbolos: Record<string, string> = {
    ARS: "$",
    USD: "US$",
  };
  return simbolos[currency] || currency;
};
