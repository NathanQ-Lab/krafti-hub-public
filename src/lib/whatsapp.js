export function createWhatsAppLink(productName) {
  const phoneNumber = "27723386136"; // remove the 0, use country code
  const message = `Hi, I would like to order the ${productName}`;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}