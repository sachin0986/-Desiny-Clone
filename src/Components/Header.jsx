import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <Nav>
            <Logo>
                <Link to="/"><img src="/images/logo.svg" alt="desing+" /></Link>
            </Logo>
            <NavMenu>
                <Link to="/home"><img src="/images/home-icon.svg" alt="home_icon" /><span>HOME</span></Link>
                <Link to="/home"><img src="/images/search-icon.svg" alt="home_icon" /><span>SEARCH</span></Link>
                <Link to="/home"><img src="/images/watchlist-icon.svg" alt="home_icon" /><span>WATCHLIST</span></Link>
                <Link to="/home"><img src="/images/original-icon.svg" alt="home_icon" /><span>ORIGINALS</span></Link>
                <Link to="/home"><img src="/images/movie-icon.svg" alt="home_icon" /><span>MOVIES</span></Link>
                <Link to="/home"><img src="/images/series-icon.svg" alt="home_icon" /><span>SERIES</span></Link>
            </NavMenu>
            <LoginButton>LOGIN</LoginButton>
        </Nav>
    )
}

const Nav = styled.nav
`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    z-index: 3;
    letter-spacing: 16px;

`;


const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-sixe: 0;
    display: inline-block
    img {
        display: block;
        width: 100%
    }
`;
const LoginButton = styled.a`
    background-color: rgb(0 0 0 0.6);
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 8px 16px;
    font-size: 16px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: black;
    }

`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: relative;

    img {
      height: 22px;
      min-width: 22px;
      width: 22px;
      margin-right: 4px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &::before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        left: 0px;
        right: 0px;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
      }
    }

    &:hover span::before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1;
    }
  }
`;


export default Header;