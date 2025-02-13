import { React, useState } from 'react'


import Header from './components/Header'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { db } from './data/db'
import Comentario from './components/Comentario'
import ProfileCards from './components/ProfileCards'
import ProfileSection from './components/ProfileSection'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState(db)
  
  

  return (
    <>
    
    <Header/>
   <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((comentario)=>(
             <Comentario
             comentario={comentario}
             />
          ))}
           
            </div>
            </main>

            
    <Footer/>

    </>
  )
}

export default App





 
