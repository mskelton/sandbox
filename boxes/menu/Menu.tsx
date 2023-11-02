import { useRef } from "react"

export function Menu() {
  const ref = useRef<HTMLButtonElement>(null!)

  return (
    <button
      ref={ref}
      className="menu"
      onClick={(e) => {
        ref.current.disabled
        ref.current.toggleAttribute("aria-pressed")
      }}
    >
      <svg viewBox="0 0 100 100">
        <rect x="20" y="30" rx="6" ry="6" width="60" height="10"></rect>
        <rect x="20" y="50" rx="6" ry="6" width="60" height="10"></rect>
        <rect x="20" y="70" rx="6" ry="6" width="60" height="10"></rect>
      </svg>
    </button>
  )
}
