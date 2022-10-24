import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import IconA from './svg/IconA'

const NAVLINK = [
    { id: 1, menu: "식기류", link: '/sub01' },
    { id: 2, menu: "탁상 및 주방", link: '/sub02' },
    { id: 3, menu: "장식 및 가구", link: '/sub03' },
    { id: 4, menu: "타일", link: '/sub04' },
    { id: 5, menu: "선물", link: '/sub05' },
    { id: 6, menu: "우리", link: '/sub06' },
]

const TopFooter = () => {
    return (
        <section className='TopFooter'>
            <div className="inner">
                <div className="tfleft">
                    <h5>뉴스레터 구독하기</h5>
                    <input placeholder='이메일 주소를 입력하세요'></input>
                    <IconA />
                </div>
                <div className="tfright">
                    <ul>
                        <h5>가게</h5>
                        {NAVLINK.map((it, idx) => {
                            return (
                                <li key={it.id}><Link to={it.link}>{it.menu}</Link></li>
                            )
                        })}
                    </ul>
                    <ul>
                        <h5>고객 서비스</h5>
                        <li>문의하기</li>
                        <li>일반 FAQ</li>
                        <li>배송 및 반품</li>
                        <li>개인 정보 정책</li>
                        <li>서비스 약관</li>
                        <li>접근성 선언문</li>
                    </ul>
                    <ul>
                        <h5>회사</h5>
                        <li>신문</li>
                        <li>회사 소개</li>
                        <li>뉴스 및 이벤트</li>
                        <li>무역</li>
                        <li>직업</li>
                        <li>히스 기브스</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TopFooter