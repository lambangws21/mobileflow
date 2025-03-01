import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface MenuItem {
  label: string
  href: string
}

interface UserProfileCardProps {
  avatar: string
  name: string
  email: string
  phone?: string
  menuItems?: MenuItem[]
}

const defaultMenuItems: MenuItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Logout', href: '/logout' },
]

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  avatar,
  name,
  email,
  phone,
  menuItems = defaultMenuItems,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="w-80 mx-auto my-5 border border-gray-200 rounded-lg shadow-sm overflow-hidden h-auto"
    >
      <div className="bg-gray-100 p-5 text-center">
        <Image
        width={96}
        height={97}
          src={avatar}
          alt={`${name}'s avatar`}
          className=" rounded-full mx-auto object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600">Email: {email}</p>
        {phone && <p className="text-sm text-gray-600">Telepon: {phone}</p>}
      </div>
      <div className="bg-gray-50 border-t border-gray-100 flex justify-around p-3">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} legacyBehavior>
            <a className="text-sm text-gray-700 hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition-colors duration-200">
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default UserProfileCard
