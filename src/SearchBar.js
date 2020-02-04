import React from "react";


export default class SearchBar extends React.Component {



    render() {


        return(
            <form>
            <input type="text" placeholder="Search..." onChange={this.props.onChangeFilterText} value={this.props.filterText}/>
            <p> <input type="checkbox" onChange={this.props.onChangeFilterBox} value={this.props.likesKids}/> Only show kitties that like kids</p>
        </form>
    )
    }
}