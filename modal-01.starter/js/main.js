// Start writing JavaScript here!
const modalOpen = document.querySelector('.jsModalButton')
const modalClose = document.querySelector('.jsModalClose')

modalOpen.addEventListener('click', () => {
  document.body.classList.add('modal-is-open')
})

modalClose.addEventListener('click', () => {
  document.body.classList.remove('modal-is-open')
})
