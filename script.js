const cardElement = document.getElementById("card");
const drawButton = document.getElementById("drawButton");

const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["8", "9", "10", "J", "Q", "K", "JOKER"];

drawButton.addEventListener("click", drawCard);

function drawCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const cardImage = `cards/${randomValue}_of_${randomSuit}.png`;

  cardElement.innerHTML = `<img src="${cardImage}" alt="Çekilen Kart">`;
}
