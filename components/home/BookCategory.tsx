'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategory } from '@/utils/api/books'

export default function BookCategory({category}: {category: number}) {

    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        getCategory()
        .then((res) => setItems(res.data))
        .catch((err) => console.error(err))
    }, [])

    return <div>
        <h4 className='mb-4'><b>Categories</b></h4>
        <ul>
            {items.map((item) => (
                <li>
                    <Link href={`/category/${item.id}`} className={category == item.id ? 'font-bold text-emerald-700 cursor-pointer':'cursor-pointer'}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
}