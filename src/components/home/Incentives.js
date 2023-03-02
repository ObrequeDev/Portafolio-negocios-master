/* This example requires Tailwind CSS v2.0+ */
const incentives = [
    {
      name: '2 - 4 Semanas',
      icon: (props) => (
        <i className='bx bx-paper-plane text-4xl text-gray-900 dark:text-gray-500'></i>
      ),
      description: "En menos de un mes podrias tener tu propio sitio web",
    },
    {
      name: 'Total autoridad en tu pagina web',
      icon: (props) => (
        <i className='bx bxs-copyright text-4xl text-gray-900 dark:text-gray-500'></i>
      ),
      description: "Si optas por tener tu propio sitio web personalizado, tendras total autoridad en el mismo",
    },
    {
      name: 'Proyectos totalmente escalables',
      icon: (props) => (
        <i className='bx bx-line-chart text-4xl text-gray-900 dark:text-gray-500'></i>
      ),
      description:
        "Tu pagina se adecuara totalmente al trafico promedio que pasara por tu sitio web",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto sm:px-2 py-12 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-gilroy-bold tracking-tight text-gray-900 dark:text-dark-txt">
                Servicio de calidad
              </h2>
              <p className="text-base font-gilroy-medium mt-4 text-gray-500">
              En nuestra empresa, ofrecemos un servicio de calidad para asegurarnos de que nuestros clientes estén completamente satisfechos con el resultado final. Nuestro equipo altamente capacitado trabaja de cerca con los clientes para entender sus necesidades y objetivos empresariales, y ofrecer soluciones personalizadas que se adapten a su presupuesto. Nos mantenemos actualizados con las últimas tendencias y tecnologías de desarrollo para garantizar que nuestros clientes obtengan resultados innovadores y efectivos. Si estás buscando un equipo de desarrollo web confiable y con experiencia, contáctanos. Estamos aquí para ayudarte a lograr tus objetivos empresariales.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <incentive.icon className="" aria-hidden="true" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-gilroy-semibold text-gray-900 dark:text-dark-txt">{incentive.name}</h3>
                    <p className="font-gilroy-medium mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
