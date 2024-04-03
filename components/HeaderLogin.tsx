"use client"

import { getCookie, hasCookie } from 'cookies-next';
import Link from 'next/link'
import { useState } from 'react'

export default function HeaderLogin() {

    const [userId, setUserId] = useState(0)

    if (userId == 0 && hasCookie('_auth_bookstore_me')) {
        const meString = getCookie('_auth_bookstore_me')
        if (meString) {
            const me = JSON.parse(meString)
            
            setUserId(me.id)
        }
        
    }

    return <nav className="flex items-center gap-6  text-white">
    {!userId && (
      <>
        <Link
          href="/sign-in"
          className="transition-colors delay-[21ms] hover:text-black-700"
        >
          Login
        </Link>
        <Link
          href="/sign-up"
          className="transition-colors delay-[21ms] hover:text-black-700"
        >
          Register
        </Link>
      </>
    )}

    {userId == 1 && (
        <>
            <Link
            href="/mybooks"
            className="transition-colors delay-[21ms] hover:text-black-700"
            >
                My Books
            </Link>
        </>
    )}
  </nav>
}