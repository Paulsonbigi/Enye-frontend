import React, { useState } from 'react'
import { Input } from "reactstrap"

const PostFIlter = (props) => {
    
    return (
        <div>
            <div className="input-group">
                <input type="text" 
                    className="form-control"  
                    value={props.search}
                    type="text"
                    onChange={(e) => props.setSearch(e.target.value)}
                    placeholder={props.placeholder}/>
            </div>
        </div>
    )
}

export default PostFIlter