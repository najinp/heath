import React from 'react'
import { NavLink } from 'react-router-dom'

const MENU5 = [
  {
    id: 1,
    menu: '카테고리',
    sub: [
      { id: 1, menu: '꽃병 및 오브제', link: '/' },
      { id: 2, menu: '가방', link: '/' },
      { id: 3, menu: '보석류', link: '/' },
      { id: 4, menu: '양초 및 조명', link: '/' },
      { id: 5, menu: '웰빙', link: '/' },
      { id: 6, menu: '서적', link: '/' },
      { id: 7, menu: '재미있고 독특한', link: '/' },
    ],
  },
  {
    id: 2,
    menu: '컬렉션',
    sub: [
      { id: 1, menu: '히스 클레이 스튜디오', link: '/' },
      { id: 2, menu: '줄리아 터너', link: '/' },
      { id: 3, menu: '커스틴 뮌스터', link: '/' },
      { id: 4, menu: '사이푸아', link: '/' },
      { id: 5, menu: '에드워드 월', link: '/' },
    ],
  },
]

const Gift = () => {
  return (
    <>
      {MENU5.map((menu) => {
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

export default Gift
