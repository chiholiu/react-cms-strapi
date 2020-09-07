import React from 'react';

export const Website = ({ data }) => {
    const { title, subtitle, website } = data;

    const websites = website.map(tile => {
        return (
            <a key={tile.id} href={tile.link} target="_blank" rel="noopener noreferrer">
                <img src={'http://localhost:1337' + tile.tiles.url} alt={tile.caption}/>
            </a>
        );
    });

    return (
        <section>
            <header>
                <h5>{title}</h5>
                <p>{subtitle}</p>
            </header>
            <div>
                {websites}
            </div>
        </section>
    );
};