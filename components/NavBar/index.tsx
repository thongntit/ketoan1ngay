import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

import GetAdvise from '~/components/LeadButton/GetAdvise'

import CompanyLogo from './CompanyLogo'
import Service, { IService } from './Service'
import SideMenu from './SideMenu'

type Props = { items: IService[] }

const NavBar = ({ items }: Props) => {
  const [showHamMenu, setShowHamMenu] = useState(false)

  const level1Items = items
    .filter((item) => item.level === '1')
    .sort((a, b) => +a.order - +b.order)
  return (
    <div className="sticky top-0 z-10 flex h-20 items-center justify-between gap-8 bg-white">
      <CompanyLogo />
      <div className="hidden items-center gap-8 lg:flex">
        {level1Items.map((item) => {
          const childServices = items.filter((i) => i.parent == item.id)
          return (
            <Service
              key={item.title}
              service={item}
              childServices={childServices}
            />
          )
        })}
        <SearchIcon
          className="h-5 cursor-pointer hover:text-red-600"
          boxSize={5}
        />

        <GetAdvise />
      </div>
      <span className="inline-block" onClick={() => setShowHamMenu(true)}>
        <HamburgerIcon boxSize={5} />
      </span>
      <SideMenu
        items={items}
        open={showHamMenu}
        onClose={() => setShowHamMenu(false)}
      />
    </div>
  )
}

export default NavBar
