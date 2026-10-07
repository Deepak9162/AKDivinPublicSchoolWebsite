import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollRevealManager() {
  const { pathname } = useLocation()
  const progressRef = useRef(null)

  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add('reveal', 'reveal-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        root: null,
        threshold: 0.22,
        rootMargin: '0px 0px -4% 0px',
      },
    )

    elements.forEach((element) => {
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const line = progressRef.current
    if (!line) return undefined

    let frame = null

    const update = () => {
      frame = null
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0
      line.style.transform = `scaleX(${progress})`
    }

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
}
