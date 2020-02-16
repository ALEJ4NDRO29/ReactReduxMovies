import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

// Cada película que aparece en el home
const MoviePreview = props => (
    <div className="card">
        <Card.Img variant="top" alt={props.movie.title} src={
            props.movie.poster_path ?
            `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
            : '/default-movie.jpg'
        } />
        <Card.Body>
            <Card.Title className="card-text">{props.movie.title}</Card.Title>
            <Card.Text className="card-text">
                {props.movie.overview}
            </Card.Text>
            <Link to={`/movie/${props.movie.id}`} className="to-bottom btn btn-dark btn-block">Visit</Link>
        </Card.Body>
    </div>
);

export default MoviePreview;