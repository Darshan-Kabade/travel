import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search Destinations..."
                className="form-control"
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
};

export default Filter;
