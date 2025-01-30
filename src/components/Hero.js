import React from 'react';

class Hero extends React.Component {
    handleContactClick = () => {
        const contactForm = document.getElementById("contact-form");
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" }); // Scroll suave
        }
    };

    render() {
        return (
            <section className="hero">
                <img src="/hero.jpg" alt="hero" /> 
                <div className="hero-content">
                    <h1>Transformamos tus espacios</h1>
                    <p>Expertos en remodelaciones, electricidad, plomería y más.</p>
                    <button onClick={this.handleContactClick}>Contáctanos</button>
                </div>
            </section>
            
        );
    }
}

export default Hero;
