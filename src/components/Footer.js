import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 32px;
    text-transform: uppercase;
    background-color: #CBD5E0;
`;

function Footer(props) {

    return (
        <FooterStyle>
            <p>copyright: {props.copyright}</p>
        </FooterStyle>
    )
}

export default Footer;