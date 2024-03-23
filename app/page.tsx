import { sql } from '@vercel/postgres';

import Navbar from '@/components/layout/navbar';
import { ThreeItemGrid } from '@/components/grid/three-items';
import Footer from '@/components/layout/footer';
import { Suspense } from 'react';
import Image from 'next/image'
import Lists from '@/components/grid/lists'
import { fetchProduct, fetchProductById, fetchFilteredProduct } from '@/lib/data';
import { notFound } from 'next/navigation';

import { redirect } from 'next/navigation';
import { inter } from './ui/fonts';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string;
  colors: string;
}


export default async function Page({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, title, price, images, colors
    FROM product
    WHERE title ILIKE ${'%' + search + '%'};
  `;
  const product = result.rows as Product[];

  return (
    <>

      <Navbar />
      <Lists product={product} />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
