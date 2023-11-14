import { footerList } from '@/app/utils/footerList'
import React from 'react'
import MenuList from '../MenuList/MenuList'

const Footer = ({data}) => {
  return (
    <div>
        <MenuList data={data} />
    </div>
  )
}

export default Footer