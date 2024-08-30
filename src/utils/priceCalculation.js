export default function priceCalculation(totalAmount, fee, remaining, fees) {
  if (remaining && fees) {
    let total = 0;
    Object.keys(fees).forEach((key) => {
      total += (totalAmount / 100) * fees[key];
    });
    return totalAmount - total;
  }
  return (totalAmount / 100) * fee;
}
