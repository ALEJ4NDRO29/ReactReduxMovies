import React from 'react';
import { Card, Button } from "react-bootstrap";


const MoviesList = props => (
        props.movies.results.map((movie, i) => {
            return (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 movie-preview">
                    <div className="card">
                        <Card.Img variant="top" alt={movie.title}  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title className="card-text">{movie.title}</Card.Title>
                            <Card.Text className="card-text">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className="to-bottom btn-block" variant="dark">Visit</Button>
                        </Card.Body>
                    </div>
                </div>
            );
        })
)

export default MoviesList;