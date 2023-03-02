import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import { toast } from 'react-toastify'


const navigation = {
  products: [
    { name: 'Aplicaciones', href: '/productos' },
    { name: 'Servicios', href: '/servicio' },
  ],
  support: [
    { name: 'Guias', href: '/guias' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'Contacto', href: '/contacto' },
    { name: 'Nosotros', href: '/nosotros' },
  ],
  legal: [
    { name: 'Privacidad', href: '/privacidad' },
    { name: 'Terminos', href: '/terminos' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/ObrequeDev',
      icon: (props) => (
        <i className='bx bxl-github text-2xl hover:text-violet-700' ></i>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/obreque-developers-6a2355247/',
      icon: (props) => (
        <i className='bx bxl-linkedin-square text-2xl hover:text-blue-600'></i>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/obrequedevs/',
      icon: (props) => (
        <i className='bx bxl-instagram text-2xl hover:text-pink-500'></i>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/obrequedevelop1/',
      icon: (props) => (
        <i className='bx bxl-twitter text-2xl hover:text-sky-500'></i>
      ),
    },

  ],
  
}


function Footer() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
  });
  const {
    email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const formData = new FormData()
    formData.append('email', email)

    const fetchData = async () => {
      axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/newsletter`, formData, config)
        .then(res => {
          toast.success('Gracias por suscribirte')
        })
        .catch(err => {

          setLoading(false);
          toast.error("Erroal enviar mensaje")
        })
    }

    fetchData()

  }

  return (
    <footer className="bg-gray-50 dark:bg-dark-bg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-gilroy-semibold text-gray-300 tracking-wider uppercase">Productos</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <NavLink to={item.href} className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-gilroy-semibold text-gray-300 tracking-wider uppercase">Soporte</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <NavLink to={item.href} className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-gilroy-semibold text-gray-300 tracking-wider uppercase">Empresa</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <NavLink to={item.href} className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-gilroy-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <NavLink to={item.href} className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular">
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-gilroy-semibold text-gray-300 tracking-wider uppercase">
              Descuento, ultimas noticias y mas!
            </h3>
            <p className="mt-4 text-base text-gray-400">
              Se de las primeras 50 personas y podras recibir un descuento en el total de tu proyecto.
            </p>
            <form onSubmit={e => onSubmit(e)} className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                autoComplete="email"
                required
                className="font-gilroy-medium mx-0.5 block w-full py-2 text-base rounded-xl dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                placeholder="Ingresa tu correo"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-xl py-2 px-4 text-base font-gilroy-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-dark-second pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-3">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="md:order-1">
            <p className="text-2xl text-black dark:text-white font-gilroy-heavy">
              O'Dev
            </p>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-2">
            &copy; 2022 ObrequeDevelopers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer