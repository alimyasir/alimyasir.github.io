import React from 'react';
import '../App.css';
import Nav from "../components/layouts/nav";

function Home() {
    return (

        <div className="App">
            <Nav />
            <h2 className="text-4xl font-bold leading-7 text-gray-800 sm:text-7xl sm:truncate">
                Hi I'm Rizwan Nasir</h2>
        </div>
    )
}

export default Home;
