'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Strona Główna', href: '/' },
    {
      name: 'INF 03 / E.09',
      key: 'inf03',
      dropdown: [
        { name: 'Test 40 pytań', href: '/inf03/' },
        { name: '1 Losowe Pytanie', href: '/inf03/jedno' },
      ],
    },
    {
      name: 'INF 02 / EE 0.8',
      key: 'inf02',
      dropdown: [
        { name: 'Test 40 pytań', href: '/inf02/' },
        { name: '1 Losowe Pytanie', href: '/inf02/jedno' },
      ],
    },
    { name: 'Aktualizacje', href: '/about' },
    { name: 'Egzaminy Praktyczne', href: '/praktyczne' },
  ]

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prevKey) => (prevKey === key ? null : key))
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00000030] backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white mr-8">
              ΛKUMΛ
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <button
                      className="nav-link flex items-center text-white transition-colors"
                      onClick={() => toggleDropdown(item.key!)}
                    >
                      {item.name}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-link text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && openDropdown === item.key && (
                    <div className="absolute left-0 mt-2 w-48 bg-[#00000030] backdrop-blur-sm rounded-lg shadow-lg z-10">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#333333] rounded-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button asChild variant={'outline'}>
              <Link href="https://github.com/akumadev0/informatyk" target="_blank">
                GitHub
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {/* Menu mobilne */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#00000030] backdrop-blur-sm px-4 py-2">
          {navItems.map((item) => (
            <div key={item.name} className="mb-2">
              {item.dropdown ? (
                <details open={openDropdown === item.key}>
                  <summary
                    className="cursor-pointer text-white"
                    onClick={() => toggleDropdown(item.key!)}
                  >
                    {item.name}
                  </summary>
                  <div className="pl-4 mt-2 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-white  rounded-lg px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  className="block text-white  rounded-lg px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
