import React from 'react'

const Sub06 = ({ content }) => {
    const num = 5;
    return (
        <section className='Subpage'>
            <div className="nav__bar">
                <div className="inner">
                    홈으로 / {content[num].name}
                </div>

            </div>
            <div className="inner">
                <div className="subintro">
                    <div className="sitxt">
                        <h2>{content[num].tit}</h2>
                        <p>{content[num].des}</p>
                    </div>
                    <div className="sipic">
                        <img src='heath/assets/img/subt06.jpg' alt="" />
                    </div>
                </div>

                <div className="fontb">
                    <h2>{content[num].tit}</h2>
                    <p>{content[num].des}</p>
                </div>
            </div>
        </section>
    )
}

export default Sub06