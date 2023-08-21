import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

import { IService } from './Service'

type Props = {
  service: IService
  childServices: IService[]
}

const SideBarService = ({ service, childServices }: Props) => {
  const haveChild = childServices.length > 0
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {service.title}
          </Box>
          {haveChild && <AccordionIcon />}
        </AccordionButton>
      </h2>
      {haveChild && (
        <AccordionPanel pb={4}>
          {childServices.map((childService) => (
            <p key={childService.id}>{childService.title}</p>
          ))}
        </AccordionPanel>
      )}
    </AccordionItem>
  )
}

export default SideBarService
