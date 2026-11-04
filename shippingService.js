const { calculateTotal } = require('./pricingService');

// Note: calculateTotal returns the total after a 10% discount
function getShippingFee(cart) {
  const total = calculateTotal(cart);
  if (total >= 100) return 0;
  if (total >= 50) return 5;
  return 15;
}

module.exports = { getShippingFee };