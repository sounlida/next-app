// Generate segments for [product] using the `params` passed from
// the parent segment's `generateStaticParams` function
export async function generateStaticParams({
    params: { category },
}: {
    params: { category: string }
}) {
    const products = await fetch(
        `https://.../products?category=${category}`
    ).then((res) => res.json())

    return products.map((product) => ({
        product: product.id,
    }))
}

export default function Page({
    params,
}: {
    params: { category: string; product: string }
}) {
    // ...
}