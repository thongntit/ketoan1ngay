import { Button } from '@chakra-ui/react'
import React from 'react'

const GetAdvise = () => {
  const onClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'click_call_back_button' })
    }
  }
  return (
    <Button
      className="!absolute !right-0"
      variant="outline"
      colorScheme="red"
      borderRadius="24px"
      paddingX={6}
      color={'#dc2626'}
      onClick={onClick}
    >
      Tư vấn
    </Button>
  )
}

export default GetAdvise
