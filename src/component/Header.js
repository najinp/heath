import { useEffect, useRef, useState } from 'react';
import Logo from './svg/Logo';


const NAVLINK = [
    { id: 1, menu: "식기류", link: '/' },
    { id: 2, menu: "탁상 및 주방", link: '/' },
    { id: 3, menu: "장식 및 가구", link: '/' },
    { id: 4, menu: "타일", link: '/' },
    { id: 4, menu: "선물", link: '/' },
]

const Header = () => {
    const [TG, setTG] = useState([false, false]);

    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <a href="/">
                        <Logo /></a>
                </h1>
                <nav className="Gnb">
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menu}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="top_service">
                    <div className={'lang ' + (TG[0] ? 'on' : '')}>
                        <strong onClick={() => setTG([!TG[0], false])}>
                            KOR <i className="xi-angle-down arrow"></i></strong>
                        <ul className="lang_box">
                            <li><a href="#!">KOR</a></li>
                            <li><a href="#!">ENG</a></li>
                        </ul>
                    </div>
                    <div className={'top_search ' + (TG[1] ? 'on' : '')}>
                        <strong onClick={() => setTG([false, !TG[1]])}><i className="xi-search"></i></strong>
                        <div className="search_box">
                            <form action="#!">
                                <input type="text" placeholder="검색어를 입력하세요" required />
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;