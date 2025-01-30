import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.reviews = [
            { id: 1, name: 'Juan Pérez', comment: 'Excelente servicio, muy profesionales.' },
            { id: 2, name: 'María Gómez', comment: 'Quedé muy satisfecha con la remodelación de mi casa.' },
            { id: 3, name: 'Carlos López', comment: 'Gran trabajo en la instalación del aire acondicionado.' },
            { id: 4, name: 'Norlys Castañeda', comment: 'Gran trabajo en la remodelacion de la sede de la oficina .' },
            { id: 5, name: 'Edicson Jimes', comment: 'Excelente trabajo en la pintura de mi apartamento , lo recomiendo.' }
        ];
    }

    render() {
        return (
            <section id="reviews" className="reviews">
                <h2 >Reseñas de Clientes</h2>
                <div className="reviews-list">
                    {this.reviews.map(review => (
                        <div key={review.id} className="review">
                            <h3>{review.name}</h3>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Reviews;