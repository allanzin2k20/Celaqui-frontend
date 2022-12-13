import Header from "../components/Header"
import Footer from "../components/Footer"
import MainContainer from "../components/MainContainer"

const Create = () => {

    const createCell = async (cell) => {
        const formcell = new FormData()
        formcell.append("marca", cell.marca)
        formcell.append("nome", cell.nome)
        formcell.append("preco", cell.preco)
        formcell.append("ano", cell.ano)
        formcell.append("img", cell.img)
        const response = await fetch('http://localhost/pj3/Celaqui-backend/cell/create', {
            method: 'POST',
            body: formcell
        })
        const result = await response.json()
        console.log(result.success.message)
        console.log(result.cell)
    }


  const handleSubmit = (event) => {
    event.preventDefault()
    const { marca, nome, preco, ano, img } = event.target
    createCell({
        marca: marca.value,
        nome: nome.value,
        preco: preco.value,
        ano: ano.value,
        img: img.value
    })
  }

  return (
    <>
        <Header />
        <MainContainer>
            <h1>inserir Cell</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <p>marca: <input type="text" name=""/></p>
                <p>nome: <input type="text" name="nome"/></p>
                <p>preco: <input type="text" name="preco"/></p>
                <p>ano: <input type="text" name="ano"/></p>
                <p>img: <input type="text" name="img"/></p>
                <input type="submit" value="Send" />
            </form>
        </MainContainer>
        <Footer />
    </>
  )
}

export default Create