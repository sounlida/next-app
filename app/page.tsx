import { sql } from '@vercel/postgres';

import Navbar from '@/components/layout/navbar';
import { ThreeItemGrid } from '@/components/grid/three-items';

import Footer from '@/components/layout/footer';
import { Suspense } from 'react';
import Image from 'next/image'
import Lists from '@/components/grid/lists'
interface Product {
  id: number;
  title: string;
  href: string;
  price: string;
  description: string;
  details: string;
  images: string;
  colors: string;
  size: string;
  collection: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, title, price, images, colors, size, collection
    FROM product
    WHERE title ILIKE ${'%' + search + '%'};
  `;
  const products = result.rows as Product[];

  return (
    <>
      <Navbar />
      <Lists products={products} />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
