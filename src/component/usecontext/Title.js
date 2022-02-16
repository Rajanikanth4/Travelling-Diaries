import React,{createContext} from 'react'
import Name from './Name'
const name=createContext()
export default function Title() {
    return (
        <div>
            <name.Provider value={"k.Rajanikanth"}>
                <Name />
            </name.Provider>
        </div>
    )
}

export {name}
