import React, { Component } from 'react';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };

        this.services = [
            "/remodelacion-casas.jpg", // Ruta de imagen
            "/remodelacion-oficinas.jpg",
            "/electricidad.jpg",
            "/plomeria.jpg",
            "/carpinteria.jpg",
            "/aire-acondicionado.jpg",
            "/vigilancia.jpg",
            "/obras-civiles.jpg",
            "/pintura.jpg",
            "/drywall.jpg",
            "/seguridad.jpg"
        ];
    }

    componentDidMount() {
        // Cambia de imagen cada 3 segundos (3000 ms)
        this.interval = setInterval(this.nextService, 3000);
    }

    componentWillUnmount() {
        // Limpiar el intervalo cuando el componente se desmonte
        clearInterval(this.interval);
    }

    nextService = () => {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % this.services.length
        }));
    };

    render() {
        return (
            <section id="services" className="services">
                <h2>Nuestros Servicios</h2>
                <div className="service-slider">
                    <img 
                        src={this.services[this.state.currentIndex]} 
                        alt={`Servicio ${this.state.currentIndex + 1}`} 
                        className="service-image"
                    />
                </div>
            </section>
        );
    }
}

export default Services;
