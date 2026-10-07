import { useMemo, useState } from 'react'
import Container from '../layout/Container'
import campusImage from '../../assets/campus.png'
import classroomImage from '../../assets/OurAcademicPrograms.png'
import computerLabImage from '../../assets/compuetLab.png'
import libraryImage from '../../assets/Library.png'
import playgroundImage from '../../assets/playground.png'
import admissionImage from '../../assets/SchoolAdmissionPage.png'
import schoolImage from '../../assets/School_Image.png'
import studentImage from '../../assets/Student_Image.png'

const filters = ['All', 'Campus', 'Classrooms', 'Events', 'Students', 'Activities']

const galleryItems = [
  {
    title: 'School Campus',
    category: 'Campus',
    image: campusImage,
    position: 'object-center',
  },
  {
    title: 'Classroom Learning',
    category: 'Classrooms',
    image: classroomImage,
    position: 'object-[68%_50%]',
  },
  {
    title: 'Computer Lab',
    category: 'Classrooms',
    image: computerLabImage,
    position: 'object-center',
  },
  {
    title: 'School Library',
    category: 'Classrooms',
    image: libraryImage,
    position: 'object-center',
  },
  {
    title: 'Play Ground',
    category: 'Activities',
    image: playgroundImage,
    position: 'object-center',
  },
  {
    title: 'Admission Day',
    category: 'Events',
    image: admissionImage,
    position: 'object-center',
  },
  {
    title: 'Student Moments',
    category: 'Students',
    image: studentImage,
    position: 'object-[50%_28%]',
  },
  {
    title: 'School Entrance',
    category: 'Campus',
    image: schoolImage,
    position: 'object-center',
  },
]

export default function SchoolGallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="premium-section bg-white" aria-labelledby="school-gallery-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">School Moments</p>
          <h2
            id="school-gallery-title"
            className="section-title"
            data-reveal="heading"
          >
            <span className="heading-reveal__inner">School Gallery</span>
          </h2>
          <p className="section-copy mx-auto mt-3 max-w-[620px]">
            Some joyful moments and facilities from our school.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2" aria-label="Gallery filters">
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-9 rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-all duration-200 sm:text-[13px] ${
                  isActive
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-[var(--color-primary)]/25 hover:text-[var(--color-primary)]'
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {visibleItems.map((item, index) => (
            <figure
              key={`${item.category}-${item.title}`}
              data-reveal="card"
              style={{ '--reveal-delay': `${Math.min(index % 4, 3) * 60}ms` }}
              className="premium-card group relative m-0 overflow-hidden bg-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.035] ${item.position}`}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.08]" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
