import React from "react";
import './Search.css';

function Search (){

    return(
        <div className='search'>
            <h1 className = "positon">
                Search Contents
            </h1>
        <div class="box">
            <div class="container-1">
                
                <input type="search" id="search" placeholder="검색어를 입력하세요..." />
            </div>
        </div>
    </div>

    );



}

export default Search;