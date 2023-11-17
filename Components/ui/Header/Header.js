import React from 'react'
import MenuList from '../MenuList/MenuList'

const Header = ({data}) => {
  return (
    <nav>
        <MenuList data={data} />
    </nav>
  )
}

export default Header