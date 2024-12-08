import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <link href="/css/tailwind.css" rel="stylesheet" />
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
    <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
    <form action="/submit" method="POST">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="login"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Login
      </button>
    </form>
  </div>
</body>
</html>

    </>
  )
}
export default App


