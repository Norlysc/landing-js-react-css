import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
           
                <div className="footer-logo">
                <img src="/logoPaxo-removebg-preview.png" alt="Logo Paxo" className="footer-logo" />
                    <div className="qr-code">
                        <img src="/QR.png" alt="Escanea para chatear en WhatsApp" />
                        <p>¡Chatea con nosotros!</p>
                    </div>
                </div>

                {/* Sección de información */}
                <div className="footer-info">
                    <h3>Remodelaciones y Construcciones</h3>
                    <p>📍 Dirección: Av. Principal, Caracas, Venezuela</p>
                    <p>📞 Teléfono: +58 412-1234567</p>
                    <p>📧 Email: contacto@remodelaciones.com</p>
                </div>

                {/* Sección de enlaces y redes sociales */}
                <div className="footer-links">
                    <ul>
                        <li><a href="#privacy">Política de Privacidad</a></li>
                        <li><a href="#terms">Términos de Servicio</a></li>
                    </ul>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://wa.me/584121234567" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Remodelaciones y Construcciones. Todos los derechos reservados.</p>
            </div>

            <div className="footer-logo">
            <img src="/logo-color universidad.png" alt="logo-uni" className="logo-img" /> 
            <p><strong>Facultad:</strong> Ingeniería de Computación</p>
                <p><strong>Profesor:</strong> Yerson Gonzalez</p>
                <p><strong>Nombre:</strong> Norlys Castañeda</p>
            <p><strong>Cédula:</strong> 20.597.586</p>
            </div>
        </footer>
    );
};

export default Footer;
