import { BuildingStorefrontIcon, UserCircleIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import type { BaseSyntheticEvent } from 'react'

export default function Header() {
  function swapTheme(event: BaseSyntheticEvent) {
    const isDark = event.target.checked

    document.documentElement.dataset.theme = isDark 
      ? 'light'
      : 'dark'
  }

  return (
    <header className="flex items-center justify-between bg-base-300 px-10 py-4 shadow-md">
      <div className="flex items-center gap-1">
        <BuildingStorefrontIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">
          Peluquería "Jeanelly Adames"
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line tailwindcss/classnames-order */}
        <label className="swap swap-rotate btn-square btn-sm btn btn-neutral">
          <input type="checkbox" onInput={swapTheme}/>
          <SunIcon className="swap-off h-5 w-5" />
          <MoonIcon className="swap-on h-5 w-5" />
        </label>
        <div className="flex items-center gap-1">
          <UserCircleIcon className="h-6 w-6" />
          <p className="font-semibold">admin@example.com</p>
        </div>
        <button className="btn-primary btn-sm btn">
          Cerrar sesión
        </button>
      </div>
    </header>
  )
}