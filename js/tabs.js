document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-work__btn').forEach(function(tabsContent) {
    tabsContent.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.how-we-work__content').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__content-active')
      })
      document.querySelector(`[data-target = "${path}"]`).classList.add('how-we-work__content-active')
    })
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#menu').classList.remove('is-closed')
  })

  document.querySelector('#menu-closed').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-closed')
    document.querySelector('#menu').classList.add('is-acrive')
  })
})
