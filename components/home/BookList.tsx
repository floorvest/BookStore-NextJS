"use client";

import { SetStateAction, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import { getBooks } from '@/utils/api/books'

import BookCard from './BookCard';
import Loader from "./Loader";
import { useDebouncedCallback } from 'use-debounce';

export default function BookList({category}: {category: number}) {

  const [query, setQuery] = useState('')
  const [items, setItems] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [index, setIndex] = useState(2)

  useEffect(() => {
    getBooks(1, category, query)
    .then((res) => {
      console.log(res)
      setItems(res.data.data)
    })
    .catch((err) => console.log(err))
  }, [query])

  const fetchMoreData = () => {
    getBooks(index, category, query)
    .then((res) => {
      setItems((prevItems) => [...prevItems, ...(res.data.data)]);

      res.data.meta.currentPage < res.data.meta.totalPage ? setHasMore(true) : setHasMore(false)
    })
    setIndex((prevIndex) => prevIndex + 1)
  }

  const handleSearch = useDebouncedCallback((e) => {
    setQuery(e)
  }, 300)

  return (
    <div>
      <form className="max-w-md mx-auto">   
          <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" onChange={(e) => {handleSearch(e.target.value)}}  id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Title or Writer" required />
              {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button> */}
          </div>
      </form>
      <p className="mt-8"></p>
      <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader/>}
    >
        <ul className="grid-cols-4 sm:grid sm:grid-cols-3 sm:gap-9 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
        {items.map((book) => (
          <>
            <BookCard key={book.id} book={book} />
          </>
        ))}

        {items.length == 0 && (
          <h4 className='text-center'>Book containing "{query}" not found</h4>
        )}
      </ul>
    </InfiniteScroll>
    </div>
  );
}