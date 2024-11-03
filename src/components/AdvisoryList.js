import React from 'react';
import AdvisoryCard from './AdvisoryCard';

const AdvisoryList = ({ advisories }) => {
    return (
        <div className="row">
            {advisories.map((advisory) => (
                <AdvisoryCard key={advisory.destination} advisory={advisory} />
            ))}
        </div>
    );
};

export default AdvisoryList;
