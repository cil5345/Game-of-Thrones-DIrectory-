import React, { Component } from 'react'
import "./style.css";


export class Search extends Component {
    render() {
        return (
            <>
            <input type="text" id="searchBox" placeholder = "Search"  />
            </>
        )
    }
}

export default Search
