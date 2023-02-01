import React, { Component, useState } from "react";
import { Fade, Slide } from "react-reveal";
import "../css/contact.css";
import api from '../Services/api';

const Contact = () => {

  // if (!this.props.data) return null;

  // const name = this.props.data.name;
  // const street = this.props.data.address.street;
  // const city = this.props.data.address.city;
  // const state = this.props.data.address.state;
  // const zip = this.props.data.address.zip;
  // const phone = this.props.data.phone;
  // const message = this.props.data.contactmessage;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [msg, setMsg] = useState('');
  const [assunto, setAssunto] = useState('');
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nome, email, telefone, assunto, msg };
    setLoader(true);
    setIsDisabled(true);

    try {
      await api.post('send', data);
      setNome(""); setEmail(""); setTelefone(""); setAssunto(""); setMsg("");
      setSuccess(true);
    }
    catch (ex) {
      alert('Erro ao enviar e-mail. Tente novamente.')
    }
    setLoader(false);
    setIsDisabled(false);
  }

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>

            </h1>
          </div>

          <div className="ten columns">
            <h2>Agendar uma conversa é o primeiro passo para a transformação digital da sua empresa.</h2>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Nome <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    E-mail <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Telefone</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">
                    Assunto <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    value={assunto}
                    onChange={e => setAssunto(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Mensagem <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                  ></textarea>
                </div>

                <div>
                  {/* <button className="submit" onSubmit={handleSubmit}>Enviar</button> */}

                  <button
                    className="buttonSubmit"
                    onClick={handleSubmit}
                  > Enviar
                  </button>

                  {loader && <img className="loader" alt="" src="images/loader.gif" />}


                  {success &&
                    <div className="message-success">
                      <i className="fa fa-check"></i> Sua mensagem foi enviada com sucesso. Obrigado!
                      <br />
                    </div>
                  }
                </div>
              </fieldset>
            </form>


          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Endereço e Telefone</h4>
              <p className="address">
                {"Segmatech"}
                <br />
                {""} <br />
                {"Rio de Janeiro"}, {"RJ"} {""}
                <br />
                <span>{"21 97918-3681"}</span>
              </p>
            </div>

            {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
          </aside>
        </Slide>
      </div>
    </section>
  );
}


export default Contact;
