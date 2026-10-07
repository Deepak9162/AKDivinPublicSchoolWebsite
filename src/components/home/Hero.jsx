import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import schoolImage from '../../assets/School_Image.png'
import studentImage from '../../assets/Student_Image.png'

const features = [
  { label: 'Quality Education', icon: GraduationCap },
  { label: 'Experienced Teachers', icon: Users },
  { label: 'Safe & Secure Environment', icon: ShieldCheck },
  { label: 'Personality Development', icon: ChartNoAxesColumnIncreasing },
]

export default function Hero() {
  const backgroundRef = useRef(null)
  const studentsRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = null

    const applyParallax = () => {
      frame = null

      if (!desktop.matches || reduceMotion.matches) {
        if (backgroundRef.current) backgroundRef.current.style.transform = ''
        if (studentsRef.current) studentsRef.current.style.transform = ''
        if (textRef.current) textRef.current.style.transform = ''
        return
      }

      const progress = Math.min(Math.max(window.scrollY, 0), 320) / 320

      if (backgroundRef.current) backgroundRef.current.style.transform = `translateY(${progress * 18}px) scale(1.04)`
      if (studentsRef.current) studentsRef.current.style.transform = `translateY(${progress * 10}px)`
      if (textRef.current) textRef.current.style.transform = `translateY(${-progress * 16}px)`
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(applyParallax)
    }

    applyParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    desktop.addEventListener('change', applyParallax)
    reduceMotion.addEventListener('change', applyParallax)

    return () => {
      window.removeEventListener('scroll', onScroll)
      desktop.removeEventListener('change', applyParallax)
      reduceMotion.removeEventListener('change', applyParallax)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="relative overflow-x-clip overflow-y-visible bg-white" aria-labelledby="home-hero-title">
      {/* DESKTOP / TABLET HERO */}
      <div className="relative hidden min-h-[570px] md:block lg:min-h-[590px] xl:min-h-[600px]">
        {/* Campus image layer */}
        <div className="absolute inset-y-0 right-0 w-[64%] overflow-hidden">
          <img
            ref={backgroundRef}
            src={schoolImage}
            alt="A.K. Divine Public School campus"
            className="h-full w-full scale-[1.04] object-cover object-[58%_52%] will-change-transform"
          />

          {/* Soft white blend exactly like the reference — no hard split */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.98)_12%,rgba(255,255,255,0.88)_24%,rgba(255,255,255,0.58)_38%,rgba(255,255,255,0.18)_53%,rgba(255,255,255,0)_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/20 to-transparent" />
        </div>

        {/* Students cutout */}
        <img
          ref={studentsRef}
          src={studentImage}
          alt="Students of A.K. Divine Public School"
          className="pointer-events-none absolute bottom-0 left-[41.5%] z-10 h-[90%] w-auto object-contain object-bottom drop-shadow-[0_12px_20px_rgba(7,31,53,0.12)] will-change-transform lg:left-[42%] lg:h-[91%] xl:left-[42.5%]"
        />

        <Container className="relative z-20 h-[570px] lg:h-[590px] xl:h-[600px]">
          {/* Left content */}
          <div ref={textRef} className="max-w-[530px] pt-[68px] will-change-transform lg:pt-[72px] xl:pt-[76px]">
            <h1
              id="home-hero-title"
              data-reveal
              className="-my-[0.12em] m-0 max-w-[530px] overflow-visible py-[0.12em] font-['Noto_Serif_Devanagari'] text-[clamp(3rem,4.55vw,4.25rem)] font-extrabold not-italic leading-[1.12] tracking-normal text-[var(--color-primary)]"
            >
              <span className="block">शिक्षा जो बनाये</span>
              <span className="mt-1 block text-[var(--color-accent)]">उज्जवल भविष्य</span>
            </h1>

            <p data-reveal style={{ '--reveal-delay': '60ms' }} className="mt-5 max-w-[500px] text-[15px] leading-[1.68] text-slate-600 lg:text-[16px]">
              An English Medium School committed to the overall development of every child with values, knowledge and
              modern education.
            </p>

            <div data-reveal style={{ '--reveal-delay': '120ms' }} className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link
                to="/admissions"
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 !text-white"
              >
                Admission Open
                <ArrowRight size={17} strokeWidth={2.1} />
              </Link>

              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center px-8"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Feature card */}
          <div className="absolute bottom-6 left-0 z-30 w-[530px] lg:w-[550px]">
            <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(15,39,64,0.08)]">
              {features.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  data-reveal
                  style={{ '--reveal-delay': `${Math.min(index, 3) * 60}ms` }}
                  className={`flex min-h-[100px] flex-col items-center justify-center px-3 py-3.5 text-center transition-colors duration-300 hover:bg-slate-50/70 ${
                    index !== features.length - 1 ? 'border-r border-slate-200' : ''
                  }`}
                >
                  <Icon size={28} strokeWidth={1.9} className="mb-2 text-[var(--color-primary)]" />
                  <span className="max-w-[110px] text-[12px] font-semibold leading-[1.35] text-slate-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Static slider indicators */}
        <div
          className="absolute bottom-6 right-[17%] z-30 flex items-center gap-2"
          aria-label="Hero slide indicators"
        >
          <span className="size-2.5 rounded-full bg-white shadow-sm ring-1 ring-white/70" />
          <span className="size-2.5 rounded-full bg-white/90 shadow-sm ring-1 ring-white/70" />
          <span className="size-2.5 rounded-full bg-[var(--color-accent)] shadow-sm" />
        </div>
      </div>

      {/* MOBILE HERO */}
      <div className="md:hidden">
        <div className="relative h-[320px] overflow-hidden min-[360px]:h-[335px] min-[390px]:h-[350px] sm:h-[380px]">
          <img
            src={schoolImage}
            alt="A.K. Divine Public School campus"
            className="absolute inset-0 h-full w-full object-cover object-[62%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
          <img
            src={studentImage}
            alt="Students of A.K. Divine Public School"
            className="pointer-events-none absolute -left-1 bottom-0 z-10 h-[94%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_10px_18px_rgba(7,31,53,0.15)] min-[390px]:left-0 min-[430px]:left-1"
          />
          <div className="absolute bottom-4 right-5 z-20 flex items-center gap-2" aria-label="Hero slide indicators">
            <span className="size-2.5 rounded-full bg-white" />
            <span className="size-2.5 rounded-full bg-white" />
            <span className="size-2.5 rounded-full bg-[var(--color-accent)]" />
          </div>
        </div>

        <Container className="pb-5 pt-8 sm:pt-9" data-reveal>
          <h1
            id="home-hero-title-mobile"
            className="-my-[0.1em] m-0 w-full max-w-none overflow-visible py-[0.1em] font-['Noto_Serif_Devanagari'] text-[clamp(2.35rem,10.5vw,2.95rem)] font-extrabold not-italic leading-[1.1] tracking-normal text-[var(--color-primary)]"
          >
            <span className="block">शिक्षा जो बनाये</span>
            <span className="mt-1 block text-[var(--color-accent)]">उज्जवल भविष्य</span>
          </h1>

          <p className="mt-4 max-w-[34rem] text-[14px] leading-[1.65] text-slate-600 sm:text-[15px]">
            An English Medium School committed to the overall development of every child with values, knowledge and
            modern education.
          </p>

          <div className="mt-5 flex flex-nowrap items-center gap-2.5 min-[360px]:gap-3">
            <Link
              to="/admissions"
              className="btn-primary inline-flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap px-4 !text-white min-[360px]:gap-2 min-[360px]:px-5 min-[390px]:px-6 min-[390px]:text-[14px]"
            >
              Admission Open <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="btn-secondary inline-flex min-w-0 items-center justify-center whitespace-nowrap px-4 min-[360px]:px-5 min-[390px]:px-6 min-[390px]:text-[14px]"
            >
              Know More
            </Link>
          </div>
        </Container>

        <Container className="pb-5 pt-1">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_12px_28px_rgba(15,39,64,0.08)]">
            {features.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                data-reveal
                style={{ '--reveal-delay': `${Math.min(index, 3) * 60}ms` }}
                className={`flex min-h-[102px] flex-col items-center justify-center px-3 py-4 text-center transition-colors duration-300 active:bg-slate-50/70 ${
                  index % 2 === 0 ? 'border-r border-slate-200' : ''
                } ${index < 2 ? 'border-b border-slate-200' : ''}`}
              >
                <Icon size={25} strokeWidth={1.9} className="mb-2 text-[var(--color-primary)]" />
                <span className="max-w-[120px] text-[11px] font-semibold leading-[1.35] text-slate-700 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
