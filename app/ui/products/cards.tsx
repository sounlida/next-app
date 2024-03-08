import React from 'react'
import { productData } from '@/app/lib/productData';


export default async function CardWrapper(id: string) {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await productData();

    return (
        <>
            <Card title="Collected" value={totalPaidInvoices} type="collected" />
            <Card title="Pending" value={totalPendingInvoices} type="pending" />
            <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
            <Card
                title="Total Customers"
                value={numberOfCustomers}
                type="customers"
            />
        </>
    );
}
export function Card({
    id,
    name,
    href,
    image_url,
    imageAlt,
    price,
    color,
}: {
    id?: number | string;
    name: string;
    href?: string;
    image_url?: string;
    imageAlt: string;
    price: number | string;
    color: string;

    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    return (
        <form>
            <img src="..." />
            <div>
                <h3>Basic Tee</h3>
                <h3>$35</h3>
                <fieldset>
                    <legend className="sr-only">Choose a color</legend>
                    <div className="forced-color-adjust-none ...">
                        <label >
                            <input className="sr-only" type="radio" name="color-choice" value="White" />
                            <span className="sr-only">White</span>
                            <span className="size-6 rounded-full border border-black border-opacity-10 bg-white"></span>
                        </label>
                        <div className="forced-color-adjust-none md:forced-color-adjust-auto">
                            <!-- ... -->
                        </div>
                    </div>
                </fieldset>
            </div>
        </form>
    )
}