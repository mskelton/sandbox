"use client"
import "./Menu.css"

export function Menu() {
  return (
    <button
      className="menu"
      onClick={(e) => {
        e.currentTarget.toggleAttribute("aria-pressed")
      }}
      type="button"
    >
      <svg viewBox="0 0 100 100">
        <rect height="10" rx="6" ry="6" width="60" x="20" y="30" />
        <rect height="10" rx="6" ry="6" width="60" x="20" y="50" />
        <rect height="10" rx="6" ry="6" width="60" x="20" y="70" />
      </svg>
    </button>
  )
}
