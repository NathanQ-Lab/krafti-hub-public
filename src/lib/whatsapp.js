export function createWhatsAppLink(product) {
  const phoneNumber = "27818555053";

  const message = `Hi, I would like to place an order:

🛍️ Product: ${product.name}
💰 Price: R${product.price}

✏️ Custom Details:
(Please enter your name/design here)

Thank you 😊`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}