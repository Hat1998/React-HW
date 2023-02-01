import React from "react";
import movies from "../App";
 
export interface TvShowsSchema {
  title: string;
  image: string;
  year: number;
  rating: number;
  isAvailable: boolean;
}

function Movies(props: TvShowsSchema) {
  return (
    <div><h1 className="h1">TV shows...</h1>
     <div className="divTvshows">
        
      {props.tvShows.map((TvShowe) => (
        <div className="TvShows-card">
        <div key={TvShowe.title}>
          <img src={TvShowe.image}  />

          <h3>{TvShowe.title}</h3>

           <p>{TvShowe.year}</p>
           <p>{TvShowe.isAvailable && TvShowe.rating}</p>
           <p>{TvShowe.isAvailable && <p className="available">Available</p>}</p>
           <p>{!TvShowe.isAvailable && <p className="not-available">will be available soon</p>}</p>

        </div>
        </div>
      ))}
    </div>
    </div>
   );
}

export default Movies;
