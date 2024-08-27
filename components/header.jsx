"use client"
import React,{useState} from 'react'
import{Search,CircleUserRound, BellDot } from 'lucide-react'
import { Input } from './ui/input'
function Header({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);  
  };

  return (
    <nav className="w-full shadow-xl fixed top-0 bg-white p-2 z-50">
      <div className="flex items-center justify-between px-3 ">
        

        <h1>
          Home &gt; Dashboard
        </h1>

        <div className="relative hidden min-w-80 md:block" >
          <Search className="h-5 w-5 left-2 top-2.5 text-gray-500 cursor-pointer absolute"/>
          <Input placeholder="Search" value={searchTerm} 
            onChange={handleSearchChange}  className="pl-9 w-full" />
        </div>

        <div className="flex items-center  gap-x-3">
          <BellDot className="h-6 w-6 text-gray-500 cursor-pointer"/>  
          <CircleUserRound className="h-6 w-6 text-gray-500 cursor-pointer"/>
          <span className=" font-semibold text-gray-900">Devang</span>
        </div>
      </div>
    </nav>
  )
}

export default Header
