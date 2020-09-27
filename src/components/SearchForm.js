import React from 'react'
import  { Search } from 'react-feather'

export default function SearchForm(props) {
    return (
        <form method="GET" onSubmit={props.handleSearch} className="search-form">
            <div className="input-group">
                <label htmlFor="inputSearch" className="sr-only">Search</label>
                <input type="search" name="q" id="inputSearch" className="form-control" placeholder="Search" defaultValue={props.search} onChange={props.handleSearchChange} required />
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="submit" id="button-addon2"><Search size={16} /></button>
                </div>
            </div>
        </form>
    )
}
