import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

export type IService = {
  order: string
  title: string
  id: number
  parent: number
  level: '1' | '2' | '3'
}

const Service = ({
  service,
  childServices,
}: {
  service: IService
  childServices: IService[]
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const haveChild = childServices.length > 0
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        className="h-7 cursor-pointer text-lg font-[600] hover:text-red-600"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {service.title} {haveChild ? <ChevronDownIcon /> : ''}
      </MenuButton>
      {haveChild && (
        <Portal>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {childServices.map((childService) => (
              <MenuItem key={childService.id}>{childService.title}</MenuItem>
            ))}
          </MenuList>
        </Portal>
      )}
    </Menu>
  )
}

export default Service
