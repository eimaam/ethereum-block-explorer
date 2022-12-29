import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const PrivateRoutes = () => {
    const { navigate, user } = useAuth()
  return (
    user ? <Outlet /> : navigate('login')
  )
}
