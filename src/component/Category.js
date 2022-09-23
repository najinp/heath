import React from 'react'




const FEAT = [
    {
        id: 1, category: "식기류", title: "캘리포니아 소살리토에서 수제 도자기 식기 및 액세서리.", link: "/", src: "/assets/img/card01.jpg"
    },
    { id: 2, category: "식기류", title: "캘리포니아 소살리토에서 수제 도자기 식기 및 액세서리.", link: "/", src: "/assets/img/card02.jpg" },
    { id: 3, category: "식기류", title: "캘리포니아 소살리토에서 수제 도자기 식기 및 액세서리.", link: "/", src: "/assets/img/card03.jpg" }
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
                                    <span className='go_down'>{sec.category} </span>
                                </div>

                            </div>


                        </figure>
                    )
                })
            }
            </div>

        </section>
    )
}

export default Category;