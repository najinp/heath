import { useEffect, useRef, useState } from 'react';
import Logo from './svg/Logo';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';



const Header = () => {
    const [TG, setTG] = useState([false, false]);

    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <Link to='/'><Logo /></Link>
                </h1>
               <Nav/>
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
            </div >
        </header >

    )
}

export default Header;