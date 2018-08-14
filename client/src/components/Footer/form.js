import React, { Component } from "react";
import axios from 'axios';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class ContactForm extends Component {
  
    onSubmit(event){
        event.preventDefault();
        
        const apiBaseUrl = "http://localhost:9000/api/v2/contact/email";        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const contact = event.target.contact.value;
        const message = event.target.message.value;

        axios({
            url: apiBaseUrl,
            method: 'post',
            data: {
                name : name,
                email : email,
                phone : phone,
                contact : contact,
                message : message
            }
        })
        .then( () => {
            console.log('enviado');
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Nombre Completo</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="John Doe" name="name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Email</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="johndoe@email.com" name="email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Número de teléfono</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="+507 0000 0000" name="phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">¿Cómo prefiere ser contactado?</label>
                        </div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" name="contact" />
                                        Email
                                </label>
                                    <label className="radio">
                                        <input type="radio" name="contact" />
                                        teléfono
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Comentarios</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" placeholder="¿Comó te podemos ayudar?" name="message"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <button className="button background-red has-text-white">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;