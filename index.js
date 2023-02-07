const videos = document.querySelectorAll('video')
for (let i = 0; i < videos.length; i++) {
  videos[i].playbackRate = 2.0
}

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
})

// import { menuFade } from './menuFade.js'
// import { scroll } from './smoothScrolling.js'
// import { revealSections } from './revealSections.js'
// import { slider } from './slider.js'
// import { hamburgerMenu } from './hamburger.js'

// // Smooth scrolling
// scroll()

// // Menu fade animation
// menuFade()

// // Reveal sections
// revealSections()

// // slider
// slider()

// // Hamburger
// hamburgerMenu()
