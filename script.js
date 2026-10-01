const prices = { 1: 299, 2: 499, 3: 749, 4: 899 };
let guests = 1;
const count = document.querySelector('#count');
const price = document.querySelector('#price');
const guestInput = document.querySelector('#guest-input');
const priceInput = document.querySelector('#price-input');
function updateGuests() {
  count.value = guests;
  const formatted = `₹${prices[guests]}`;
  price.textContent = formatted;
  guestInput.value = guests;
  priceInput.value = formatted;
  document.querySelector('#minus').disabled = guests === 1;
  document.querySelector('#plus').disabled = guests === 4;
}
document.querySelector('#minus').addEventListener('click', () => { if (guests > 1) { guests--; updateGuests(); } });
document.querySelector('#plus').addEventListener('click', () => { if (guests < 4) { guests++; updateGuests(); } });
updateGuests();
