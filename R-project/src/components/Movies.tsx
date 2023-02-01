import React from "react";
import movies from "../App";
 
export interface moviesSchema {
  title: string;
  image: string;
  year: number;
  rating: number;
  isAvailable: boolean;
}

function Movies(props: moviesSchema) {
  return (
    <div><h1 className="h1">Movies...</h1>
     <div className="divMovies">
        
      {props.movies.map((movie) => (
        <div className="movies-card">
        <div key={movie.title}>
          <img src={movie.image}  />

          <h3>{movie.title}</h3>

           <p>{movie.year}</p>
           <p>{movie.isAvailable && movie.rating}</p>
           <p>{movie.isAvailable && <p className="available">Available</p>}</p>
           <p>{!movie.isAvailable && <p className=" not-available"> will be available soon</p>}</p>

        </div>
        </div>
      ))}
    </div>
    </div>
   );
}

export default Movies;
