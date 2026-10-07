import { MapPin, Phone } from 'lucide-react'
import Container from './Container'
import { siteConfig } from '../../siteConfig'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[13px] fill-current">
      <path d="M13.5 22v-9h3l.5-3h-3.5V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v9h3.5Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[13px] fill-none stroke-current" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[14px] fill-current">
      <path d="M21.4 7.2a3 3 0 0 0-2.1-2.1C17.4 4.6 12 4.6 12 4.6s-5.4 0-7.3.5a3 3 0 0 0-2.1 2.1C2.1 9.1 2.1 12 2.1 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.3.5 7.3.5s5.4 0 7.3-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8ZM10 15.3V8.7l5.7 3.3L10 15.3Z" />
    </svg>
  )
}

const socialItems = [
  { label: 'Facebook', href: siteConfig.socialLinks.facebook, icon: FacebookIcon },
  { label: 'Instagram', href: siteConfig.socialLinks.instagram, icon: InstagramIcon },
  { label: 'YouTube', href: siteConfig.socialLinks.youtube, icon: YoutubeIcon },
]

export default function TopBar() {
  return (
    <div className="bg-[var(--color-primary)] text-white">
      <Container className="flex min-h-8 items-center justify-between gap-3 py-1 text-[11px] sm:text-xs">
        <div className="flex min-w-0 items-center gap-4 lg:gap-6">
          <div className="flex min-w-0 items-center gap-1.5 text-white/90">
            <MapPin size={13} strokeWidth={2} className="shrink-0 text-[var(--color-accent)]" />
            <span className="truncate sm:max-w-[360px] lg:max-w-none">{siteConfig.address}</span>
          </div>

          <div className="hidden items-center gap-1.5 whitespace-nowrap text-white/90 md:flex">
            <Phone size={13} strokeWidth={2} className="text-[var(--color-accent)]" />
            <span>{siteConfig.phones.join(' | ')}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid size-6 place-items-center rounded-full text-white/90 transition-all duration-200 hover:-translate-y-px hover:bg-white/10 hover:text-[var(--color-accent)]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}
