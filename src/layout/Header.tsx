import { BuildingStorefrontIcon, UserCircleIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function Header (): React.ReactElement {
  function swapTheme (event: React.BaseSyntheticEvent): void {
    const input = event.target as HTMLInputElement

    document.documentElement.dataset.theme = input.checked
      ? 'light'
      : 'dark'
  }

  return (
    <header className="flex items-center justify-between bg-neutral px-10 py-4 text-neutral-content shadow">
      <div className="flex items-center gap-1">
        <BuildingStorefrontIcon className="h-6 w-6" />
        <p className="text-2xl font-bold tracking-tight">
          Peluquería "Jeanelly Adames"
        </p>
      </div>
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line tailwindcss/classnames-order */}
        <label className="swap swap-rotate btn-square btn-sm btn btn-neutral">
          <input type="checkbox" onInput={swapTheme} />
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
