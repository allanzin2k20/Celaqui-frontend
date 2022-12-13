
const CardCells = ({cell, children, users, setUsers}) => {

  const {card, avatar, box, userName, text, buttonLink} = style
  const { id, marca, nome, preco, ano, img} = cell

    const deleteCell = async (id) => {
        const response = await fetch(`http://localhost/pj3/Celaqui-backend/cell/delete`,{
            method: 'DELETE',
            body: JSON.stringify({id: id}),
        })
        const result = await response.json()
        if(result?.success){
            const usersFiltered = users.filter((user) => {return user.id !== id})
            setUsers(usersFiltered)
        }
    }

    

  return (
    <div style={card}>
        
            <img src={img} style={avatar} alt={nome}/>
    
        <div style={box}>
                <h1 style={userName}>{nome}</h1>
                <p style={text}>{children}</p>
                <p>{marca}</p>
                <p>{preco}</p>
                <p>{ano}</p>
                <button style={buttonLink} onClick={() => deleteCell(id)}> delete </button>
        </div>
    </div>
  )
}

const style = {
    avatar: {
        background: '#CCC',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px 0 0'
    },
    card: {
        width: '300px',
        background: '#EEE',
        display: 'flex',
        padding: '10px',
        borderRadius: '10px',
        margin: '15px'
    },
    userName: {
        margin: 0,
        fontSize: '0.9rem',
        color: "#000"
    },
    text: {
        margin: '0 0 10px 0',
        color: "#333"
    },
    box: {
        width: '235px'
    },
    buttonLink: {
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px',
        marginRight: '10px'       
    }

}

export default CardCells