import React, { useState } from 'react';
import Header from './components/Header';
import AdvisoryList from './components/AdvisoryList';
import Filter from './components/Filter';
import Footer from './components/Footer';

const App = () => {
    const [filter, setFilter] = useState('');

    const advisories = [
        {
            destination: "Paris, France",
            description: "Travel safely with the latest guidelines and tips.",
            link: "https://example.com/paris",
            image: "https://www.travelandleisure.com/thmb/Qa7_o8_XVpIVH5vqq7i73UlTSkU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
        },
        {
            destination: "Tokyo, Japan",
            description: "Enjoy the beauty of Japan while staying informed.",
            link: "https://example.com/tokyo",
            image: "https://www.datocms-assets.com/101439/1698369973-tokyo-tower.png?auto=format&fit=crop&h=800&w=1200",
        },
        {
            destination: "New York, USA",
            description: "Discover the latest travel advisories for NYC.",
            link: "https://example.com/nyc",
            image: "https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary-960x640.jpg.webp",
        },
        // Add more advisories as needed
    ];

    const filteredAdvisories = advisories.filter(advisory =>
        advisory.destination.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="container">
                <Filter setFilter={setFilter} />
                <AdvisoryList advisories={filteredAdvisories} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
