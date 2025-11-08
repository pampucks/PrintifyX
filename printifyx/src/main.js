const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');
const userInput = document.getElementById('userInput');

// Open modal and show input
openModal.addEventListener('click', () => {
  const inputText = userInput.value.trim();
  if (inputText === '') {
    modalContent.textContent = "You didn't type anything!";
  } else {
    modalContent.textContent = inputText;
  }
  modal.classList.remove('hidden');
});
closeModal.addEventListener('click', () => modal.classList.add('hidden')); // hide modal

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
btn.addEventListener('click', () => {
  alert('PrintifyX Super Starter is ready!');
});
