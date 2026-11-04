const { calculateTotal } = require('./pricingService');

function getShippingFee(cart) {
  const total = calculateTotal(cart);
  if (total >= 50) {
    return 0;
  }
  return 10;
}

module.exports = { getShippingFee };