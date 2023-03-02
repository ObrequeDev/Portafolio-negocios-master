import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

function Header(){

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });
    const { name,
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
      formData.append('name', name)
      formData.append('email', email)

      const fetchData = async () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/demo`, formData, config)
        .then(res => {
          
          setTimeout(navigate('/demo'),1000)
        })
        .catch(err => {
          
          setLoading(false);
          toast.error("Erroal enviar mensaje")
        }) 
      }

      fetchData()
      
    }
    return(
        <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-5xl font-gilroy-black dark:text-dark-txt">Expande tu negocio</h1>
              <p className=" text-base font-gilroy-medium text-gray-500 mt-2 sm:mt-4 sm:text-xl lg:text-lg xl:text-xl">
                Lleva tu negocio aun mas alla! haz uso de las tecnologias mas demandadas ahora en la era digital
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-gilroy-medium text-gray-900 dark:text-dark-txt">Se de las primeras 50 personas y podras recibir un descuento en el total de tu proyecto!</p>
                <form onSubmit={e=>onSubmit(e)} className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    required
                    className="font-gilroy-medium mx-0.5 block w-full py-3 text-base rounded-xl dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="Correo Electronico"
                  />
                  <label htmlFor="email" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e=>onChange(e)}
                    required
                    className="font-gilroy-medium mx-0.5 block w-full py-3 text-base rounded-xl dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="Nombre"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-gilroy-medium rounded-full text-white bg-blue-800 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Empezar Ahora
                  </button>
                </form>
                <p className="font-gilroy-medium mt-3 text-sm text-gray-500">
                  Creemos en la proteccion de tus datos. Lee nuestra
                  <Link to="/privacidad" className="font-gilroy-medium text-blue-800 underline dark:text-blue-800 ml-1">
                    Politica de Privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md dark:shadow-gray-900 dark:shadow-lg">
                <div className="p-4 relative block w-full bg-white  rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src="https://www.ipp.edu.pe/blog/wp-content/uploads/2019/08/startup-1.png"
                    alt=""
                  />
                  {/* <span className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                    <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                      <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}

export default Header