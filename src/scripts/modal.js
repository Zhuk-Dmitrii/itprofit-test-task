export function toggleModal() {
   const buttonOpenModal = document.querySelector('.open-modal');
   const modalOverlay = document.querySelector('.modal-overlay');
   const modal = document.querySelector('.modal');
   const buttonCloseModal = document.querySelector('.close-modal');

   buttonOpenModal.addEventListener('click', function () {
      openModal();
   });

   buttonCloseModal.addEventListener('click', function () {
      closeModal();
   });

   modalOverlay.addEventListener('click', function (event) {
      if (event.target === modalOverlay) {
         closeModal();
      }
   });

   function openModal() {
      modalOverlay.classList.add('open');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
   }

   function closeModal() {
      modalOverlay.classList.remove('open');
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
   }
}