import React from 'react'

export type IService = {
  order: string
  title: string
  childs: any[]
}

const Service = ({ service }: { service: IService }) => {
  return (
    <a className="h-7 cursor-pointer text-lg font-[600] hover:text-red-600">
      {service.title}
    </a>
  )
}

export default Service
