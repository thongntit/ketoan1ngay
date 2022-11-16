export default function BlogHeader({ title }) {
  return (
    <section className="mt-16 mb-10 flex flex-col items-center md:mb-16 md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-base font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl">
        {title}
      </h1>
    </section>
  )
}
