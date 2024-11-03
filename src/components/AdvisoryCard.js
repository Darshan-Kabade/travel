import React from 'react';

const AdvisoryCard = ({ advisory }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={advisory.image} className="card-img-top" alt={advisory.destination} />
                <div className="card-body">
                    <h5 className="card-title">{advisory.destination}</h5>
                    <p className="card-text">{advisory.description}</p>
                    <a href={advisory.link} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default AdvisoryCard;
