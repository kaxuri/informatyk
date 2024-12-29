'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Strona Główna', href: '/' },
    { name: 'INF 03 / E.09', href: '/inf03' },
    { name: 'INF 02 / EE 0.8', href: '/inf02' },
    { name: 'O stronie', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06060ecc] backdrop-blur-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white mr-8">
            ΛKUMΛ
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link text-white  transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button asChild variant={'outline'}>
              <Link href="https://github.com/akumadev0/informatyk" target='_blank'>GitHub</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

