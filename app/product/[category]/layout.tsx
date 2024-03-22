// Generate segments for [category]
export async function generateStaticParams() {
    const products = await fetch('https://.../products').then((res) => res.json())

    return products.map((product) => ({
        category: product.category.slug,
    }))
}

export default function Layout({ params }: { params: { category: string } }) {
    // ...
}