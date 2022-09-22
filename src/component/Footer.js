import React from 'react'
import { Link } from 'react-router-dom'
import Logoh from './svg/Logoh'


const FTF = [
    { id: 1, title: "레지스트리 찾아보기", description: "등록자의 성함을 입력하세요.", },
    { id: 2, content: "뉴스레터 구독", description: "이메일 주소를 입력하세요.", },
]

const UL = [
    { id: 1, name: "가게" },

]

const ULF = [
    {}
]


const Footer = () => {
    return (
        <section className="Footer">

            <div className="inner">
                <div className="f_left"> <Logoh />
                    <span className='since'>SINCE<br />1984</span>
                </div>
                <div className="f_right">
                    <i className='xi-instagram'></i>
                    <i className='xi-facebook'></i>
                    <i className='xi-pinterest-p'></i>
                    <i className='xi-twitter'></i>
                    <span className='copyright'>&#169; 2022 Heath Ceramics. All Rights Reserved</span>
                </div>
            </div>

        </section >
    )
}

export default Footer