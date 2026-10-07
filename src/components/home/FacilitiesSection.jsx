import Container from '../layout/Container'
import smartClassroomImage from '../../assets/smartcalssroom.png'
import computerLabImage from '../../assets/compuetLab.png'
import libraryImage from '../../assets/Library.png'
import cctvImage from '../../assets/cctv.png'
import playgroundImage from '../../assets/playground.png'
import campusImage from '../../assets/campus.png'
import transportImage from '../../assets/transports.png'
import drinkingWaterImage from '../../assets/drinkingWater.png'

const facilities = [
  {
    title: 'Smart Classrooms',
    image: smartClassroomImage,
    position: 'object-center',
  },
  {
    title: 'Computer Lab',
    image: computerLabImage,
    position: 'object-center',
  },
  {
    title: 'Library',
    image: libraryImage,
    position: 'object-center',
  },
  {
    title: 'CCTV Surveillance',
    image: cctvImage,
    position: 'object-center',
  },
  {
    title: 'Play Ground',
    image: playgroundImage,
    position: 'object-center',
  },
  {
    title: 'Safe & Clean Campus',
    image: campusImage,
    position: 'object-[50%_55%]',
  },
  {
    title: 'Transport Facility',
    image: transportImage,
    position: 'object-center',
  },
  {
    title: 'Clean Drinking Water',
    image: drinkingWaterImage,
    position: 'object-center',
  },
]

export default function FacilitiesSection() {
  return (
    <section className="premium-section bg-white" aria-labelledby="facilities-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Facilities</p>
          <h2
            id="facilities-title"
            className="section-title"
            data-reveal="heading"
          >
            <span className="heading-reveal__inner">Our Facilities</span>
          </h2>
          <p className="section-copy mx-auto mt-3 max-w-[650px]">
            We provide modern facilities to ensure a safe, comfortable and holistic learning environment for every student.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {facilities.map(({ title, image, position }, index) => (
            <article
              key={title}
              data-reveal="card"
              style={{ '--reveal-delay': `${Math.min(index % 4, 3) * 60}ms` }}
              className="premium-card group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={`${title} at A.K. Divine Public School`}
                  className={`h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.035] ${position}`}
                />

                <div className="absolute inset-x-0 bottom-0 bg-[var(--color-primary)] px-3 py-3 text-center">
                  <h3 className="m-0 text-[13px] font-bold leading-5 text-white sm:text-sm">{title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
