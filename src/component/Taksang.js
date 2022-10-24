import React from 'react'
import { NavLink } from 'react-router-dom'

const MENU2 = [
  {
    id: 1,
    menu: '카테고리',
    sub: [
      { id: 1, menu: '식기 및 칼', link: '/' },
      { id: 2, menu: '유리 제품', link: '/' },
      { id: 3, menu: '리넨', link: '/' },
      { id: 4, menu: '도마', link: '/' },
      { id: 5, menu: '피복재', link: '/' },
      { id: 6, menu: '요리', link: '/' },
      { id: 7, menu: '팬트리 & 바', link: '/' },
      { id: 8, menu: '식품 보관', link: '/' },
      { id: 9, menu: '재미있고 독특한', link: '/' },
    ],
  },
  {
    id: 2,
    menu: '컬렉션',
    sub: [
      { id: 1, menu: '히스 플랫웨어', link: '/' },
      { id: 2, menu: '데이비드 멜러', link: '/' },
      { id: 3, menu: '블록샵', link: '/' },
      { id: 4, menu: '제이콥 메이', link: '/' },
      { id: 5, menu: '에드워드 월', link: '/' },
      { id: 6, menu: '크레인 조리기구', link: '/' },
      { id: 7, menu: '사사키 토요', link: '/' },
      { id: 8, menu: '천연 유기농', link: '/' },
    ],
  },
]
const Taksang = () => {
  return (
    <>
      {MENU2.map((menu) => {
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

export default Taksang
