import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SOLUTIONS_ROLES } from '../config/solutions'

export default function SolutionsMenu() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const itemRefs = useRef([])
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    if (!open) return
    function onMouseDown(e) {
      if (
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [open])

  function focusItem(index) {
    itemRefs.current[index]?.focus()
  }

  function openAndFocus(index) {
    setOpen(true)
    requestAnimationFrame(() => focusItem(index))
  }

  function handleButtonKeyDown(e) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openAndFocus(0)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      openAndFocus(SOLUTIONS_ROLES.length - 1)
    }
  }

  function handleMenuKeyDown(e) {
    const items = itemRefs.current.filter(Boolean)
    const idx = items.indexOf(document.activeElement)

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        break
      case 'ArrowDown':
        e.preventDefault()
        items[(idx + 1) % items.length]?.focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        items[(idx - 1 + items.length) % items.length]?.focus()
        break
      case 'Home':
        e.preventDefault()
        items[0]?.focus()
        break
      case 'End':
        e.preventDefault()
        items[items.length - 1]?.focus()
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleButtonKeyDown}
        className={`flex items-center gap-1 hover:text-field transition-colors ${
          open ? 'text-field font-medium' : ''
        }`}
      >
        Solutions
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Solutions by role"
          onKeyDown={handleMenuKeyDown}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-mist border border-line rounded-sm shadow-lg py-1 z-50"
        >
          {SOLUTIONS_ROLES.map((role, i) => (
            <Link
              key={role.slug}
              to={`/solutions/${role.slug}`}
              role="menuitem"
              ref={(el) => { itemRefs.current[i] = el }}
              tabIndex={-1}
              className="block px-4 py-2.5 text-[13.5px] text-ink/80 hover:bg-field/10 hover:text-field focus:bg-field/10 focus:text-field focus:outline-none"
            >
              {role.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
