import React, { Component } from "react";
import { MOVIE_DETAILS_LOADING, MOVIE_DETAILS_UNLOAD } from "../../constants/constants";
import { connect } from "react-redux";
import agent from "../../agent";
import Loading from "../common/Loading";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";

import './style.css';

// Página de detalles para una película

const mapStateToProps = state => ({
    movie: state.movie.movie
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: MOVIE_DETAILS_LOADING, payload }),
    onUnload: () =>
        dispatch({ type: MOVIE_DETAILS_UNLOAD })
});

class MovieDetails extends Component {

    constructor(props) {
        super(props);

        // Solicitar película por id pasada en la URL
        this.props.onLoad(agent.Movie.details(this.props.match.params.id));
    }

    componentWillUnmount() {
        // ELiminar datos al salir
        this.props.onUnload();
    }

    render() {
        // Icono de carga hasta que responda la API
        if (!this.props.movie) {
            return (
                <Loading />
            );
        }

        const movie = this.props.movie;
        const rate = movie.vote_average * 10;
        
        // MOSTRAR GÉNERO
        let genre = '';
        movie.genres.forEach(element => {
            genre += element.name + ' | ';
        });
        genre = genre.substring(0, genre.length - 2);

        return (
            <Container className="black">
                <h1>
                    {movie.title}
                </h1>
                <h6 className="bot-spacing">
                    — {movie.original_title}
                </h6>
                <Row>
                    {/* PORTADA */}
                    <Col xl="4" lg="4" md="4" sm="12" xs="12">
                        {/* CONDICIONAL PARA UTILIZAR UNA IMAGEN POR DEFECTO SI EXISTE */}
                        <img className="img-thumbnail" alt={movie.title} src={
                                movie.poster_path ?
                                `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : '/default-movie.jpg'
                            } />
                    </Col>

                    <Col >
                        <Row>
                            {/* RATE */}
                            <Col xl="10" lg="10" md="10" sm="12" xs="12">
                                <ProgressBar label={`${rate}%`} variant="success" now={rate} />
                            </Col>

                            {/* RELEASE */}
                            <Col className="bot-spacing" xl="2" lg="2" md="2" sm="12" xs="12">
                                {movie.release_date}
                            </Col>

                            {/* GÉNERO */}
                            <Col className="bot-spacing" xl="12" lg="12" md="12" sm="12" xs="12">
                                {genre}
                            </Col>

                            {/* WEBSITE (Mostrar solo si existe) */}
                            {movie.homepage ? 
                                <Col className="bot-spacing" xl="12" lg="12" md="12" sm="12" xs="12">
                                    <a rel="noopener noreferrer" target="_blank" href={movie.homepage}>Web Oficial</a>
                                </Col>
                            : null}

                            {/* INFORMACIÓN */}
                            <Col xl="12" lg="12" md="12" sm="12" xs="12">
                                {movie.overview}
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);