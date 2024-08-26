
"use client"
import React,{useState} from 'react'
import Dashboard from '@/components/dashboard'
import Header from '@/components/header'
function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
     <Header onSearch={setSearchQuery} /> {/* Pass setSearchQuery to Header */}
      <div className="sm:max-w-screen max-w-screen-2xl md:px-8 space-y-32 px-4 mx-auto w-full pb-24">
        <Dashboard searchQuery={searchQuery} /> {/* Pass searchQuery to Dashboard */}
      </div>
    </>
  )
}

export default LandingPage