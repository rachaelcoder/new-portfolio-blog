import React from "react";
import Link from "next/link";
import styled from '@emotion/styled';

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="nav-wrapper" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>
                    <img className="logo-image" src="https://i.postimg.cc/NFT2FFYr/coderality-white.png" alt="mylogo" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="uk-navbar-right">
        <NavigationStyled>
          <ul className="uk-navbar-nav nav-links">
              <li>
                <a className="uk-link-reset" href="/blog">
                    Blog
                </a>
              </li>
                <li>
                  <a className="uk-link-reset" href={`/category/about`}>
                    About
                </a>  
                </li>
                <li>
                  <a className="uk-link-reset" href={`/category/portfolio`}>
                    Portfolio
                </a>  
                </li>
          </ul>
          </NavigationStyled>
        </div> 
      </nav>
    </div>
  );
};

const NavigationStyled = styled.div`
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: auto;
        display: flex;
        li {
            justify-content: flex-end;
            margin-left: 10px;
            display: inline-block;
            position: relative;
            padding-bottom: 3px;
            margin-right: 10px;
            line-height: 2;
        }
        li:last-child {
          margin-right: 0;
        }
        
        li:after {
            content: '';
            display: block;
            margin: auto;
            height: 3px;
            width: 0px;
            background: transparent;
            transition: width .5s ease, background-color .5s ease;
        }
        li:hover:after {
            width: 100%;
            background: #FFFFFF;
        }
    }
`



export default Nav;