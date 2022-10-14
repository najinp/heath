import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NAVLINK = [
    { id: 1, menu: "식기류", link: '/sub01' },
    { id: 2, menu: "탁상 및 주방", link: '/sub02' },
    { id: 3, menu: "장식 및 가구", link: '/sub03' },
    { id: 4, menu: "타일", link: '/sub04' },
    { id: 4, menu: "선물", link: '/sub05' },
]


const Nav = () => {
    return (
        <nav className="Gnb">
            <ul>
                {
                    NAVLINK.map((it, idx) => {
                        return (
                            <li key={it.id}>
                                <NavLink to={it.link}>{it.menu}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav