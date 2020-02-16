import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import agent from '../../agent';
import { HOME_LOADING, HOME_UNLOAD } from "../../constants/constants";
import MoviesList from "../movie/MoviesList";
import './style.css';
import Loading from "../common/Loading";
import SearchForm from "./SearchForm";


const mapStateToProps = state => ({
    movies: state.home.movies
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: HOME_LOADING, payload }),
    onUnload: () =>
        dispatch({ type: HOME_UNLOAD })
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.props.onLoad(agent.Movie.disover());
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        // ICONO DE CARGA (VISIBLE ANTES DE OBTENER RESPUESTA DE API)
        if (!this.props.movies) {
            return <Loading />;
        }

        return (
            <Container className="black">
                <SearchForm />
                <div className="row movie-container">
                    {/* COMPROBAR SI HAY PELÍCULAS */}
                    {this.props.movies.results.length === 0 ?
                        <span>No results</span>
                        :
                        <MoviesList className="black" movies={this.props.movies} />
                    }
                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);