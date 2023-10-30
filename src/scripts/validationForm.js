import { initPhoneMask } from './phoneMask'
import { sendFormData } from './ajax'

export function initFormValidation() {
   const form = document.getElementById('contactForm')
   const nameInput = document.getElementById('name')
   const emailInput = document.getElementById('email')
   const phoneInput = document.getElementById('phone')
   const messageInput = document.getElementById('message')
   const nameError = document.getElementById('nameError')
   const emailError = document.getElementById('emailError')
   const phoneError = document.getElementById('phoneError')
   const messageError = document.getElementById('messageError')

   form.addEventListener('submit', (event) => {
      event.preventDefault()
      clearErrors()

      if (!validateName()) {
         nameError.textContent = 'Введите имя'
      }

      if (!validateEmail()) {
         emailError.textContent = 'Введите корректный email'
      }

      if (!validatePhone()) {
         phoneError.textContent = 'Введите корректный телефон'
      }

      if (!validateMessage()) {
         messageError.textContent = 'Введите сообщение'
      }

      if (validateName() && validateEmail() && validatePhone() && validateMessage()) {
         const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            message: messageInput.value,
         }

         sendFormData(formData)
            .then((data) => {
               form.reset()

               if (data.status === 'success') {
                  alert(data.message)
               } else {
                  alert(data.message)
               }
            })
            .catch((error) => {
               alert(error)
            })
      }
   })

   function validateName() {
      return nameInput.value.trim() !== ''
   }

   function validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(emailInput.value)
   }

   function validatePhone() {
      return phoneInput.value.replace(/\D/g, '').length === 12
   }

   function validateMessage() {
      return messageInput.value.trim() !== ''
   }

   function clearErrors() {
      nameError.textContent = ''
      emailError.textContent = ''
      phoneError.textContent = ''
      messageError.textContent = ''
   }

   initPhoneMask()
}