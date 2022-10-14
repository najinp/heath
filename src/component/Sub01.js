import React from 'react'
import { Link } from 'react-router-dom';
import Habs from './Hab';
import Logoh from './svg/Logoh';



const Sub01 = ({ content }) => {
    const num = 0;
    return (
        <section className='Subpage'>
            <div className="nav__bar">
                <div className="inner">
                    <Link to='/'>홈으로 </Link> / {content[num].name}
                </div>
            </div>

            <div className="inner">
                <div className="subintro">
                    <div className="sitxt">
                        <span>{content[num].name}</span>
                        <h2>{content[num].tit}</h2>
                        <p>{content[num].des}</p>
                    </div>
                    <div className="sipic">
                        <img src='assets/img/subt01.jpg' alt="" />
                    </div>
                </div>
            </div>
            <div className="subtab">
                <div className="subtab__inner">
                    <Habs />
                </div>
            </div>

        </section>
    )
}

export default Sub01