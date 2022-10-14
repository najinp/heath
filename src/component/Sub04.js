
import React from 'react'

const Sub04 = ({ content }) => {
    const num = 3;

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
                        <img src='assets/img/subt04.jpg' alt="" />
                    </div>
                </div>
                <div className="tilesz">
                    <figure>
                        <img src='assets/img/tilec01.jpg' alt="" />
                        <div className="tiletxt">
                            <h3>클래식 필드</h3>
                            <p>다양한 레이아웃 가능성이 있는 모양과 크기의 광범위한 컬렉션입니다.</p>
                        </div>
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Sub04