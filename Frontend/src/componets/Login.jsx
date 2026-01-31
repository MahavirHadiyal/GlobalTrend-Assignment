import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (data.token) {
      localStorage.setItem('token', data.token)
      window.location.href = '/dashboard'
    } else {
      alert('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-72">

        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

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

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>

        <p className="text-sm text-center mt-3">
          New user? <a href="/register" className="text-blue-600">Register</a>
        </p>

      </form>
    </div>
  )
}

export default Login
