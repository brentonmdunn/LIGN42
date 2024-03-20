import React from 'react'
import "./CustomBlockquote.css"

export const CustomBlockquote = (props) => {
  return (
    <p className='bquote'>{props.text}</p>
  )
}
