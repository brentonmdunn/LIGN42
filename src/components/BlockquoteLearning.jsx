import React from 'react'
import "./CustomBlockquote.css"
import { LearnMore } from './LearnMore'
import { CustomModal } from './CustomModal'

export const BlockquoteLearning = () => {
  return (
    <p className='bquote'>
        Learning moment: Although this is a more academic-style website, we still want it to be accessible to all. Anytime we use advanded lingistic techniques, you can click on any text that looks like <LearnMore type='inline'/> this
    </p>

  )
}
