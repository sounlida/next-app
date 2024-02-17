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
      name: 'Women Handbag Shoulder Bag',
      href: '#',
      imageSrc: 'https://ae01.alicdn.com/kf/H2ba0d35d286c495cbeb485a1ce2333e1W/Women-Handbag-Shoulder-Bag-Girls-Fashion-Famous-Design-Leather-Big-Casual-Tote-High-Quality-Hasp-Casual.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black, Pink, Yellow, White',
    },
    // More products...
    {
      id: 2,
      name: 'Ladies Imported Combo Bags',
      href: '#',
      imageSrc: 'https://5.imimg.com/data5/LT/MU/VB/IOS-44918115/product-jpeg-500x500.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://image.made-in-china.com/2f0j00OQdGRPtsCKcq/New-3-Pieces-Lady-Fashion-Handbag-Leather-Set-Ladies-Bags-Handbag.webp',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/hand-messenger-bag/d/0/c/women-blue-shoulder-bag-pack-of-3-ajn003-shoulder-bag-krozilla-original-imag8fr2btkbn4cw.jpeg?q=20&crop=false',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://ae01.alicdn.com/kf/S9b7485223b26445883c630ada8d5f160b.jpg_640x640Q90.jpg_.webp',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiNPJn7M2A9YlNkYaab5c2SP_cddjd3Kf31B7ZYbHMYjgldWkueJYMoa86_rNFzR89u8&usqp=CAU',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://img.fruugo.com/product/4/75/1120993754_max.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://m.media-amazon.com/images/I/61tHzCWO9+L._AC_UY300_.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black',
    },
  ]
  
  export default function ProductList() {
    return (
      <div className="z-10 max-w-10xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="mx-auto max-w-2xl items-center px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h2 className=" text-2xl tracking-tight font-mono font-bold">New Arrivals</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex flex-row justify-between ">
                  <div class="basis-2/3">
                    <h3 className="text-sm ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm-8 text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-large text-red-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  