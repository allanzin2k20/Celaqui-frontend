import Header from "../components/Header"
import Footer from "../components/Footer"
import {useEffect, useState} from 'react'
import CardCell from "../components/CardCell"
const Home = () => {
  const [cells, setCells] = useState([])

  useEffect(() => {
    requestCells()
  }, [])

  const requestCells = async () => {
    const response = await fetch(`http://localhost/pj3/Celaqui-backend/cell/list`)
    const result = await response.json()
    setCells(result.data)
  }


  return (
    <>
      <Header />
      <main>
        <div className="container">
            <h1>Home Cell</h1>

            <p>Lista de celulares Disponíveis  </p>

            {
          cells.length === 0
          ? <p>Nenhum usuário</p>
          : cells.map((cell) =>  
            (
              <CardCell setCells={setCells} cells={cells} key={cell.id} cell={cell}/>
            )
          )
        }

            
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Home