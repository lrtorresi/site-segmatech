import React, { Component } from "react";
import Fade from "react-reveal";
import profilepic from "../Images/user.jpg"


class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    // const profilepic = "images/" + this.props.data.image;    
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic" 
              />
            </div>
            <div className="nine columns main-col">
              <h2>Quem Somos</h2>

              <p>A Segmatech é uma empresa há mais de 20 anos no mercado, atuando em serviços e consultoria de TI.</p>

              <p>Nosso objetivo é simplificar a gestão e controle do seu negócio com soluções praticas e eficientes.</p>

              <p>Somos representantes da Eliptec, empresa desenvolvedora de sistemas práticos e de qualidade para gestão completa do seu negócio, com emissão de cupom fiscal, Nfe, Síntegra, SPED, TEF, a partir de tecnologias inovadoras e diferenciadas.</p>

              <p>Nosso diferencial é a qualidade e atendimento do suporte técnico, sempre disponível nos momentos  mais necessários.</p>

              <p>Estamos prontos para ajudar seu negócio a crescer!</p>
              <div className="row">
                {/* <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div> */}
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Alguma imagem
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
