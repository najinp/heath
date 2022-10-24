import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NAVLINK = [
    { id: 1, menu: "식기류", link: '/sub01' },
    { id: 2, menu: "탁상 및 주방", link: '/sub02' },
    { id: 3, menu: "장식 및 가구", link: '/sub03' },
    { id: 4, menu: "타일", link: '/sub04' },
    { id: 5, menu: "선물", link: '/sub05' },
    { id: 6, menu: "우리", link: '/sub06' },
]

const MENU = [
    {
        id: 1, menu: "카테고리",
        sub:
            [
                { id: 1, menu: "접시", link: '/' },
                { id: 2, menu: "그릇", link: '/' },
                { id: 3, menu: "머그 & 컵", link: '/' },
                { id: 4, menu: "식기 세트", link: '/' },
                { id: 5, menu: "서빙 볼 및 플래터", link: '/' },
                { id: 6, menu: "꽃병", link: '/' },
                { id: 7, menu: "부속품", link: '/' },
            ]
    },
    {
        id: 2, menu: "컬렉션",
        sub:
            [
                { id: 1, menu: "쿠페", link: '/' },
                { id: 2, menu: "셰 파니세", link: '/' },
                { id: 3, menu: "가장자리", link: '/' },
                { id: 4, menu: "앨라배마 차닌", link: '/' },
            ]
    },
]
const MENU2 = [
    {
        id: 1, menu: "카테고리",
        sub:
            [
                { id: 1, menu: "식기 및 칼", link: '/' },
                { id: 2, menu: "유리 제품", link: '/' },
                { id: 3, menu: "리넨", link: '/' },
                { id: 4, menu: "도마", link: '/' },
                { id: 5, menu: "피복재", link: '/' },
                { id: 6, menu: "요리", link: '/' },
                { id: 7, menu: "팬트리 & 바", link: '/' },
                { id: 8, menu: "식품 보관", link: '/' },
                { id: 9, menu: "재미있고 독특한", link: '/' },
            ]
    },
    {
        id: 2, menu: "컬렉션",
        sub:
            [
                { id: 1, menu: "히스 플랫웨어", link: '/' },
                { id: 2, menu: "데이비드 멜러", link: '/' },
                { id: 3, menu: "블록샵", link: '/' },
                { id: 4, menu: "제이콥 메이", link: '/' },
                { id: 5, menu: "에드워드 월", link: '/' },
                { id: 6, menu: "크레인 조리기구", link: '/' },
                { id: 7, menu: "사사키 토요", link: '/' },
                { id: 8, menu: "천연 유기농", link: '/' },
            ]
    },
]
const MENU3 = [
    {
        id: 1, menu: "카테고리",
        sub:
            [
                { id: 1, menu: "꽃병 및 오브제", link: '/' },
                { id: 2, menu: "양초 및 조명", link: '/' },
                { id: 3, menu: "트레이 및 플래터", link: '/' },
                { id: 4, menu: "베개 및 던지기", link: '/' },
                { id: 5, menu: "바구니 및 보관", link: '/' },
                { id: 6, menu: "미술", link: '/' },
                { id: 7, menu: "웰빙", link: '/' },
                { id: 8, menu: "러그", link: '/' },
                { id: 9, menu: "벽지", link: '/' },
                { id: 10, menu: "가구", link: '/' },
                { id: 11, menu: "서적", link: '/' },
            ]
    },
    {
        id: 2, menu: "컬렉션",
        sub:
            [
                { id: 1, menu: "히스 + 아르텍", link: '/' },
                { id: 2, menu: "히스 클레이 스튜디오", link: '/' },
                { id: 3, menu: "다카야마 히데키", link: '/' },
                { id: 4, menu: "하우스 + 히스", link: '/' },
                { id: 5, menu: "Jacob May의 Nomad 컬렉션", link: '/' },
                { id: 6, menu: "가르자 마르파", link: '/' },
                { id: 7, menu: "그린 그로브 직공", link: '/' },

            ]
    },
]


const MENU4 = [
    {
        id: 1, menu: "타일 ​​컬렉션",
        sub:
            [
                { id: 1, menu: "클래식 필드", link: '/' },
                { id: 2, menu: "이중 유약", link: '/' },
                { id: 3, menu: "차원", link: '/' },
                { id: 4, menu: "스탠 비터스", link: '/' },
                { id: 5, menu: "벽화", link: '/' },
            ]
    }
]


