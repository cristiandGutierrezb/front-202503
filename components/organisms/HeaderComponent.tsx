import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

export default function HeaderComponent() {
  return (
    <header className="bg-[#131921] text-white text-sm">
      {/* Sección Superior */}
      <div className="flex items-center justify-between px-4 py-2 max-w-[1500px] mx-auto">
        {/* Logo y Ubicación */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">amazon</div>
          <div className="flex items-center text-xs leading-tight">
            <MdLocationOn className="text-xl mr-1" />
            <div className="flex flex-col">
              <span className="text-gray-300">Enviar a</span>
              <span className="font-bold">Colombia</span>
            </div>
          </div>
        </div>

        {/* Barra de Búsqueda */}
        <div className="flex flex-1 max-w-[800px] mx-4">
          <select className="bg-gray-100 text-black text-xs px-2 py-2 rounded-l-md border-r border-gray-300">
            <option>Todos</option>
          </select>
          <input
            type="text"
            placeholder="Buscar en Amazon"
            className="flex-1 px-3 py-2 text-black outline-none bg-white"
          />
          <button className="bg-[#febd69] px-3 flex items-center justify-center rounded-r-md">
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Idioma, Cuenta, Pedidos, Carrito */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <img
              src="https://flagcdn.com/us.svg"
              alt="us-flag"
              className="w-4 h-4"
            />
            <span>ES</span>
            <IoIosArrowDown className="text-xs" />
          </div>
          <div className="leading-tight">
            <p className="text-gray-300">Hola, Identifícate</p>
            <p className="font-bold">Cuenta y Listas</p>
          </div>
          <div className="leading-tight">
            <p className="text-gray-300">Devoluciones</p>
            <p className="font-bold">y pedidos</p>
          </div>
          <div className="flex items-center">
            <FaShoppingCart className="text-2xl" />
            <span className="ml-1 font-bold">Carrito</span>
          </div>
        </div>
      </div>

      {/* Sección Menú */}
      <nav className="bg-[#232f3e] text-white text-sm">
        <div className="max-w-[1500px] mx-auto flex items-center gap-4 px-4 py-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaBars />
            <span className="font-bold">Todo</span>
          </div>
          <span className="hover:underline cursor-pointer">Prime</span>
          <span className="hover:underline cursor-pointer">Prime Video</span>
          <span className="hover:underline cursor-pointer">Ofertas del Día</span>
          <span className="hover:underline cursor-pointer">Listas</span>
          <span className="hover:underline cursor-pointer">Servicio al Cliente</span>
          <span className="hover:underline cursor-pointer">Tarjetas de Regalo</span>
          <span className="hover:underline cursor-pointer">Vender</span>
          <span className="ml-auto text-xs text-gray-300">
            Prime entrega gratis desde EE. UU.
          </span>
        </div>
      </nav>
    </header>
  )
}
