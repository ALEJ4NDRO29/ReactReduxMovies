import React, { Component } from "react";
import { connect } from "react-redux";
import { HOME_LOADING } from "../../constants";

import agent from '../../agent';

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
        console.log('Implements');

        this.props.onLoad(agent.Movie.disover());
    }

    render() {
        console.log('props', this.props.movies);
        if (!this.props.movies) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {this.props.movies.results.map((movie, i) => {
                    return (
                        <div key={i}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/><br></br>
                            {movie.title}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);