import React from 'react';

import MoviePreview from './MoviePreview';

const MoviesList = props => (
    props.movies.results.map((movie, i) => {
        return (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 movie-preview">
                {/* MOSTRAR PREVIEW DE LA PELÍCULA */}
                <MoviePreview movie={movie}/>
            </div>
        );
    })
);

export default MoviesList;