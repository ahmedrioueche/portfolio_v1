// Example component with an ID
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-[70vh] text-center px-4 text-white"
    >
      <h2 className="text-4xl md:text-3xl font-bold mb-4 relative inline-block group">
        About Me
        <span className="block h-[2px] w-1/2 bg-red-500 absolute left-1/2 bottom-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
      </h2>
      <p className="text-lg md:text-xl font-light max-w-3xl">
        I graduated with a Computer Engineering degree in 2024. My passion for
        technology and enthusiasm for innovation drive me to contribute to
        exciting and groundbreaking projects. I am committed to pushing the
        boundaries of what&apos;s possible, bringing fresh ideas and dedicated effort
        to every opportunity I encounter.
      </p>
    </section>
  );
}
