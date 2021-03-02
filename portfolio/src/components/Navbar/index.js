import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Elias Calagiu</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">About <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact Info</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
            </ul>
        </div>
    </div>
        </div>
    )
}
