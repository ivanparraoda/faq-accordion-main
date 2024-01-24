const elements = document.getElementsByClassName('accordion')

Array.from(elements).forEach((element) => {
  element.addEventListener('click', function () {
    element.classList.toggle('active')

    let panel = element.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
})
