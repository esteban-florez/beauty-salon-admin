import { BuildingStorefrontIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between bg-neutral px-20 py-4 text-neutral-content shadow">
      <div className="flex items-center gap-1">
        <BuildingStorefrontIcon className="h-6 w-6" />
        <p className="text-2xl font-bold tracking-tight">
          Peluquería "Jeanelly Adames"
        </p>
      </div>
      <div className="flex items-center gap-4">
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
