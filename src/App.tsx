import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavBar } from './ui/layouts/sidebar.layout'
import { SearchBar } from './ui/layouts/header.layout'
import { Dashboard } from './ui/layouts/dashboard.layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <NavBar />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <SearchBar />
          <Dashboard />
        </div>
      </div>
    </div>

  )
}

export default App
