export const priceFormatter = (price) => {
  if (!price) return;
  return parseFloat(price)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
