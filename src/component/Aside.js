import React from 'react'
import Sicki from './Sicki'
import Jangsik from './Jangsik'
import Taksang from './Taksang'
import Tile from './Tile'
import Gift from './Gift'
import Us from './Us'

const NAVLINK = [
  { id: 1, menu: '식기류', link: '/sub01', multimenu: <Sicki /> },
  { id: 2, menu: '탁상 및 주방', link: '/sub02', multimenu: <Taksang /> },
  { id: 3, menu: '장식 및 가구', link: '/sub03', multimenu: <Jangsik /> },
  { id: 4, menu: '타일', link: '/sub04', multimenu: <Tile /> },
  { id: 5, menu: '선물', link: '/sub05', multimenu: <Gift /> },
  { id: 6, menu: '우리', link: '/sub06', multimenu: <Us /> },
]

const Aside = ({ content }) => {
  return (
    <aside>
      <div className="aside__lnb">
        {NAVLINK.map((yea) => {
          return <>{yea.multimenu}</>
        })}
      </div>
    </aside>
  )
}

export default Aside
