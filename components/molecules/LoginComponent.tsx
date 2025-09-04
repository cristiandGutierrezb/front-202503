'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginDTO } from "@/interfaces/login"
import { loginScheme } from "@/schemas/login"

import { loginService } from "@/libs/authService"

export default function LoginComponent() {

  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  })
  
  const onSubmit: SubmitHandler<LoginDTO> = (data) => {
    loginService(data)
    .then((info) => {
      localStorage.setItem('token', info.access_token)
    })
    .catch(e => {
      console.error('Error en solicitud');
    })
  }

  const onErrors = () => {
    console.log('Errores', errors);
    
    alert('Informacion incompleta')
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)} className="space-y-4">
      <div>
        <label htmlFor="email" className="font-semibold">
          Introduce el usuario
        </label>
        <input
          {...register("user")}
          type="text"
          id="email"
          className="mt-1 w-full border border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-semibold">
          Introduce la contraseña
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className="mt-1 w-full border border-gray-400 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 rounded-lg transition"
      >
        Continuar
      </button>
    </form>
  )
}
