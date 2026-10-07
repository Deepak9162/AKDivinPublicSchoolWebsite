import {
  Baby,
  BookOpen,
  GraduationCap,
  School,
  Shapes,
  UserRound,
} from 'lucide-react'
import Container from '../layout/Container'
import classroomImage from '../../assets/OurAcademicPrograms.png'

const programs = [
  { name: 'Nursery', detail: 'Age 3–4 Years', icon: Baby },
  { name: 'LKG', detail: 'Age 4–5 Years', icon: Shapes },
  { name: 'UKG', detail: 'Age 5–6 Years', icon: UserRound },
  { name: 'Primary', detail: 'Class 1 to 5', icon: BookOpen },
  { name: 'Middle', detail: 'Class 6 to 8', icon: School },
  { name: 'Secondary', detail: 'Class 9 to 10', icon: GraduationCap },
]

export default function AcademicPrograms() {
  return (
    <section className="premium-section relative overflow-hidden bg-white" aria-labelledby="academic-programs-title">
      <div className="pointer-events-none absolute left-0 top-[74px] hidden h-16 w-8 rounded-r-full bg-[var(--color-accent)] lg:block" />

      <Container>
        <div className="premium-card overflow-hidden">
          <div className="grid min-h-[260px] lg:grid-cols-[38%_62%]">
            <div className="flex items-center px-6 py-9 sm:px-8 lg:px-10 lg:py-8">
              <div className="max-w-[390px]">
                <p className="section-eyebrow">Academic Excellence</p>
                <h2
                  id="academic-programs-title"
                  className="section-title"
                  data-reveal="heading"
                >
                  <span className="heading-reveal__inner">
                    Our Academic
                    <span className="block">Programs</span>
                  </span>
                </h2>

                <p className="section-copy mt-4 max-w-[360px]">
                  We provide a strong academic foundation with modern teaching methods and a child-centric approach.
                </p>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden lg:min-h-[260px]">
              <img
                src={classroomImage}
                alt="Students learning in a classroom at A.K. Divine Public School"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
              <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white/90 to-transparent lg:block" />
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-slate-100 sm:grid-cols-3 lg:grid-cols-6">
            {programs.map(({ name, detail, icon: Icon }, index) => (
              <div
                key={name}
                data-reveal="card"
                style={{ '--reveal-delay': `${Math.min(index, 3) * 60}ms` }}
                className={`flex min-h-[150px] flex-col items-center justify-center px-3 py-5 text-center transition-colors duration-300 hover:bg-slate-50/70 ${
                  index % 2 !== 1 ? 'border-r border-slate-100' : ''
                } ${index < 4 ? 'border-b border-slate-100 sm:border-b-0' : ''} sm:border-r sm:last:border-r-0`}
              >
                <div className="mb-3 grid size-11 place-items-center rounded-xl bg-slate-50 text-[var(--color-primary)]">
                  <Icon size={26} strokeWidth={1.9} />
                </div>
                <h3 className="m-0 text-[14px] font-extrabold text-[var(--color-primary)] sm:text-[15px]">{name}</h3>
                <p className="m-0 mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
