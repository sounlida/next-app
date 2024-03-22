
import { GridTileImage } from '@/components/grid/tile';
import { getCollectionProducts } from 'lib/shop';
import type { Product } from '@/lib/shop/types';
import Link from 'next/link';
import Image from 'next/image'
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
function ThreeItemGridItem({
    item,
    size,
    priority
}: {
    item: Product;
    size: 'full' | 'half';
    priority?: boolean;
}) {
    return (
        <div
            className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
        >
            <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
                <GridTileImage
                    src={item.images[0]}
                    fill
                    sizes={
                        size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
                    }
                    priority={priority}
                    alt={item.title}
                    label={{
                        position: size === 'full' ? 'center' : 'bottom',
                        title: item.title as string,
                        amount: item.price,
                        currencyCode: item.price,
                    }}
                />
            </Link>
        </div>
    );
}

export async function ThreeItemGrid({ products }: { products: Product[] }) {
    // Collections that start with `hidden-*` are hidden from the search page.
    const homepageItems = await getCollectionProducts({
        collection: 'hidden-homepage-featured-items'
    });

    if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

    const [firstProduct, secondProduct, thirdProduct] = homepageItems;

    return (
        <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
            <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
            <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
            <ThreeItemGridItem size="half" item={thirdProduct} />
        </section>
    );
}