import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Container from './Container'
import schoolLogo from '../../assets/AKDivinePublicSchoolLogo.png'
import { siteConfig } from '../../siteConfig'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const desktopLinkClass = ({ isActive }) =>
  [
    'relative px-2.5 py-3 text-[13px] font-semibold text-[var(--color-primary)] transition-colors xl:px-3 xl:text-sm',
    'after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-[var(--color-accent)] after:transition-all after:duration-200',
    isActive
      ? 'after:w-7'
      : 'after:w-0 hover:text-[var(--color-primary)] hover:after:w-5',
  ].join(' ')

const mobileLinkClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors',
    isActive
      ? 'bg-[var(--color-bg-soft)] text-[var(--color-primary)]'
      : 'text-slate-700 hover:bg-slate-50 hover:text-[var(--color-primary)]',
  ].join(' ')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  useEffect(() => {
    let frame = null

    const updateScrollState = () => {
      frame = null
      setScrolled(window.scrollY > 50)
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateScrollState)
    }

    updateScrollState()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const scrollY = window.scrollY
    const body = document.body
    const original = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      body.style.overflow = original.overflow
      body.style.position = original.position
      body.style.top = original.top
      body.style.width = original.width
      body.style.paddingRight = original.paddingRight
      window.scrollTo(0, scrollY)
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/96 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-slate-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.06)]'
          : 'border-slate-200/80 shadow-[0_4px_18px_rgba(15,23,42,0.05)]'
      }`}
    >
      <Container className="flex h-[74px] items-center justify-between gap-3 sm:h-[78px] lg:gap-5">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
          aria-label={`${siteConfig.name} home`}
        >
          <img
            src={schoolLogo}
            alt={`${siteConfig.name} logo`}
            className="size-14 shrink-0 object-contain sm:size-16 lg:size-[68px]"
          />

          <div className="min-w-0">
            <p className="m-0 truncate text-[13px] font-extrabold leading-tight tracking-[-0.02em] text-[var(--color-primary)] min-[380px]:text-sm sm:text-base lg:text-[17px]">
              {siteConfig.name}
            </p>
            <p className="m-0 mt-1 hidden truncate text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500 min-[390px]:block sm:text-[11px]">
              {siteConfig.subtitle}
            </p>
          </div>
        </NavLink>

        <div className="hidden min-w-0 items-center gap-2 lg:flex xl:gap-4">
          <nav className="flex items-center" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={desktopLinkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/admissions"
            className="btn-accent inline-flex min-h-10 shrink-0 items-center gap-1.5 px-3.5 text-[13px] xl:px-4"
          >
            Admission Enquiry
            <ArrowRight size={15} strokeWidth={2.25} />
          </NavLink>
        </div>

        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-[var(--color-primary)] shadow-sm transition-colors hover:border-[var(--color-accent)] lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-menu-enter absolute left-0 right-0 top-full max-h-[calc(100dvh-74px)] overflow-x-hidden overflow-y-auto overscroll-contain border-t border-slate-200 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)] sm:max-h-[calc(100dvh-78px)] lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="grid gap-1 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileLinkClass}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/admissions"
              onClick={() => setOpen(false)}
              className="btn-accent mt-2 inline-flex items-center justify-center gap-2 px-4"
            >
              Admission Enquiry
              <ArrowRight size={16} strokeWidth={2.25} />
            </NavLink>
          </Container>
        </nav>
      )}
    </header>
  )
}
