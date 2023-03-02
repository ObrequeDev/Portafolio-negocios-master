/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-gilroy-black tracking-tight text-gray-900 sm:text-4xl">
            <span className="block dark:text-dark-txt">Quieres aprender a desplegar por ti mismo un proyecto?</span>
            <span className="block text-blue-600">Empieza Ahora Mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex">
              <a
                href="/cursos"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-gilroy-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700"
              >
                Empieza Ahora
              </a>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  