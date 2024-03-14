import Grid from '@/components/grid';
import { GridTileImage } from '@/components/grid/tile';
import { Product } from '@/lib/data/types';
import Link from 'next/link';
import projectsData from '@/lib/data/projectsData'

export default function projectsDataItems({ products }: { products: Product[] }) {
    return (
        <>
            {projectsData.map((product) => (
                <Grid.Item key={product.handle} className="animate-fadeIn">
                    <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
                        <GridTileImage
                            alt={product.title}
                            label={{
                                title: product.title,
                                amount: product.priceRange.maxVariantPrice.amount,
                                currencyCode: product.priceRange.maxVariantPrice.currencyCode
                            }}
                            src={product.featuredImage?.url}
                            fill
                            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                    </Link>
                </Grid.Item>
            ))}
        </>
    );
}