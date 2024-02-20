{/** import Dashboard from "@/app/ui/Dashboard";
import ProductList from "@/components/products/product-list";
import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
      <ProductList />
        <Weather />
      </Suspense>
    </section>
  )
} 
import { Suspense } from 'react'
import SearchBar from './search-bar'
 
// This component passed as a fallback to the Suspense boundary
// will be rendered in place of the search bar in the initial HTML.
// When the value is available during React hydration the fallback
// will be replaced with the `<SearchBar>` component.
function SearchBarFallback() {
  return <>placeholder</>
}
 
export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          <SearchBar />
        </Suspense>
      </nav>
      <h1>Dashboard</h1>
    </>
  )
}
import SearchBar from './search-bar'
 
export const dynamic = 'force-dynamic'
 
export default function Page() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <h1>Dashboard</h1>
    </>
  )
} */}

'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  // This will be logged on the server during the initial render
  // and on the client on subsequent navigations.
  console.log(search)
 
  return <>Search: {search}</>
}