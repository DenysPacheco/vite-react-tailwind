import { useState, Fragment } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle(props) {
  // const [enabled, setEnabled] = useState(false)
  const { dark, changeDark, className } = props

  const toggleDarkMode = () => {
    changeDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <label
      htmlFor="default-toggle"
      className="relative inline-flex space-x-2 items-center justify-center cursor-pointer"
    >
      <div className={className}>
        {dark ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
      <p className={className}>
        Dark Mode
      </p>
      <input
        type="checkbox"
        value={dark}
        checked={dark}
        id="default-toggle"
        className="sr-only peer"
        onChange={toggleDarkMode}
      />
      <div className="w-11 h-6 relative bg-gray-400 peer-focus:outline-none rounded-full dark:bg-gray-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
  )
}
