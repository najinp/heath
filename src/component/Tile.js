import React from 'react'
import { NavLink } from 'react-router-dom'

const MENU4 = [
  {
    id: 1,
    menu: '타일 ​​컬렉션',
    sub: [
      { id: 1, menu: '클래식 필드', link: '/' },
      { id: 2, menu: '이중 유약', link: '/' },
      { id: 3, menu: '차원', link: '/' },
      { id: 4, menu: '스탠 비터스', link: '/' },
      { id: 5, menu: '벽화', link: '/' },
    ],
  },
]
const Tile = () => {
  return (
    <>
      {MENU4.map((menu) => {
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

export default Tile
