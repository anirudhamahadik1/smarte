import React from 'react'
import { List, FilePlus, FileMinus } from 'react-feather'

export default function ListActions() {
    const iconSize = 20
    const style = {
        display : "inline-block",
        paddingLeft: "10px"
    }

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                List Actions
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#"><List size={iconSize} /> <span style={style}>Create Suppression List</span></a>
                <a className="dropdown-item" href="#"><FilePlus size={iconSize} /> <span style={style}>Add Suppresson Email</span></a>
                <a className="dropdown-item" href="#"><FileMinus size={iconSize} /> <span style={style}>Remove Suprression Email</span></a>
            </div>
        </div>
    )
}
