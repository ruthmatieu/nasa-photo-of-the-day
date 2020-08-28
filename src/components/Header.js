import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 32px;
    text-transform: uppercase;
    background-color: #CBD5E0;
`;

const NavTextHeader = styled.h1`
    font-family: 'Alfa Slab One', cursive; 
    font-size: 30px;
    margin-left: 40px;
    color: #B7791F;
    letter-spacing: 5px;
`;

const NavText = styled.p`
    font-family: 'Alfa Slab One', cursive; 
    font-size: 30px;
    margin-right: 40px;
    color: #B7791F;
    letter-spacing: 5px;
`;

function Header() {
    return (
        <Nav>
            <NavTextHeader>Nasa</NavTextHeader>
            <NavText>Photo of the Day</NavText>
        </Nav>
    )
}

export default Header;