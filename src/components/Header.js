import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderNav>
       <div className='container'>
        <h2>CelAqui</h2>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/create'>create</NavLink></li>
        </ul>
      </div>
    </HeaderNav>
  )
}

const HeaderNav = styled.header`
    background: #000;
    height: 50px;
    color: #fff;
    & h2 {
      margin: 0;
    }
    & .container {
      width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & ul {
        display:flex;
      & li{
        font-size: 18x;
         list-style-type:none;
         margin:0 0 0 20px
      }
    }
  }
`


export default Header