const MENU5 = [
    {
        id: 1, menu: "카테고리",
        sub:
            [
                { id: 1, menu: "꽃병 및 오브제", link: '/' },
                { id: 2, menu: "가방", link: '/' },
                { id: 3, menu: "보석류", link: '/' },
                { id: 4, menu: "양초 및 조명", link: '/' },
                { id: 5, menu: "웰빙", link: '/' },
                { id: 6, menu: "서적", link: '/' },
                { id: 7, menu: "재미있고 독특한", link: '/' },
            ]
    },
    {
        id: 2, menu: "컬렉션",
        sub:
            [
                { id: 1, menu: "히스 클레이 스튜디오", link: '/' },
                { id: 2, menu: "줄리아 터너", link: '/' },
                { id: 3, menu: "커스틴 뮌스터", link: '/' },
                { id: 4, menu: "사이푸아", link: '/' },
                { id: 5, menu: "에드워드 월", link: '/' },
            ]
    },
]
const MENU6 = [
    {
        id: 1, menu: "히스 발견",
        sub:
            [
                { id: 1, menu: "회사 소개", link: '/' },
                { id: 2, menu: "문의하기", link: '/' },
                { id: 3, menu: "우리 사람들", link: '/' },
                { id: 4, menu: "공장 견학", link: '/' },
            ]
    },
    {
        id: 2, menu: "최신",
        sub:
            [
                { id: 1, menu: "신문", link: '/' },
                { id: 2, menu: "뉴스 및 이벤트", link: '/' },
                { id: 3, menu: "누르다", link: '/' },
                { id: 4, menu: "직업", link: '/' },
            ]
    },
    {
        id: 3, menu: "위치",
        sub:
            [
                { id: 1, menu: "소살리토", link: '/' },
                { id: 2, menu: "샌프란시스코", link: '/' },
                { id: 3, menu: "페리 빌딩", link: '/' },
                { id: 4, menu: "로스 앤젤레스", link: '/' },
                { id: 4, menu: "히스 뉴스 가판대", link: '/' },
            ]
    },
]




const Nav = () => {
    return (
        <ul class="main-menu">
            <li class="item">
                <div class="item__name">
                    <NavLink to='/sub01'>식기류</NavLink></div>
                <div class="item__contents">
                    <div class="contents__menu">
                        <ul class="container">
                            <li className='img'>
                                <img src="/heath/assets/img/menus01.jpg" />
                            </li>
                            {
                                MENU.map(menu => {
                                    return (
                                        <li>
                                            <h4>{menu.menu}</h4>
                                            <ul>
                                                {
                                                    menu.sub.map(smenu => {
                                                        return (
                                                            <li>
                                                                {smenu.menu}
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item__name"> <NavLink to='/sub02'>탁상 및 주방</NavLink></div>
                <div class="item__contents">
                    <div class="contents__menu">
                        <ul class="container">
                            <li className='img'>
                                <img src="/heath/assets/img/menus02.jpg" alt="product" />
                            </li>
                            {
                                MENU2.map(menu => {
                                    return (
                                        <li>
                                            <h4>{menu.menu}</h4>
                                            <ul>
                                                {
                                                    menu.sub.map(smenu => {
                                                        return (
                                                            <li>
                                                                {smenu.menu}
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item__name">
                    <NavLink to='/sub03'>장식 및 가구</NavLink></div>
                <div class="item__contents">
                    <div class="contents__menu">
                        <ul class="container">
                            <li className='img'>
                                <img src="/heath/assets/img/menus03.jpg" alt="product" />
                            </li>
                            {
                                MENU3.map(menu => {
                                    return (
                                        <li>
                                            <h4>{menu.menu}</h4>
                                            <ul>
                                                {
                                                    menu.sub.map(smenu => {
                                                        return (
                                                            <li>
                                                                {smenu.menu}
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item__name"><NavLink to='/sub04'>타일</NavLink></div>
                <div class="item__contents">
                    <div class="contents__menu">
                        <ul class="container">
                            <li className='img'>
                                <img src="/heath/assets/img/menus04.jpg" alt="product" />
                            </li>
                            {
                                MENU4.map(menu => {
                                    return (
                                        <li>
                                            <h4>{menu.menu}</h4>
                                            <ul>
                                                {
                                                    menu.sub.map(smenu => {
                                                        return (
                                                            <li>
                                                                {smenu.menu}
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item__name"> <NavLink to='/sub05'>선물</NavLink></div>
                <div class="item__contents">
                    <div class="contents__menu">
                        <ul class="container">
                            <li className='img'>
                                <img src="/heath/assets/img/menus05.jpg" alt="product" />
                            </li>
                            {
                                MENU5.map(menu => {
                                    return (
                                        <li>
                                            <h4>{menu.menu}</h4>
                                            <ul>
                                                {
                                                    menu.sub.map(smenu => {
                                                        return (
                                                            <li>
                                                                {smenu.menu}
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item__name">   <NavLink to='/sub06'>우리</NavLink></div>
                <div class="item__contents">
                    <div class="contents__menu">
                        <ul class="container">
                            <li className='img'>
                                <img src="/heath/assets/img/menus06.jpg" alt="product" />
                            </li>
                            {
                                MENU6.map(menu => {
                                    return (
                                        <li>
                                            <h4>{menu.menu}</h4>
                                            <ul>
                                                {
                                                    menu.sub.map(smenu => {
                                                        return (
                                                            <li>
                                                                {smenu.menu}
                                                            </li>
                                                        )
                                                    })

                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </li>
        </ul>


    )
}

export default Nav