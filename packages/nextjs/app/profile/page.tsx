'use client'

import { useState } from 'react'
import { User, Mail, Bell, Shield, LogOut } from 'lucide-react'

export default function ProfilePage() {
  const [nickname, setNickname] = useState('santivillarley')
  const [isEditing, setIsEditing] = useState(false)
  const email = 'santivillarley1010@gmail.com'

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Aquí iría la lógica para guardar el nuevo nickname en el backend
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>

      <div className="bg-base-200 p-6 rounded-box shadow-lg">
        <div className="flex items-center mb-6">
          <div className="avatar placeholder mr-4">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-3xl">{nickname[0].toUpperCase()}</span>
            </div>
          </div>
          <div>
            {isEditing ? (
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="input input-bordered mr-2"
                />
                <button type="submit" className="btn btn-primary">Guardar</button>
              </form>
            ) : (
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold mr-2">{nickname}</h2>
                <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-ghost">
                  Editar
                </button>
              </div>
            )}
            <p className="text-base-content/70">{email}</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="space-y-4">
          <div className="flex items-center">
            <User className="mr-2" />
            <span>Información de la cuenta</span>
            <button className="btn btn-sm btn-ghost ml-auto">Editar</button>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" />
            <span>Preferencias de correo</span>
            <button className="btn btn-sm btn-ghost ml-auto">Configurar</button>
          </div>
          <div className="flex items-center">
            <Bell className="mr-2" />
            <span>Notificaciones</span>
            <button className="btn btn-sm btn-ghost ml-auto">Gestionar</button>
          </div>
          <div className="flex items-center">
            <Shield className="mr-2" />
            <span>Seguridad</span>
            <button className="btn btn-sm btn-ghost ml-auto">Revisar</button>
          </div>
        </div>

        <div className="divider"></div>

        <button className="btn btn-outline btn-error w-full">
          <LogOut className="mr-2" />
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

