import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MoviesList = props => (
        props.movies.results.map((movie, i) => {
            return (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 movie-preview">
                    <div className="card">
                        <Card.Img variant="top" alt={movie.title}  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title className="card-text">{movie.title}</Card.Title>
                            <Card.Text className="card-text">
                                {movie.overview}
                            </Card.Text>
                            <Link to={`/movie/${movie.id}`} className="to-bottom btn btn-dark btn-block">Visit</Link>
                        </Card.Body>
                    </div>
                </div>
            );
        })
)

export default MoviesList;