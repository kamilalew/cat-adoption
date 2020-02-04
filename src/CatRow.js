import React from "react";

export default class CatRow extends React.Component {
    render() {
        var name = this.props.kitty.likesKids ?
            this.props.kitty.name : <span style={{color: 'red'}}> {this.props.kitty.name} </span>;
            console.log(name, "CatRow");
        return <tr className='catRows'> 
                    <td className="cat_name">{name}</td> 
                    <td className="cat_age">{this.props.kitty.age}</td>
                    <td><img className="cat_image" src={this.props.kitty.image} alt='cat'/></td>
                </tr>;
    }
}