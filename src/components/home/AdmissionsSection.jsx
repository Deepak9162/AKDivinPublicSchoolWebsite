import {
  Check,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Users,
} from 'lucide-react'
import Container from '../layout/Container'
import admissionImage from '../../assets/SchoolAdmissionPage.png'

const benefits = [
  { label: 'Easy Admission Process', icon: ClipboardCheck },
  { label: 'Guidance & Support for Parents', icon: Users },
  { label: 'Safe & Secure Environment', icon: ShieldCheck },
  { label: 'Quality Education with Values', icon: GraduationCap },
]

const documents = [
  'Birth Certificate',
  'Passport Size Photos',
  'Previous School Report Card',
  'Aadhaar Card (Optional)',
  'Address Proof',
]

const classes = ['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10']

export default function AdmissionsSection() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="premium-section bg-white" aria-labelledby="admissions-home-title">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-[#f8fbfd] shadow-[0_12px_32px_rgba(15,39,64,0.055)]">
          <div className="grid items-stretch lg:grid-cols-[42%_58%]">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-12">
              <p className="section-eyebrow">Admissions</p>
              <h2
                id="admissions-home-title"
                className="section-title max-w-[470px]"
                data-reveal="heading"
              >
                <span className="heading-reveal__inner">
                  School Admission
                  <span className="block">Open 2025–26</span>
                </span>
              </h2>
              <p className="section-copy mt-5 max-w-[470px]">
                Give your child the right start with quality education, strong values and a bright future.
              </p>
            </div>

            <div className="relative min-h-[250px] sm:min-h-[310px] lg:min-h-[340px]">
              <img
                src={admissionImage}
                alt="Students representing school admissions"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
              <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#f8fbfd] to-transparent lg:block" />
            </div>
          </div>

          <div className="grid border-t border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                data-reveal="card"
                style={{ '--reveal-delay': `${Math.min(index, 3) * 60}ms` }}
                className={`flex min-h-[86px] items-center gap-3 px-5 py-4 transition-colors duration-300 hover:bg-slate-50/70 ${
                  index < benefits.length - 1 ? 'lg:border-r lg:border-slate-200' : ''
                } ${index < 2 ? 'border-b border-slate-200 sm:border-b-0' : ''} ${index % 2 === 0 ? 'sm:border-r sm:border-slate-200 lg:border-r' : ''}`}
              >
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <Icon size={18} strokeWidth={2.1} />
                </div>
                <span className="text-[13px] font-bold leading-[1.35] text-[var(--color-primary)] sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.85fr_1fr] lg:gap-8">
          <div className="premium-card p-5 sm:p-6 lg:p-7" data-reveal>
            <h3 className="m-0 text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl">
              Admission Enquiry Form
            </h3>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
                  Student Name
                  <input
                    type="text"
                    name="studentName"
                    autoComplete="name"
                    className="form-control h-11 px-3 text-sm"
                    placeholder="Enter student name"
                  />
                </label>

                <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
                  Select Class
                  <select
                    name="class"
                    defaultValue=""
                    className="form-control h-11 px-3 text-sm"
                  >
                    <option value="" disabled>Select class</option>
                    {classes.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
                  Parent Name
                  <input
                    type="text"
                    name="parentName"
                    className="form-control h-11 px-3 text-sm"
                    placeholder="Enter parent name"
                  />
                </label>

                <label className="grid gap-1.5 text-sm font-semibold text-slate-700">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    className="form-control h-11 px-3 text-sm"
                    placeholder="Enter phone number"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-1.5 text-sm font-semibold text-slate-700">
                Message (Optional)
                <textarea
                  name="message"
                  rows="4"
                  className="form-control resize-none px-3 py-3 text-sm"
                  placeholder="Write your message"
                />
              </label>

              <button
                type="submit"
                className="btn-accent mt-5 inline-flex items-center justify-center"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          <aside className="rounded-2xl bg-[var(--color-primary)] p-6 text-white shadow-[0_12px_30px_rgba(6,46,84,0.12)] sm:p-7" aria-labelledby="documents-required-title" data-reveal>
            <h3 id="documents-required-title" className="m-0 text-xl font-extrabold sm:text-2xl">
              Documents Required
            </h3>
            <div className="mt-6 grid gap-4">
              {documents.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary)]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-white/95">{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
