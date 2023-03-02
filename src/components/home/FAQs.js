/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Por que realizar tus proyectos con nosotros",
    answer:
      "Realizar tus proyectos con nosotros te garantiza un servicio de calidad. Nuestro equipo altamente capacitado trabaja de cerca contigo para entender tus necesidades y objetivos empresariales, y ofrecer soluciones personalizadas que se adapten a tu presupuesto. Además, nos mantenemos actualizados con las últimas tendencias y tecnologías de desarrollo para garantizar que obtengas resultados innovadores y efectivos. Trabajamos con dedicación para asegurarnos de que estés completamente satisfecho con el resultado final.",
  },
  {
    question: "En que lenguaje estara programado mi proyecto",
    answer:
      "El lenguaje de programación que utilizaremos para tu programa dependerá de tus necesidades y objetivos empresariales. Como equipo de desarrolladores altamente capacitados, dominamos varios lenguajes de programación, pero dado que Python es nuestro lenguaje más predominante, es muy probable que tu programa se programe en Python. Sin embargo, trabajaremos contigo para determinar qué lenguaje de programación se adapta mejor a tus necesidades y objetivos empresariales, y te mantendremos informado durante todo el proceso de desarrollo.",
  },
  {
    question: "Quiero que mi proyecto este programado con un lenguaje en especifico",
    answer:
      "Nosotros como equipo de desarrollo, nos especializamos en programación en Python y C#. Si deseas que tu proyecto sea programado en uno de estos lenguajes, estamos capacitados para trabajar contigo y ofrecerte un servicio de calidad en el lenguaje de programación de tu elección. Sin embargo, si otro lenguaje de programación es más adecuado para tus necesidades empresariales, podemos discutir contigo si es posible satisfacer tus requisitos específicos en ese lenguaje.",
  },
  {
    question: "Donde estaran alojado mi proyecto",
    answer:
      "Como equipo de desarrollo, preferimos alojar los proyectos de nuestros clientes en render.com ya que es un servicio de alojamiento confiable y seguro. Sin embargo, entendemos que tus necesidades empresariales pueden requerir un servicio de alojamiento diferente. Si es necesario, podemos discutir otras opciones de alojamiento y determinar si es posible alojar tu proyecto en otro lugar. Nuestro objetivo es asegurarnos de que tu proyecto se aloje en un entorno seguro y de alta calidad que satisfaga tus necesidades empresariales.",
  },
  {
    question: "Para que sirve pagar una membresia",
    answer:
      "Actualmente, no ofrecemos una membresía paga. Estamos trabajando en nuevas opciones para brindar a nuestros clientes una mayor seguridad y protección, y ofreceremos opciones de membresía en el futuro. Nuestro objetivo es brindar un servicio de alta calidad que cumpla con tus expectativas y necesidades empresariales sin la necesidad de una membresía.",
  },
  {
    question: "Cual es la diferencia entre un servicio de cloud y un hosting",
    answer:
      "En términos simples, un servicio de hosting tradicional se refiere a la práctica de alojar un sitio web en un solo servidor físico, mientras que un servicio en la nube permite a los usuarios alojar su sitio web en una red interconectada de servidores, lo que ofrece una mayor escalabilidad, redundancia y flexibilidad en comparación con el alojamiento tradicional. Además, los servicios en la nube suelen ofrecer herramientas adicionales y servicios de apoyo para los desarrolladores, como análisis en tiempo real, balanceo de carga y almacenamiento de datos, lo que puede ser beneficioso para los clientes que buscan una mayor capacidad y recursos en su sitio web.",
  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQs() {
  return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-dark-second">
          <h2 className="text-center text-3xl font-gilroy-bold text-gray-900 sm:text-4xl dark:text-dark-txt">Preguntas Frecuentes</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-dark-second">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-gilroy-medium text-gray-900 dark:text-dark-txt">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 font-gilroy-medium">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}
