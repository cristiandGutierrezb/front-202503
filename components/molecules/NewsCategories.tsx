import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Para limpieza",
    img: "https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Almacenamiento para el hogar",
    img: "https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Decoración del hogar",
    img: "https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ropa de cama",
    img: "https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function NewsCategories() {
  return (
    <section className="shadow-md p-3 border border-slate-100 gap-3 bg-white max-w-[400px]">
      <h2 className="text-2xl font-bold mb-4">
        Compra los esenciales para tu hogar
      </h2>
      <div className="flex flex-wrap w-full gap-1 justify-around">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            <div className="w-full h-32 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 text-center text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className="text-blue-600 hover:underline mt-4 block text-sm"
      >
        Descubre más en Hogar
      </Link>
    </section>
  );
}