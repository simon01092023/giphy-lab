import React, { useState, useEffect } from 'react';

export default function Emoji() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchEmojis() {
            try {
                const response = await fetch(
                    `https://api.giphy.com/v2/emoji?api_key=qgDuVF2oQiWg2IRGLQZmEoTVOXmhdfpc&limit=1`
                );
                const data = await response.json();
                setResults(data.data);
            } catch (error) {
                console.error('Error fetching emojis:', error);
            }
        }
        fetchEmojis();
    }, []);

    return (
        <div>
            <h2>GIPHY Emojis</h2>
            {results.map((emoji) => (
                <img key={emoji.id} src={emoji.images.fixed_height.url} alt={emoji.title} />
            ))}
        </div>
    );
}
