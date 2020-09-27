import React from 'react'
import { Mail, Edit, Trash } from 'react-feather'

export default function SuppListsTable(props) {
    const iconSize = 20
    let tableRows = <tr><td colSpan="6" className="text-center">No Data Found</td></tr>
    if(props.lists !== null && props.lists.length !== 0) {
        tableRows = props.lists.map((list, index) => {
            return (
                <tr key={index}>
                    <td>{ list.sr_no }</td>
                    <td>{ list.suppression_list_name }</td>
                    <td>{ list.last_modified_on }</td>
                    <td>{ list.last_modified_by }</td>
                    <td>{ list.records }</td>
                    <td>
                        <nav className="nav actions">
                        <a className="nav-link" href="#"><Mail size={iconSize} /></a>
                        <a className="nav-link" href="#"><Edit size={iconSize} /></a>
                        <a className="nav-link" href="#"><Trash size={iconSize} /></a>
                        </nav>
                    </td>
                </tr>
            )
        })
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Suppression List Name</th>
                    <th>Last Modified On</th>
                    <th>Last Modified By</th>
                    <th>Records</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                   props.isLoading ?
                   <tr><td colSpan="6" className="text-center">Loading Data. Please Wait.</td></tr> :
                   tableRows
               }
            </tbody>
        </table>
    )
}
