import React from 'react';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias ${this.state.name}, nos pondremos en contacto contigo.`);
    }

    render() {
        return (
            <section className="contact-container">
                
                <div className="contact-info">
                    <h3>¡Bienvenido a Paxo!</h3>
                    <p>
                        En <strong>Paxo</strong>, nos especializamos en reparaciones, 
                        remodelaciones y construcción con los más altos estándares de calidad. 
                        ¡Confía en nuestros expertos para transformar tus espacios!
                    </p>
                    <p>💡 Servicios de electricidad, plomería y más.</p>
                    <p>⚒️ Construcción y remodelaciones a medida.</p>
                    <p>📞 ¡Contáctanos y lleva tu proyecto al siguiente nivel!</p>
                </div>

                {/* Sección del Formulario */}
                <div className="contact-form">
                    <section id="contact" className="scontact"></section>
                    <h2>Contáctanos</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            value={this.state.message}
                            onChange={this.handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="animated-button">Enviar</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactForm;
