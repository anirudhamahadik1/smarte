import React from 'react'
import { Crosshair, UserMinus } from 'react-feather'

export default function NavTabs(props) {
    const iconSize = 20

    return (
        <>
            <ul className="nav nav-tabs mt-2 mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="target-lists-tab" data-toggle="tab" href="#target-lists" role="tab" aria-controls="target-lists" aria-selected="true">
                    <Crosshair size={iconSize} /> Target Lists
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="suppression-lists-tab" data-toggle="tab" href="#suppression-lists" role="tab" aria-controls="suppression-lists" aria-selected="false">
                    <UserMinus size={iconSize} /> Suppression Lists
                    </a>
                </li>
            </ul>
            { props.children }
        </>
    )
}
