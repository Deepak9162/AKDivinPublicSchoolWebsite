import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import schoolLogo from '../../assets/AKDivinePublicSchoolLogo.png'
import { siteConfig } from '../../siteConfig'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M13.5 22v-9h3l.5-3h-3.5V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v9h3.5Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M21.4 7.2a3 3 0 0 0-2.1-2.1C17.4 4.6 12 4.6 12 4.6s-5.4 0-7.3.5a3 3 0 0 0-2.1 2.1C2.1 9.1 2.1 12 2.1 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.3.5 7.3.5s5.4 0 7.3-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8ZM10 15.3V8.7l5.7 3.3L10 15.3Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', href: siteConfig.socialLinks.facebook, icon: FacebookIcon },
  { label: 'Instagram', href: siteConfig.socialLinks.instagram, icon: InstagramIcon },
  { label: 'YouTube', href: siteConfig.socialLinks.youtube, icon: YoutubeIcon },
]

const contactItems = [
  { label: 'Address', value: siteConfig.address, icon: MapPin },
  { label: 'Phone', value: siteConfig.phones.join(' | '), icon: Phone },
  { label: 'Email', value: siteConfig.email, icon: Mail },
  { label: 'Working Hours', value: 'Monday - Saturday: 8:00 AM - 4:00 PM', icon: Clock },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_1.2fr] lg:gap-12">
          <div data-reveal>
            <div className="flex items-center gap-3">
              <img
                src={schoolLogo}
                alt={`${siteConfig.name} logo`}
                className="size-16 shrink-0 rounded-full bg-white object-contain p-1 shadow-sm"
              />
              <div>
                <p className="m-0 text-base font-extrabold leading-tight text-white sm:text-lg">{siteConfig.name}</p>
                <p className="m-0 mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">{siteConfig.subtitle}</p>
              </div>
            </div>

            <p className="mt-5 text-[15px] font-semibold text-[var(--color-accent)]">“शिक्षा जो बनाये उज्जवल भविष्य”</p>
            <p className="mt-3 max-w-[470px] text-sm leading-6 text-slate-300">
              An English Medium School committed to providing quality education, moral values and a bright future for every child.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white/10 hover:text-[var(--color-accent)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div data-reveal style={{ '--reveal-delay': '60ms' }}>
            <h2 className="m-0 text-base font-bold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-[var(--color-accent)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ '--reveal-delay': '120ms' }}>
            <h2 className="m-0 text-base font-bold text-white">Contact Info</h2>
            <div className="mt-4 space-y-4">
              {contactItems.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={17} strokeWidth={1.9} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-white/55">{label}</p>
                    <p className="m-0 mt-1 text-sm leading-5 text-slate-300">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p className="m-0">© 2026 {siteConfig.name}. All Rights Reserved.</p>

          <p className="m-0 flex flex-wrap items-center gap-1.5 sm:justify-end">
            <span>Developed by</span>
            <a
              href="https://www.sorabyte.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sorabyte website in a new tab"
              className="font-semibold text-[var(--color-accent)] transition-colors hover:text-white"
            >
              Sorabyte
            </a>
            <span className="text-white/35">•</span>
            <a
              href="https://www.sorabyte.in"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-slate-300 transition-colors hover:text-white"
            >
              www.sorabyte.in
            </a>
          </p>
        </Container>
      </div>
    </footer>
  )
}
