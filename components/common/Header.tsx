import Link from 'next/link'
import React from 'react'

function Header({user}: any) {
  return (
    <>
      <header>
        <nav className="px-4 border-b py-4 flex justify-between">
          <Link href="/" className="text-xl font-bold">
            Todoist
          </Link>
          <div>
          {user?.uid && <Link href="/todos" className="ml-4 text-xl font-semibold text-red-500">
              Todos
            </Link>}
          {user?.uid ? (
            <Link href="/auth/logout" className="ml-4 text-xl font-bold">
              Logout
            </Link>
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