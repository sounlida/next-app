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
import Search from '@/app/ui/search';

import Image from 'next/image'
import Link from 'next/link';
import {
  Product,
  ProductItems,
} from '@/app/lib/definitions';

export default async function Lists({
  product,
}: {
  product: ProductItems[];
}) {
  return (
    <>
      <div className="mx-auto mt-1 max-w-2xl px-4 py-2 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <Link href='/product/${product.id}'>
                    <h3 className="text-sm text-gray-700">

                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}

                    </h3>
                  </Link>
                  <p className="mt-1 text-sm text-gray-500">{product.colors}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}