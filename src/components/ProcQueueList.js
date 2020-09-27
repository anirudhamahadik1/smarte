import React from 'react'

export default function ProcQueueList(props) {
    let lists = <li className="text-center">No Data Found</li>
    if(props.procQueue !== null && props.procQueue.length !== 0) {
        lists = props.procQueue.map((item, index) => {
            return (
                <li key={index}>
                    <small className="d-block border-top border-bottom py-2 mb-0">{item.created_at}</small>
                    <strong>{item.name}</strong>
                    <div className="row mb-2">
                        <div className="col">
                            <span className="d-block grey">Input Records</span>
                            {item.input_records}
                        </div>
                        <div className="col">
                            <span className="d-block grey">Valid Records</span>
                            {item.valid_records}
                        </div>
                        <div className="col">
                            <span className="d-block grey">Action</span>
                            {item.action}
                        </div>
                        <div className="col">
                            <span className="d-block grey">By</span>
                            {item.created_by}
                        </div>
                        <div className="col">
                            <span className="d-block grey">Lists</span>
                            {item.lists}
                        </div>
                        <div className="col">
                            <span className={"status " + item.status}></span> {item.status}
                        </div>
                    </div>
                </li>
            )
        })
    }

    return (
        <ul className="proc-queue">
            {
                props.isLoading2 ?
                <li className="text-center">Loading Data. Please Wait.</li> :
                lists
            }
        </ul>
    )
}
