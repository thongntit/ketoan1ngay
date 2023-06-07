import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'

import GetAdvise from '~/components/LeadButton/GetAdvise'

import CompanyLogo from './CompanyLogo'
import Service, { IService } from './Service'

type Props = { items: IService[] }

const NavBar2 = ({ items }: Props) => {
  const level1Items = items
    .filter((item) => item.level === '1')
    .sort((a, b) => +a.order - +b.order)
  return (
    <div className="relative flex h-20 items-center gap-8">
      <CompanyLogo />
      <div className="flex items-center gap-8">
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
    </div>
  )
}

export default NavBar2
