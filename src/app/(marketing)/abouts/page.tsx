'use client'
 
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    absolute: 'About',
  },
}
 
// Output: <title>About</title>
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/abouts')}>
      Abouts Us
    </button>
  )
}