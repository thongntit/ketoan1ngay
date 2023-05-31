import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'

import GetAdvise from '~/components/LeadButton/GetAdvise'

import CompanyLogo from './CompanyLogo'
import Service, { IService } from './Service'

type Props = { items: IService[] }

const NavBar2 = (props: Props) => {
  return (
    <div className="relative flex h-20 items-center gap-8">
      <CompanyLogo />
      <div className="flex items-center gap-8">
        {props.items.map((item) => (
          <Service key={item.title} service={item} />
        ))}
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
