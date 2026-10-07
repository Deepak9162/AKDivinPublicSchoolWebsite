import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = null

    const update = () => {
      frame = null
      setVisible(window.scrollY > 600)
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
      }}
      aria-label="Back to top"
      className="fixed bottom-5 right-4 z-40 grid size-11 place-items-center rounded-full bg-[var(--color-primary)] text-white shadow-[0_10px_28px_rgba(6,46,84,0.22)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] sm:bottom-6 sm:right-6 sm:size-12"
    >
      <ArrowUp size={20} strokeWidth={2.2} />
    </button>
  )
}
