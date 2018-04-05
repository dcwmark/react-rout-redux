/* src/Components/Comments/index.js */

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchComments } from '../../States/Actions/comments';

class Comments extends Component {

    componentWillMount = () => {
        this.props.fetchComments();
    }

    render() {
        console.log(this.props.comments);
        return (
            <div>
                <h2>Comments</h2>
                <ul className="list-group list-group-flush">
                    { this.props.comments.length > 0 && this.props.comments.map( each => (
                        <li className="list-group-item" key={each.id}>
                            {each.name}
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { comments: state.comments };
};

const mapDisptachToProps = {
    fetchComments
};

export default connect(mapStateToProps, mapDisptachToProps)(Comments);
