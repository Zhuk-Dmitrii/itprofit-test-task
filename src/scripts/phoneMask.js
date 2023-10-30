import inputmask from 'inputmask'

export function initPhoneMask() {
  const phoneInput = document.getElementById('phone')
  inputmask({ mask: '+375 (99) 999-99-99' }).mask(phoneInput)
}