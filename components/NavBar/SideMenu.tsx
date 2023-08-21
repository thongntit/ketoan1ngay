import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'

import Service, { IService } from './Service'
import SideBarService from './SideBarService'

type Props = {
  items: IService[]
  open: boolean
  onClose: () => void
}

const SideMenu = ({ items, open, onClose }: Props) => {
  const level1Items = items
    .filter((item) => item.level === '1')
    .sort((a, b) => +a.order - +b.order)
  return (
    <Drawer isOpen={open} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <div className="flex h-full">
            <div className="my-auto flex w-full flex-col gap-8">
              <Accordion>
                {level1Items.map((item) => {
                  const childServices = items.filter((i) => i.parent == item.id)
                  return (
                    <SideBarService
                      key={item.title}
                      service={item}
                      childServices={childServices}
                    />
                  )
                })}
              </Accordion>
              <Button
                variant="outline"
                colorScheme="red"
                borderRadius="24px"
                paddingX={6}
                color={'#dc2626'}
                background={'#ffffff'}
                // onClick={onClick}
              >
                Tư vấn
              </Button>
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SideMenu
