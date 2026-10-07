import { ArrowRight, Binoculars, Gem, Target, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../layout/Container'
import schoolImage from '../../assets/School_Image.png'
import { siteConfig } from '../../siteConfig'

const valueItems = [
  {
    title: 'Our Vision',
    description: 'To create responsible, confident and successful citizens.',
    icon: Binoculars,
  },
  {
    title: 'Our Mission',
    description: 'To provide quality education with values and modern learning facilities.',
    icon: Target,
  },
  {
    title: 'Our Values',
    description: 'Discipline, Respect, Honesty and Excellence.',
    icon: Gem,
  },
  {
    title: 'Our Founder',
    description: (
      <>
        Run by
        <span className="mt-1 block font-bold text-[var(--color-primary)]">{siteConfig.foundationName}</span>
      </>
    ),
    icon: Users,
  },
]

export default function AboutSchool() {
  return (
    <section className="premium-section bg-white" aria-labelledby="home-about-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
          <div className="max-w-[690px]">
            <p className="section-eyebrow">About Our School</p>
            <h2
              id="home-about-title"
              className="section-title"
              data-reveal="heading"
            >
              <span className="heading-reveal__inner">About {siteConfig.name}</span>
            </h2>

            <p className="mt-3 font-['Noto_Serif_Devanagari'] text-[clamp(1.15rem,1.8vw,1.55rem)] font-extrabold italic leading-snug text-[var(--color-accent)]">
              “शिक्षा जो बनाये उज्जवल भविष्य”
            </p>

            <div className="section-copy mt-5 max-w-[640px] space-y-3">
              <p>
                {siteConfig.name}, Jagarnathpur is an English Medium school dedicated to nurturing young minds through
                strong academics, good values and a caring learning environment.
              </p>
              <p>
                Our aim is to provide quality education with modern teaching methods, character building and meaningful
                opportunities so every child can learn with confidence and grow into a responsible citizen.
              </p>
            </div>

            <Link
              to="/about"
              className="btn-primary mt-6 inline-flex items-center justify-center gap-2 !text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
              Read More
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[530px] lg:justify-self-end">
            <div className="absolute -bottom-3 -right-3 h-[38%] w-[42%] rounded-br-[34px] rounded-tl-[56px] bg-[var(--color-accent)]/90 sm:-bottom-4 sm:-right-4" />
            <div className="relative overflow-hidden rounded-[30px] rounded-bl-[56px] bg-slate-100">
              <img
                src={schoolImage}
                alt={`${siteConfig.name} campus entrance`}
                className="aspect-[1.32/1] w-full object-cover object-[56%_53%] transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {valueItems.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              data-reveal="card"
              style={{ '--reveal-delay': `${Math.min(index, 3) * 60}ms` }}
              className="premium-card flex min-h-[178px] flex-col items-center justify-center px-5 py-6 text-center"
            >
              <Icon size={34} strokeWidth={1.9} className="mb-3 text-[var(--color-primary)]" aria-hidden="true" />
              <h3 className="m-0 text-[15px] font-extrabold text-[var(--color-primary)] sm:text-base">{title}</h3>
              <div className="mt-2 max-w-[220px] text-[12px] leading-[1.55] text-slate-600 sm:text-[13px]">
                {description}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
