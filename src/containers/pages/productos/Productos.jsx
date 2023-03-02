import Header from 'components/productos/Header';
import FullWidthLayout from 'hocs/layouts/FullWidthLayout';
import { Link } from 'react-router-dom';

function Productos() {
    return (
        <FullWidthLayout>
            <Header />
            <div className='md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 ultra-sm:block gap-4 mt-12 mb-12'>

                <Link to="/producto/ecommerce-kubo" className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-[2rem]">
                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src="https://drive.google.com/uc?id=1O58p-eLdWS9VwGXYNIT1zaFdxSD_yE42" alt="" />
                    </div>
                    <div className="flex-1 bg-white dark:bg-dark-main p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <div className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">e-commerce (Kubo)</p>
                                <p className="mt-3 text-base text-gray-500">Pagina donde podras realizar ventas de todo tipo de productos</p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-[2rem]">
                    <Link to="/" className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src="#" alt="" />
                    </Link>
                    <div className="flex-1 bg-white dark:bg-dark-main p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <Link to="/" className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">e-commerce (Kubo)</p>
                                <p className="mt-3 text-base text-gray-500">Pagina donde podras realizar ventas de todo tipo de productos</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-[2rem]">
                    <Link to="/" className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src="#" alt="" />
                    </Link>
                    <div className="flex-1 bg-white dark:bg-dark-main p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <Link to="/" className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">e-commerce (Kubo)</p>
                                <p className="mt-3 text-base text-gray-500">Pagina donde podras realizar ventas de todo tipo de productos</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-[2rem]">
                    <Link to="/" className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src="#" alt="" />
                    </Link>
                    <div className="flex-1 bg-white dark:bg-dark-main p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <Link to="/" className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">e-commerce (Kubo)</p>
                                <p className="mt-3 text-base text-gray-500">Pagina donde podras realizar ventas de todo tipo de productos</p>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>

        </FullWidthLayout>
    )
}
export default Productos