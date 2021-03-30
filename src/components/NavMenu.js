import React, { Component } from 'react'

export class NavMenu extends Component {
    render() {
        return (
            <div className="NavMenu">
                <nav>
                    <a>Home</a>
                    <a>Story</a>
                    <a>Portfolio</a>
                    <a>Contacts</a>
                </nav>
            </div>
        )
    }
}

export default NavMenu
