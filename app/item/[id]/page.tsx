import { getItem } from '@/utils/get-item'

export const revalidate = 3600 // revalidate the data at most every hour

export default async function Page({
    params: { id },
}: {
    params: { id: string }
}) {
    const item = await getItem(id)
    // ...
}