import React,{useContext} from 'react'
import {name} from './Title'
export default function Name() {
    const user=useContext(name)
    return (
        <div>
            <h5 style={{textAlign:"center"}}><kbd>{user}</kbd></h5>
        </div>
    )
}

