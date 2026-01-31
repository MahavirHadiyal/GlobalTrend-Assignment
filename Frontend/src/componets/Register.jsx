import React, { useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    alert('Registered successfully')
    window.location.href = '/'
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
          Already have account? <a href="/" className="text-blue-600">Login</a>
        </p>

      </form>
    </div>
  )
}

export default Register
