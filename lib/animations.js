import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/SplitText'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { distributeByPosition } from './utilities'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const hoverEffectIn = (target) => {
  if (window.innerWidth >= 1200) {
    gsap.to(target, {
      duration: 0.5,
      opacity: 1,
      height: '6.5rem',
      ease: 'power1.in'
    })
  }
}

export const hoverEffectOut = (target) => {
  if (window.innerWidth >= 1200) {
    gsap.to(target, {
      duration: 1,
      opacity: 0,
      height: '0',
      ease: 'power1.in'
    })
  }
}

export const distributeCards = (cardClass) => {
  gsap.from(cardClass, {
    scale: 0.75,
    opacity: 0,
    stagger: distributeByPosition({
      amount: 0.75
    }),
    ease: 'power1.in'
  })
}

export const distributeCardsOnScroll = (cardClass, scrollTarget) => {
  gsap.from(cardClass, {
    scrollTrigger: {
      trigger: scrollTarget,
      start: 'center center',
      end: 'top bottom',
      id: 'scrollCards'
    },
    scale: 0.75,
    opacity: 0,
    stagger: distributeByPosition({
      amount: 0.75
    }),
    ease: 'power1.out'
  })
}

export const titleAnimateIn = (target) => {
  const splitText = new SplitText(target, { type: 'chars' })
  const headingTimeline = gsap.timeline()
  gsap.set(target, { perspective: 400 })

  headingTimeline.from(splitText.chars, {
    duration: 1,
    x: '-400px',
    autoAlpha: 0,
    transformOrigin: '100% 50%',
    ease: 'back.out',
    stagger: 0.1
  })
}

export const animateBackground = () => {
  gsap.to('#backgroundLogo', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      id: 'background',
      scrub: true
    },
    opacity: 0.5,
    ease: 'power1.out'
  })

  gsap.to('body', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      id: 'background',
      scrub: true
    },
    backgroundColor: '#819f99',
    ease: 'power1.out'
  })
}
