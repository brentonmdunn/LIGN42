import React from 'react'
import Chip from '@mui/material/Chip';
import "./Word.css"
export const Word = (props) => {
  return (
    <div className='word-bubble'>
        <Chip label={props.word} variant="outlined" />
    </div>
  )
}
