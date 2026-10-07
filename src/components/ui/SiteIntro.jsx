import { useEffect, useMemo, useState } from 'react'
import '@fontsource/noto-serif-devanagari/800.css'
import schoolLogo from '../../assets/AKDivinePublicSchoolLogo.png'
import { siteConfig } from '../../siteConfig'

const SESSION_KEY = 'siteIntroShown'
const FULL_DURATION = 2600
const EXIT_START = 1880
const REDUCED_DURATION = 650

export default function SiteIntro() {
  const shouldShow = useMemo(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) !== 'true'
    } catch {
      return true
    }
  }, [])

  const [visible, setVisible] = useState(shouldShow)
  const [exiting, setExiting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (!visible) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotionPreference = () => setReducedMotion(media.matches)
    syncMotionPreference()
    media.addEventListener?.('change', syncMotionPreference)

    const body = document.body
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'

    const duration = media.matches ? REDUCED_DURATION : FULL_DURATION
    const exitDelay = media.matches ? 360 : EXIT_START

    const exitTimer = window.setTimeout(() => setExiting(true), exitDelay)
    const finishTimer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, 'true')
      } catch {
        // Session storage may be unavailable in privacy-restricted contexts.
      }
      body.style.overflow = previousOverflow
      setVisible(false)
    }, duration)

    const safetyTimer = window.setTimeout(() => {
      body.style.overflow = previousOverflow
      setVisible(false)
    }, 3600)

    return () => {
      media.removeEventListener?.('change', syncMotionPreference)
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
      window.clearTimeout(safetyTimer)
      body.style.overflow = previousOverflow
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`site-intro ${exiting ? 'site-intro--exit' : ''} ${reducedMotion ? 'site-intro--reduced' : ''}`}
      role="status"
      aria-label={`${siteConfig.name} website introduction`}
    >
      <div className="site-intro__ambient" aria-hidden="true">
        <span className="site-intro__orb site-intro__orb--one" />
        <span className="site-intro__orb site-intro__orb--two" />
        <span className="site-intro__ring site-intro__ring--one" />
        <span className="site-intro__ring site-intro__ring--two" />
      </div>

      <div className="site-intro__content">
        <div className="site-intro__logo-wrap">
          <span className="site-intro__logo-ring" aria-hidden="true" />
          <img src={schoolLogo} alt={`${siteConfig.name} logo`} className="site-intro__logo" />
        </div>

        <div className="site-intro__school-copy">
          <h1>{siteConfig.name}</h1>
          <p>{siteConfig.subtitle}</p>
        </div>

        <p className="site-intro__tagline">“शिक्षा जो बनाये उज्जवल भविष्य”</p>

        <span className="site-intro__gold-line" aria-hidden="true" />
      </div>

      <p className="site-intro__signature">
        Experience crafted by{' '}
        <a href="https://www.sorabyte.in" target="_blank" rel="noopener noreferrer">
          Sorabyte
        </a>
      </p>
    </div>
  )
}
