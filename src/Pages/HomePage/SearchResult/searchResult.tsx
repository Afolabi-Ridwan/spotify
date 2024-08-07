// src/SearchResult.tsx
import React, { useState } from 'react';
import './searchResult.css';
import { propType } from '../../types';

const SearchResult: React.FC<propType> = ({albums, error, artistName}) => {


  return (
    <div className="searchResult" >
      <h1> {artistName}</h1>
      
      {error && <p>{error}</p>}
      <div className="albums">
        {albums.map(album => (
          <div key={album.id} className="album">
            <img src={album.images[0].url} alt={album.name} />
            <p>{album.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
