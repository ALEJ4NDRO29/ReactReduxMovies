import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import './style.css';
import { MOVIES_SEARCH } from "../../constants/constants";
import { connect } from "react-redux";
import agent from "../../agent";


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onSearch: payload =>
        dispatch({ type: MOVIES_SEARCH, payload })
});


class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onSubmit(ev) {
        ev.preventDefault();
        if(this.state.search.trim() !== '') {
            this.props.onSearch(agent.Movie.search(this.state.search))
        }
    }

    render() {
        return (
            <Form className="search-form" onSubmit={this.onSubmit}>
                <InputGroup>
                    <Form.Control 
                        className="search-input" 
                        type="text" 
                        placeholder="Search..." 
                        name="search"
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <InputGroup.Prepend>
                        <button className="btn btn-light btn-search">
                            <span role="img" aria-label="search">🔍</span>
                        </button>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
