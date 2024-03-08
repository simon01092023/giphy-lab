import React, { useState } from 'react';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=qgDuVF2oQiWg2IRGLQZmEoTVOXmhdfpc&q=${encodeURIComponent(searchQuery)}&limit=25`
            );
            const data = await response.json();
            setResults(data.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    return (
        <div className="Search">
            <h2>Search GIFs</h2>
            <div className="input-field">
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter search query..."
                />
                <button className="submit-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="gif-list">
                {results.map((gif) => (
                    <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
                ))}
            </div>
        </div>
    );
}
