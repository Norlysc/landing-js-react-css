import React, { useState } from 'react';

const SuccessCases = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const cases = [
        { id: 1, title: 'Remodelación de Casa', description: 'Transformamos una casa antigua en un hogar moderno y funcional.', image: 'case1.jpg' },
        { id: 2, title: 'Oficina Corporativa', description: 'Diseñamos y construimos una oficina corporativa con los más altos estándares.', image: 'case2.jpg' },
        { id: 3, title: 'Instalación de Aire Acondicionado', description: 'Instalamos sistemas de aire acondicionado en un edificio de apartamentos.', image: 'case3.jpg' },
        { id: 4, title: 'Arreglo de Plomería', description: 'Hicimos una reparación de plomería.', image: 'case4.jpg' },
        { id: 5, title: 'Pintura', description: 'Se pintó apartamento completo y se reparó pared.', image: 'case5.jpg' }
    ];

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="success-cases" className="success-cases">
            <h2>Casos de Éxito</h2>
            <div className="cases-list">
                {cases.map(caseItem => (
                    <div key={caseItem.id} className="case">
                        <img 
                            src={caseItem.image} 
                            alt={caseItem.title} 
                            className="case-image" 
                            onClick={() => handleImageClick(caseItem.image)}
                        />
                        <h3>{caseItem.title}</h3>
                        <p>{caseItem.description}</p>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Ampliado" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default SuccessCases;
