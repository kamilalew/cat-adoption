import React from "react";

export default class CatCategoryRow extends React.Component {
    render() {
        return <tr> <th className="col" colSpan="2">{this.props.category}</th></tr>;
    }
}
