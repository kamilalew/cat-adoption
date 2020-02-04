import React from "react";
import kitties from './database.js';
import CatCategoryRow from './CatCategoryRow.js';
import CatRow from './CatRow.js';

export default class CatTable extends React.Component {


    render() {

        var rows = [];

        var isCategory = null;

        kitties.forEach(kitty=>{

            if (kitty.category !==isCategory) {
                rows.push(<CatCategoryRow category={kitty.category} key = {kitty.category} />)
            }

            isCategory = kitty.category;


            let show = true;

            if (this.props.filterText.length>0) {
                if (kitty.name.toLowerCase().indexOf(this.props.filterText) === -1) {
                    show=false
                }
            }

            if (this.props.loveKids===true) {
                if(kitty.likesKids===false) {
                    show=false
                }
            }
            if (show === true) {
                rows.push(<CatRow kitty={kitty} key={kitty.name}/>)
            }

        });

        console.log(this.props.kitties);

        return(
            <table>
                <thead>
                <tr>
                    <th className="head">Name</th>
                    <th className="head">Age</th>
                </tr>
                </thead>

                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}