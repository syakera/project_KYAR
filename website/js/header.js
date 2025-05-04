document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.hamburger')
	const nav = document.querySelector('.nav-links')
	const body = document.body
	const navLinks = document.querySelectorAll('.nav-links a')

	hamburger.addEventListener('click', () => {
		nav.classList.toggle('active')
		body.classList.toggle('no-scroll')
	})

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('active')
			body.classList.remove('no-scroll')
		})
	})
})
