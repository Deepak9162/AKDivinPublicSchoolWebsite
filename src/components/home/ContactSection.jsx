import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Container from '../layout/Container'
import { siteConfig } from '../../siteConfig'

const contactItems = [
  {
    label: 'Address',
    value: siteConfig.address,
    icon: MapPin,
  },
  {
    label: 'Phone',
    value: siteConfig.phones.join(' | '),
    icon: Phone,
  },
  {
    label: 'Email',
    value: siteConfig.email,
    icon: Mail,
  },
  {
    label: 'Working Hours',
    value: 'Monday - Saturday: 8:00 AM - 4:00 PM',
    icon: Clock,
  },
]

export default function ContactSection() {
  return (
    <section className="premium-section bg-white" aria-labelledby="contact-section-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Get In Touch</p>
          <h2
            id="contact-section-title"
            className="section-title"
            data-reveal="heading"
          >
            <span className="heading-reveal__inner">Get In Touch</span>
          </h2>
          <p className="section-copy mx-auto mt-3 max-w-2xl">
            We are always here to help. Contact us for any query related to admission, academics or other information.
          </p>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch xl:gap-10">
          <div className="premium-card p-5 sm:p-6 lg:p-7">
            <div className="grid gap-1">
              {contactItems.map(({ label, value, icon: Icon }, index) => (
                <div
                  key={label}
                  className={`-mx-2 flex gap-4 rounded-xl px-2 py-4 transition-colors duration-200 hover:bg-slate-50/70 ${index !== contactItems.length - 1 ? 'border-b border-slate-200' : ''}`}
                >
                  <div className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</p>
                    <p className="m-0 mt-1 text-sm font-semibold leading-6 text-[var(--color-primary)] sm:text-[15px]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card min-h-[320px] overflow-hidden bg-slate-50 sm:min-h-[360px] lg:min-h-full" data-reveal="clip-right">
            {siteConfig.mapEmbedUrl ? (
              <iframe
                title="A.K. Divine Public School location map"
                src={siteConfig.mapEmbedUrl}
                className="h-full min-h-[320px] w-full border-0 sm:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="grid h-full min-h-[320px] place-items-center px-6 text-center sm:min-h-[360px]">
                <div className="max-w-sm">
                  <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-[var(--color-accent)] shadow-sm ring-1 ring-slate-200">
                    <MapPin size={26} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-primary)]">School Location</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{siteConfig.address}</p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Add a Google Maps embed URL in <code className="font-semibold text-slate-600">siteConfig.mapEmbedUrl</code> to display the live map here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
