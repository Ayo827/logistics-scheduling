import React from 'react'; 
import "./progress.css"
export default function Progress({data, assetname, client, company, width}){
    return(
        
        <div className="progress">
            <div className="progress_container">
                <div className="progress_col" style={{width: width + "%"}}>
                    <p>{assetname}</p>
                    <p>{client}</p>
                    <p>{company}</p>
                </div>
            </div>
        </div>
    )
}