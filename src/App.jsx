import { React, useState } from 'react'

import Header from './components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { db } from './db'
import Comentario from './components/Comentario'

function App() {
  const [data, setData] = useState(db)
  
  

  return (
    <>
   <Header/>
<main>

    <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
    <img src="./assets/Logo.png" alt="logo imperial" className="w-[150px] mx-auto"></img>
    <p className="py-12 text-white">
  
    {data.map (()=>{
        
        <Comentario 

        price ={100}
        />
      })}
    </p>
    <div className="flex justify-center gap-4">
      <a href="#" className="bg-red-600 py-2 px-12 rounded-3xl text-white hover:bg-red-700 transition-all duration-300 flex items-center cursor-pointer">Únete ahora</a>
    </div>
  </div>
</main>
  

    </>
  )
}

export default App





 
