import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import agent from '../../agent';
import { HOME_LOADING } from "../../constants/constants";
import MoviesList from "../movie/MoviesList";
import './style.css';
import Loading from "../common/Loading";


const mapStateToProps = state => ({
    movies: state.home.movies
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: HOME_LOADING, payload })
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.props.onLoad(agent.Movie.disover());
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    render() {
        if (!this.props.movies) {
            return <Loading/>;
        }

        return (
            <Container className="black">
                <div className="row movie-container">
                    <MoviesList className="black" movies={this.props.movies}/>
                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);