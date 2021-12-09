import React from 'react'

function fruits({pageContext}) {
    // console.log(pageContext)
    return (
        <div>
            <h1>{pageContext.name}</h1>
            <h1>Description</h1>
            <p>{pageContext.desc}</p>
        </div>
    )
}

export default fruits
