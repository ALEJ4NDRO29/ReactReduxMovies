import React, { Component } from "react";
import { MOVIE_DETAILS_LOADING, MOVIE_DETAILS_UNLOAD } from "../../constants/constants";
import { connect } from "react-redux";
import agent from "../../agent";
import Loading from "../common/Loading";

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
        console.log(this.props.match.params.id);
        this.props.onLoad(agent.Movie.details(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        console.log(this.props.movie);
        if (!this.props.movie) {
            return (
                <Loading/>
                // <div className="text-center">
                //     <div className="spinner-border" role="status">
                //         <span className="sr-only">Loading...</span>
                //     </div>
                // </div>
            );
        }

        return (
            <div>
                <h1>
                    {this.props.movie.title}
                </h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);