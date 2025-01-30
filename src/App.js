import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import SuccessCases from './components/SuccessCases';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactForm: false
        };
    }

    handleContactClick = () => {
        this.setState({ showContactForm: true });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Hero onContactClick={this.handleContactClick} />
                <Services />
                <SuccessCases />
                <Chatbot />
                <ContactForm />
                <Reviews />
                <Footer />
                
            </div>
        );
    }
}

export default App;
