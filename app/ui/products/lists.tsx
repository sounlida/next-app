/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import productData from "@/app/lib/productData"
import Image from 'next/image';

export default function Example() {
    return (
        <>
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products List</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {productData.map((product) => (
                        <div key={product.id} className="group relative rounded-md bg-gray-50">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    width={300}
                                    height={300}
                                    priority
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-1 flex justify-between px-4 py-2">
                                <div>
                                    <h3 className="text-sm text-gray-900">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-700">{product.colors}</p>

                                </div>
                                <p className="mt-1 text-2xl font-medium text-red-500">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}