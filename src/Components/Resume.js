import React, { Component } from "react";
import Slide from "react-reveal";
import "../css/resume.css";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Automação</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div key={education.school}>
                    <h3>A VIDA PASSA MUITO RÁPIDO PARA VOCÊ PERDER TEMPO COM PLANILHAS INEFICIENTES E SISTEMAS COMPLICADOS</h3>
                    <p className="info">
                      <span>&bull;</span>
                      <em className="date">Módulo de gestão on-line de qualquer lugar, PC, tablet ou celular</em>
                    </p>

                    <p className="info">
                      <span>&bull;</span>
                      <em className="date">Garçom Virtual - QR Code individual por mesa, Cardápio Web e pagamento on-line</em>
                    </p>

                    <p className="info">
                      <span>&bull;</span>
                      <em className="date">PDV (NFC-e) On-line e Offline</em>
                    </p>

                    <p className="info">
                      <span>&bull;</span>
                      <em className="date">Sistema de Delivery</em>
                    </p>

                    <p className="info">
                      <span>&bull;</span>
                      <em className="date">Sistema Multi empresas</em>
                    </p>
                    {/* <p>{education.description}</p> */}
                  </div>
                  <a href="https://wa.me/5521979183681?text=Ol%C3%A1%2C+Segmatech.+Tudo+bem%3F%21" className="myButton" target="_blank">Saiba +</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Consultoria</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <h3>Quer modernizar a sua empresa e não sabe por onde começar?</h3>
              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">Terceirize a gestão da sua infraestrutura de TI conosco e pare de se preocupar com falhas da rede, lentidão dos sistemas e segurança dos dados.</em>
              </p>

              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">Você vai deixar os problemas técnicos no passado com as soluções de TI para empresas que vamos integrar na sua organização.</em>
              </p>
              <a href="https://wa.me/5521979183681?text=Ol%C3%A1%2C+Segmatech.+Tudo+bem%3F%21" className="myButton" target="_blank">Saiba +</a>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Equipamentos</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <h3>Tenha previsibilidade de demandas, manutenção preventiva e redução de custos em até 30%.</h3>
              <p className="info">
                <span>&bull;</span> <em className="date">Prolongue a vida útil do seu hardware e reduza custos.</em>
              </p>

              <p className="info">
                <span>&bull;</span> <em className="date">A solução exata em locação de hardware e software.</em>
              </p>

              <p className="info">
                <span>&bull;</span> <em className="date">Uma equipe especializada à disposição, é combustível para seu negócio.</em>
              </p>
              <a href="https://wa.me/5521979183681?text=Ol%C3%A1%2C+Segmatech.+Tudo+bem%3F%21" className="myButton" target="_blank">Saiba +</a>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
