import Navbar from '@/components/layout/navbar';

import { Lists } from '@/components/grid/lists';
import Footer from '@/components/layout/footer';
import { Suspense } from 'react';




export default function Page() {
  return (
    <>
      <Navbar />

      <Lists />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
