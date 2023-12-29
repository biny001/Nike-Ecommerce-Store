function Hero() {
  return (
    <div className=" mb-32 grid grid-cols-1 gap-8 py-4 text-slate-900 md:grid-cols-2">
      {/* Left column for text */}
      <div className="space-x-1 space-y-12 py-24  pl-3 text-4xl md:col-span-1">
        <span className="font-normal leading-snug">
          Unleash Your Greatness:
        </span>
        <span className="font-normal leading-snug text-red-500">
          Elevate Every Stride
        </span>
        <span> with Nike's Unrivaled Performance!</span>
      </div>

      {/* Right column for hero element */}
      <div className="relative hidden items-start md:col-span-1 md:flex">
        <svg
          id="visual"
          viewBox="100 0 700 600"
          width="800"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="h-full"
        >
          <g transform="translate(428.4746749389057 310.7470851451195)">
            <path
              d="M120.7 -111.2C170.7 -70.7 235.4 -35.4 239.5 4.1C243.6 43.6 187.2 87.2 137.2 125.5C87.2 163.9 43.6 196.9 -1.4 198.4C-46.4 199.8 -92.9 169.5 -126.2 131.2C-159.5 92.9 -179.8 46.4 -190.3 -10.5C-200.7 -67.4 -201.5 -134.8 -168.2 -175.3C-134.8 -215.8 -67.4 -229.4 -16 -213.4C35.4 -197.4 70.7 -151.7 120.7 -111.2"
              fill="#EF4444"
            ></path>
          </g>
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform md:w-max lg:w-max">
          <img
            src="src\assets\images\Hero2.png"
            className="w-full md:h-full"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
