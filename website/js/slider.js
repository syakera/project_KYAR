document.addEventListener('DOMContentLoaded', function () {
	const sliders = document.querySelectorAll('.slider')

	sliders.forEach(slider => {
		const slides = slider.querySelectorAll('.slide')
		const dots = slider.querySelectorAll('.slider-dot')
		const prevBtn = slider.querySelector('.prev')
		const nextBtn = slider.querySelector('.next')

		let currentSlide = 0

		slides[currentSlide].classList.add('active')
		dots[currentSlide].classList.add('active')

		function goToSlide(n) {
			slides[currentSlide].classList.remove('active')
			dots[currentSlide].classList.remove('active')

			currentSlide = (n + slides.length) % slides.length

			slides[currentSlide].classList.add('active')
			dots[currentSlide].classList.add('active')
		}

		nextBtn.addEventListener('click', () => {
			goToSlide(currentSlide + 1)
		})

		prevBtn.addEventListener('click', () => {
			goToSlide(currentSlide - 1)
		})

		dots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				goToSlide(index)
			})
		})

		setInterval(() => {
			goToSlide(currentSlide + 1)
		}, 5000)
	})
})
