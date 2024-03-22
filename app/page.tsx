
import { Lists } from '@/components/grid/lists';
import Footer from '@/components/layout/footer';
import { Suspense } from 'react';



export const runtime = 'edge';

export default async function Page() {
  return (
    <>
      <Lists />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
