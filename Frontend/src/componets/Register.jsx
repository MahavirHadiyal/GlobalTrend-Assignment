import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() // ✅ hook for navigation

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
        'https://global-trend-assignment.vercel.app/api/auth/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      )

      const data = await res.json()

      if (res.ok) {
        alert('Registered successfully')
        navigate('/') // ✅ use navigate instead of window.location.href
      } else {
        alert(data.message || 'Registration failed')
      }
    } catch (err) {
      console.error(err)
      alert('Server error. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-72">
        <h2 className="text-xl font-bold text-center mb-4">Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account? <a href="/" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  )
}

export default Register
