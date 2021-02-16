import React, { Component } from 'react'

export class NavMenu extends Component {
    render() {
        return (
            <div className="NavMenu">
                <nav>
                    <a>Главная</a>
                    <a>Рассказ</a>
                    <a>Портфолио</a>
                    <a>Контакты</a>
                </nav>
            </div>
        )
    }
}

export default NavMenu
