export function setBodyOverflow () {
  document.querySelector('body').classList.add('no-scroll')
  console.log('1')
}

export function deleteBodyOverflow () {
  document.querySelector('body').classList.remove('no-scroll')
  console.log('2')
}
