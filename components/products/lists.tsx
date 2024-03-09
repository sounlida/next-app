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
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (1).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (2).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (3).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (4).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (5).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (6).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (7).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (8).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 9,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (9).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 10,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (10).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 11,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (11).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  {
    id: 12,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products/list/fashion-bag (12).JPG",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$13",
    colors: "Black",
  },
  // More products...
]

export default function Example() {
  return (
    <>
      <div className="mx-auto mt-1 max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.colors}</p>
                </div>
                <p className="text-1xl font-semibold medium text-red-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
