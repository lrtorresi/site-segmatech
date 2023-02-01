import React, { Component } from "react";
import "../css/whatsapp.css";
import {FaWhatsapp} from "react-icons/fa";


class Whatsapp extends Component {
    render() {

        return (
            // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
            <a href="https://wa.me/5521979183681?text=Ol%C3%A1%2C+Segmatech.+Tudo+bem%3F%21" className="float" target="_blank">
                <FaWhatsapp className="wpp-btn"/>
            </a>
        )
    }
}

export default Whatsapp;