import { signout } from '@/lib/firebase-auth/auth_signout'
import Link from 'next/link'
import React from 'react'
import { HiLogout } from 'react-icons/hi'

function Header({user}: any) {
  return (
    <>
      <header>
        <nav className="px-4 border-b py-4 flex justify-between">
          <Link href="/" className="text-xl font-bold">
            Todoist
          </Link>
          <div className='flex'>
          {user?.uid && <Link href="/todos" className="ml-6 text-xl font-semibold text-red-500">
              Todos
            </Link>}
          {user?.uid ? (
            <button className="ml-4 text-xl flex items-center" onClick={signout}>
             <span className='me-2'>Logout</span>  <HiLogout />
            </button>
          ) : (
            <Link href="/auth/login" className="ml-4 text-xl font-semibold">
              Login
            </Link>
          )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header