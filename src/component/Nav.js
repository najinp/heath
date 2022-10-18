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
                            <li>

                                <h4>카테고리</h4>
                                <ul>
                                    <li>접시</li>
                                    <li>그릇</li>
                                    <li>머그 & 컵</li>
                                    <li>식기 세트</li>
                                    <li>서빙 볼 및 플래터</li>
                                    <li>꽃병</li>
                                    <li>부속품</li>
                                </ul>
                            </li>
                            <li>
                                <h4>컬렉션</h4>
                                <ul>
                                    <li>쿠페</li>
                                    <li>셰 파니세</li>
                                    <li>가장자리</li>
                                    <li>앨라배마 차닌</li>
                                </ul>
                            </li>
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
                            <li>

                                <h4>카테고리</h4>
                                <ul>
                                    <li>식기 및 칼</li>
                                    <li>유리 제품</li>
                                    <li>리넨 </li>
                                    <li>도마</li>
                                    <li>피복재</li>
                                    <li>요리</li>
                                    <li>팬트리 & 바</li>
                                    <li>식품 보관</li>
                                    <li>재미있고 독특한</li>
                                </ul>
                            </li>
                            <li>
                                <h4>컬렉션</h4>
                                <ul>
                                    <li>히스 플랫웨어</li>
                                    <li>데이비드 멜러</li>
                                    <li>블록샵</li>
                                    <li>제이콥 메이</li>
                                    <li>에드워드 월</li>
                                    <li>크레인 조리기구</li>
                                    <li>사사키 토요</li>
                                    <li>천연 유기농</li>
                                </ul>
                            </li>
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
                            <li>

                                <h4>카테고리</h4>
                                <ul>
                                    <li>꽃병 및 오브제</li>
                                    <li>양초 및 조명</li>
                                    <li>트레이 및 플래터</li>
                                    <li>베개 및 던지기</li>
                                    <li>바구니 및 보관</li>
                                    <li>미술</li>
                                    <li>웰빙</li>
                                    <li>러그</li>
                                    <li>벽지</li>
                                    <li>가구</li>
                                    <li>서적</li>

                                </ul>
                            </li>
                            <li>
                                <h4>컬렉션</h4>
                                <ul>
                                    <li>히스 + 아르텍</li>
                                    <li>히스 클레이 스튜디오</li>
                                    <li>다카야마 히데키</li>
                                    <li>하우스 + 히스</li>
                                    <li>Jacob May의 Nomad 컬렉션</li>
                                    <li>가르자 마르파</li>
                                    <li>그린 그로브 직공</li>
                                </ul>
                            </li>
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
                            <li>
                                <h4> 타일 ​​컬렉션</h4>
                                <ul>
                                    <li>클래식 필드</li>
                                    <li>이중 유약</li>
                                    <li>차원</li>
                                    <li>스탠 비터스</li>
                                    <li>벽화</li>

                                </ul>
                            </li>

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
                            <li>
                                <h4>카테고리</h4>
                                <ul>
                                    <li>꽃병 및 오브제</li>
                                    <li>가방</li>
                                    <li>보석류</li>
                                    <li>양초 및 조명</li>
                                    <li>웰빙</li>
                                    <li>서적</li>
                                    <li>재미있고 독특한</li>
                                </ul>
                            </li>
                            <li>
                                <h4>컬렉션</h4>
                                <ul>
                                    <li>히스 클레이 스튜디오</li>
                                    <li>줄리아 터너</li>
                                    <li>커스틴 뮌스터</li>
                                    <li>사이푸아</li>
                                    <li>에드워드 월</li>
                                </ul>
                            </li>
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
                            <li>
                                <h4>히스 발견</h4>
                                <ul>
                                    <li>회사 소개</li>
                                    <li>문의하기</li>
                                    <li>우리 사람들</li>
                                    <li>공장 견학</li>
                                </ul>
                            </li>
                            <li>
                                <h4>최신</h4>
                                <ul>
                                    <li>신문</li>
                                    <li>뉴스 및 이벤트</li>
                                    <li>누르다</li>
                                    <li>직업</li>
                                </ul>
                            </li>
                            <li>
                                <h4>위치</h4>
                                <ul> <li>소살리토</li>
                                    <li>샌프란시스코</li>
                                    <li>페리 빌딩</li>
                                    <li>로스 앤젤레스</li>
                                    <li>히스 뉴스 가판대</li></ul>

                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>


    )
}

export default Nav