import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)

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

      // Show backend message directly
      alert(data.message)

      // Redirect only if registration successful
      if (data.message === "User registered successfully") {
        window.location.href = '/'
      }

    } catch (err) {
      console.error(err)
      alert('Server error. Please try again later.')
    } finally {
      setLoading(false)
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

        <button
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{' '}
          <a href="/" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  )
}

export default Register
