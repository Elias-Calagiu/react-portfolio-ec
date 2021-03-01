import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact info">
                <ul className="contact-list">
                    <li> <a href="https://www.linkedin.com/in/elias-calagiu/">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a></li>
                    <li> <a href="https://github.com/Elias-Calagiu">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a></li>
                    <li> <a href="eliasc81@gmail.com">
                        <i className="fa fa-envelope" aria-hidden="true" />
                    </a></li>
                    <li>Phone Number: 425.518.9662</li>
                </ul>
            </div>
        )
    }
}
