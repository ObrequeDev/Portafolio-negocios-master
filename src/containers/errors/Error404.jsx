import FullWidthLayout from "hocs/layouts/FullWidthLayout";

function Error404() {
    return (
        <FullWidthLayout>
            <div className="">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-gilroy-black text-gray-900 dark:text-dark-txt sm:text-4xl lg:text-5xl">Error 404</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-gilroy-medium">
                                Nada por aca, busque en otro lado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    )
}

export default Error404