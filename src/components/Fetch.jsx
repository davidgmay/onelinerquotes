import React, { useState, useEffect } from 'react'


function Fetch() {

    const [joke, setJoke] = useState()
    function getJoke(info) {

        fetch(`https://excuser-three.vercel.app/v1/excuse/${info}/`)
            .then((response) => response.json())
            .then((response) => setJoke(response[0].excuse))
            .catch((error) => `${error}`)

    }


    return (

        <div>

            <h1 className="title">One-liner Quotes</h1>

            {joke ? <h2 className="heading">{joke}</h2> : null}

            <h3>Need a laugh? I've got a joke for you.</h3>
            <button className="btn" onClick={() => getJoke("funny")}>Click Here</button>
            <hr className="hr" />

            <h3>Developers love a good one liner right?</h3>
            <button className="btn" onClick={() => getJoke("developers")}>Click Here</button>
            <hr className="hr" />

            <h3>Ever had a friend that had unbelievable stories? They made these quotes.</h3>
            <button className="btn" onClick={() => getJoke("unbelievable")}>Click Here</button>
            <hr className="hr" />





        </div>
    )
}

export default Fetch