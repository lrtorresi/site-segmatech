import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import bgImage from "../Images/header-bg.jpg";
import "../css/header.css";
import LogoSegmatech from "../Images/Segmatech_Logo-03-03.png"

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Quem Somos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Serviços
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Clientes
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              {/* <h1 className="responsive-headline">SEGMA<font color="#189980">TECH</font></h1> */}
              <h1>
              <img                
                src={LogoSegmatech}
                alt="Nordic Giant Profile Pic" 
              />
              </h1>
              
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Eliptec
                </a> */}
                {/* <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a> */}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
