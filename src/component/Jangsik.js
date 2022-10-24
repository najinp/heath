import React from 'react'
import { NavLink } from 'react-router-dom'

const MENU3 = [
  {
    id: 1,
    menu: '카테고리',
    sub: [
      { id: 1, menu: '꽃병 및 오브제', link: '/' },
      { id: 2, menu: '양초 및 조명', link: '/' },
      { id: 3, menu: '트레이 및 플래터', link: '/' },
      { id: 4, menu: '베개 및 던지기', link: '/' },
      { id: 5, menu: '바구니 및 보관', link: '/' },
      { id: 6, menu: '미술', link: '/' },
      { id: 7, menu: '웰빙', link: '/' },
      { id: 8, menu: '러그', link: '/' },
      { id: 9, menu: '벽지', link: '/' },
      { id: 10, menu: '가구', link: '/' },
      { id: 11, menu: '서적', link: '/' },
    ],
  },
  {
    id: 2,
    menu: '컬렉션',
    sub: [
      { id: 1, menu: '히스 + 아르텍', link: '/' },
      { id: 2, menu: '히스 클레이 스튜디오', link: '/' },
      { id: 3, menu: '다카야마 히데키', link: '/' },
      { id: 4, menu: '하우스 + 히스', link: '/' },
      { id: 5, menu: 'Jacob May의 Nomad 컬렉션', link: '/' },
      { id: 6, menu: '가르자 마르파', link: '/' },
      { id: 7, menu: '그린 그로브 직공', link: '/' },
    ],
  },
]

const Jangsik = () => {
  return (
    <>
      {MENU3.map((menu) => {
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

export default Jangsik
