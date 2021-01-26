import React from 'react';
import './searchbar.scss';
import SearchIcon from './imgs/search_icon2.svg';

class SearchBar extends React.Component {
    render() {
        return(
            <div className='searchbar'>
                {/* <form action="" class="search-bar">
	            <input type="search" name="search" pattern=".*\S.*" required />
	            <button class="search-btn" type="submit">
		        <span>Search</span>
	            </button>
                </form> */}
                {/* <form onSubmit="event.preventDefault();" role="search">
                    <label htmlFor="search">Search for stuff</label>
                    <input className="search" type="search" placeholder="Search..." autoFSocus required />
                    <button type="submit">Go</button>    
                </form> */}
                     <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search">
                                <img src={SearchIcon} alt=''/>
                            </i>
                        </button>
                     </div>
            </div>
        );
    }
}

export default SearchBar