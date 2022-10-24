import React from 'react'
import { Link } from 'react-router-dom'
import IconA from './svg/IconA'


const FEAT = [
    {
        id: 1, category: "식기류", title: "캘리포니아 소살리토에서 수제 도자기 식기 및 액세서리", link: "/", src: "/assets/img/card01.jpg"
    },
    { id: 2, category: "타일", title: "캘리포니아 샌프란시스코에서 제작된 아이코닉 오리지널 히스 타일", link: "/", src: "/assets/img/card02.jpg" },
    { id: 3, category: "도자기", title: "특별히 디자인된 도자기와 생활용품", link: "/", src: "/assets/img/card03.jpg" }
]

const Category = () => {
    return (
        <section className='Category'>
            <div className="inner">  <span className='cali'>IN CALIFORNIA SINCE 1948</span>
                <h2>우리가 먹고, 삶을 연결하는 방식을 위한 좋은 디자인</h2></div>
            <div className="feature">  {
                FEAT.map(sec => {
                    return (
                        <figure>
                            <div className="font">
                                <strong>{sec.category}</strong>
                                <div className="title">{sec.title}</div>
                            </div>
                            <div className="box">
                                <img src={process.env.PUBLIC_URL + sec.src} alt={sec.title} />

                                <div className="gogo">
                                    <span className='go_feat'>FEATURING</span>
                                    <span className='go_down'>{sec.category} <Link to={'/'}><IconA /></Link></span>
                                </div>
                            </div>
                        </figure>
                    )
                })
            }
            </div>

        </section >
    )
}

export default Category;