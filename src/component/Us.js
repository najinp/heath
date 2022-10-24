import React from 'react'
import { NavLink } from 'react-router-dom'

const MENU6 = [
  {
    id: 1,
    menu: '히스 발견',
    sub: [
      { id: 1, menu: '회사 소개', link: '/' },
      { id: 2, menu: '문의하기', link: '/' },
      { id: 3, menu: '우리 사람들', link: '/' },
      { id: 4, menu: '공장 견학', link: '/' },
    ],
  },
  {
    id: 2,
    menu: '최신',
    sub: [
      { id: 1, menu: '신문', link: '/' },
      { id: 2, menu: '뉴스 및 이벤트', link: '/' },
      { id: 3, menu: '누르다', link: '/' },
      { id: 4, menu: '직업', link: '/' },
    ],
  },
  {
    id: 3,
    menu: '위치',
    sub: [
      { id: 1, menu: '소살리토', link: '/' },
      { id: 2, menu: '샌프란시스코', link: '/' },
      { id: 3, menu: '페리 빌딩', link: '/' },
      { id: 4, menu: '로스 앤젤레스', link: '/' },
      { id: 4, menu: '히스 뉴스 가판대', link: '/' },
    ],
  },
]

const Us = () => {
  return (
    <>
      {MENU6.map((menu) => {
        return (
          <li>
            <h4>{menu.menu}</h4>
            <ul>
              {menu.sub.map((smenu) => {
                return <li>{smenu.menu}</li>
              })}
            </ul>
          </li>
        )
      })}
    </>
  )
}

export default Us
