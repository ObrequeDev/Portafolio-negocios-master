import FullWidthLayout from "hocs/layouts/FullWidthLayout";

function EcommerceKubo() {
    return (
        <FullWidthLayout>
            <div className="pb-[3rem]">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-gilroy-black text-gray-900 dark:text-dark-txt sm:text-4xl lg:text-5xl">Ecommerce</h2>
                            <p className="mt-3 max-w-5xl mx-auto text-xl text-gray-500 sm:mt-4 font-gilroy-medium">
                                Vende tus productos de manera online donde tus clientes no perderan su tiempo e iran directo al grano gracias al diseño minimalista con enfoque al 100% en los productos publicados.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto ultra-sm:w-full md:w-[70%] rounded-lg shadow-lg  dark:shadow-gray-900 dark:shadow-lg">
                    <div className="p-4 relative block w-full bg-white  rounded-lg overflow-hidden">
                        <img
                            className="w-full"
                            src="https://equantum.s3.sa-east-1.amazonaws.com/images/ecommerce.PNG"
                            alt=""
                        />
                    </div>
                </div>
            </div>


            <div className="lg:grid lg:grid-cols-12 lg:gap-8 ultra-sm:py-[3rem]">

                <div className="ultra-sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-center lg:flex-col lg:self-center lg:ml-12 order-2">
                    <h1 className="ultra-sm:text-2xl md:text-3xl lg:text-5xl font-gilroy-black dark:text-dark-txt">Feedback instantaneo</h1>
                    <p className=" text-base font-gilroy-medium text-gray-500 mt-2 sm:mt-4 sm:text-xl lg:text-lg xl:text-xl">
                        Tus clientes podran saber de manera inmediata que productos se venden mas y cuales con las novedades en productos.
                    </p>
                </div>

                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center order-1   ">

                    <div className="relative mx-auto ultra-sm:w-full w-[85%] rounded-lg shadow-lg  dark:shadow-gray-900 dark:shadow-lg">
                        <div className="p-4 relative block w-full bg-white  rounded-lg overflow-hidden">
                            <img
                                className="w-full"
                                src="https://equantum.s3.sa-east-1.amazonaws.com/images/landing+ecommerce+kubo/captura+2.PNG"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto py-8 px-4 ultra-sm:py-[3rem] sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-gilroy-black text-gradient-to-l bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-indigo-300 dark:to-indigo-700 bg-gradient-to-r from-indigo-300 to-indigo-700  ultra-sm:text-2xl md:text-3xl lg:text-5xl">Carrito de compras</h2>
                        <p className="mt-3 max-w-5xl mx-auto text-xl text-gray-500 sm:mt-4 font-gilroy-medium">
                            Junta todos los productos que quieras ya que el carrito lo llevara por ti, y no te preocupes si te vas las cosas seguiran ahi donde las dejaste.
                        </p>
                    </div>
                </div>
                <div className="sm:flex sm:gap-x-12 ultra-sm:pt-12">
                    <div className="relative mx-auto ultra-sm:w-full w-[70%] rounded-lg shadow-lg bg-white  dark:shadow-gray-900 dark:shadow-lg">
                        <div className="p-4 relative block w-full bg-white   rounded-lg overflow-hidden">
                            <img
                                className="w-full mt-[35px]"
                                src="https://equantum.s3.sa-east-1.amazonaws.com/images/landing+ecommerce+kubo/Captura+3.PNG"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="ultra-sm:mt-[2rem] sm:mt-0 relative mx-auto ultra-sm:w-full w-[70%] rounded-lg shadow-lg  dark:shadow-gray-900 dark:shadow-lg">
                        <div className="p-4 relative block w-full bg-white  rounded-lg overflow-hidden">
                            <img
                                className="w-full"
                                src="https://equantum.s3.sa-east-1.amazonaws.com/images/landing+ecommerce+kubo/Captura+4.PNG"
                                alt=""
                            />
                        </div>
                    </div>

                </div>

            </div>

            <div className="md:flex">
                <div className="md:w-[50%] ultra-sm:text-center lg:col-span-6 lg:text-center lg:flex-col lg:self-center lg:ml-12 order-1">
                    <h1 className="ultra-sm:text-2xl md:text-3xl lg:text-5xl font-gilroy-black dark:text-dark-txt">Pasarelas de pago</h1>
                    <p className=" text-base font-gilroy-medium text-gray-500 mt-2 sm:mt-4 sm:text-xl lg:text-lg xl:text-xl">
                        Dispondras de diferentes formas de cobrar a tus clientes para que el metodo de pago no sea un problema.
                    </p>
                </div>

                <div className="md:w-[50%] mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="ultra-sm:flex ultra-sm:justify-evenly md:flex-col gap-y-11 ">
                        <div className="md:mr-[15rem] md:mb-11 flex justify-center ">
                            <i className='bx bxl-visa text-[10rem] text-gray-400 mt-0.5'></i>
                        </div>
                        <div className=" md:mb-11  flex justify-center ">
                            <i className='bx bxl-stripe ultra-sm:text-[5rem] ultra-sm:self-center md:text-[7rem] text-gray-400 mt-0.5'></i>
                        </div>
                        <div className="md:mr-[15rem] flex justify-center ">
                            <i className='bx bxl-paypal ultra-sm:text-[5rem] ultra-sm:self-center md:text-[7rem] text-gray-400 mt-0.5'></i>
                        </div>

                    </div>
                </div>
            </div>






        </FullWidthLayout >
    );
}
export default EcommerceKubo;