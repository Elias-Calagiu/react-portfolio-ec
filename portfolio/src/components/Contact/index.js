import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact info">
                <h3>Contact info:</h3>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/elias-calagiu-18407518a/">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        Linkedin</a></li>
                    <li> <a href="https://github.com/Elias-Calagiu">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        GitHub</a></li>
                    <li> <a href="eliasc81@gmail.com">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        eliasc81@gmail.com</a></li>
                    <li>Phone Number: 425.518.9662</li>
                </ul>
            </div>
        )
    }
}