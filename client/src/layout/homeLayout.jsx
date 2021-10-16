import React from 'react'

//compo
import Navbar from "../Component/Navbar"

const homeLayout = (props) => {
    return (
        <div>
             <div className="container mx-auto px-4 lg:px-20 ">
                 <Navbar/>
                 {props.children}</div>
        </div>
    )
}

export default homeLayout;
