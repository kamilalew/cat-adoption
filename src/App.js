import React from 'react';
import SearchBar from './SearchBar.js';
import CatTable from './CatTable.js';
import './App.css';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterText: "",
            likesKids: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            filterText: e.target.value.toLowerCase(),
        })
    }

    handleChange1 = (e) => {
        this.setState({
            likesKids: e.target.checked,
        })
    }


    render() {
        return <div>
            <SearchBar onChangeFilterText = {this.handleChange} checked={this.state.likesKids} onChangeFilterBox = {this.handleChange1} filterText={this.state.filterText}/>
            <div>
               <CatTable kitties={this.props.kitties} loveKids={this.state.likesKids} filterText={this.state.filterText} />
            </div>
        </div>;
    }
}
