const LastYearSensation = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
            ENVA ’25 Highlight
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#d4af37]">
            Last Year’s Sensation
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              Vivek Samtani
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              ENVA ’25 was headlined by an electrifying stand-up comedy set from
              Vivek Samtani, delivering a day packed with laughter, energy,
              and a packed audience. The performance quickly became one of the
              most talked-about moments of the fest.
            </p>

            <a
              href="https://drive.google.com/file/d/1YYSMh7V814pSgejllVHO6NMHiWoTTDAV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-block border-2 border-[#d4af37] px-8 py-3 text-[#d4af37] font-semibold tracking-wide hover:bg-[#d4af37] hover:text-black transition-all duration-300"
            >
              Watch Performance Clips
            </a>
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="./LASTYEAR/vs2.webp"
                alt="Vivek Samtani stand-up performance"
                className="aspect-[4/5] object-cover rounded-md border border-[#d4af37]/40 w-3xl max-h-96"
              />
              <img
                src="./LASTYEAR/vs3.jpeg"
                alt="Vivek Samtani live show"
                className="aspect-[4/5] object-cover rounded-md border border-[#d4af37]/40 w-3xl max-h-96"
              />
            </div>

            {/* subtle disclaimer */}
            {/* <p className="mt-3 text-xs text-gray-500">
              *Images are representative. Performance clips available via link.
            </p> */}
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 border-t border-gray-800 w-full"></div>
    </section>
  );
};

export default LastYearSensation;
