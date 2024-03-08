import React, { useState, useEffect } from 'react';
export default function Trending() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchTrending() {
            try {
                const response = await fetch(
                    `https://api.giphy.com/v1/gifs/trending?api_key=qgDuVF2oQiWg2IRGLQZmEoTVOXmhdfpc&limit=1`
                );
                const data = await response.json();
                setResults(data.data);
            } catch (error) {
                console.error('Error fetching trending GIFs:', error);
            }
        }
        fetchTrending();
    }, []);

    return (
        <div>
            <h2>Trending GIFs</h2>
            {results.map((gif) => (
                <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
        </div>
    );
}