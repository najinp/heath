import React from 'react'
import { NavLink } from 'react-router-dom'

const MENU = [
  {
    id: 1,
    menu: '카테고리',
    sub: [
      { id: 1, menu: '접시', link: '/' },
      { id: 2, menu: '그릇', link: '/' },
      { id: 3, menu: '머그 & 컵', link: '/' },
      { id: 4, menu: '식기 세트', link: '/' },
      { id: 5, menu: '서빙 볼 및 플래터', link: '/' },
      { id: 6, menu: '꽃병', link: '/' },
      { id: 7, menu: '부속품', link: '/' },
    ],
  },
  {
    id: 2,
    menu: '컬렉션',
    sub: [
      { id: 1, menu: '쿠페', link: '/' },
      { id: 2, menu: '셰 파니세', link: '/' },
      { id: 3, menu: '가장자리', link: '/' },
      { id: 4, menu: '앨라배마 차닌', link: '/' },
    ],
  },
]

const Sicki = () => {
  return (
    <>
      {MENU.map((menu) => {
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

export default Sicki
