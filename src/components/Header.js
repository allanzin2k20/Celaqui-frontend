import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderNav>
       <div className='container'>
       <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
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
    margin: 90 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
`


export default Header