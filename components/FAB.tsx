import { PhoneIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

type Props = {}

export const FAB = (props: Props) => {
  return (
    <div className="fixed bottom-20 right-10">
      <Button leftIcon={<PhoneIcon />} colorScheme="pink" variant="solid">
        Gọi ngay
      </Button>
    </div>
  )
}

export default FAB
