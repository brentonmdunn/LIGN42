import React from 'react'

import { Word } from './Word'
import "./Analysis.css"
import './CommonStyles.css'
import { CustomModal } from './CustomModal'
import { LearnMore } from './LearnMore'
import { Typography } from '@mui/material'
import { CustomBlockquote } from './CustomBlockquote'
import { AnalysisExplanation } from './AnalysisExplanation'
import { LB } from './LB'
import { Rizz } from './Words/Rizz'
import { Skibidi } from './Words/Skibidi'
import { Gyat } from './Words/Gyat'
import { Ohio } from './Words/Ohio'
import { Looksmaxxing } from './Words/Looksmaxxing'
import { Mew } from './Words/Mew'
import { Alpha } from './Words/Alpha'
import { Mog } from './Words/Mog'
import { Beta } from './Words/Beta'
import { Sigma } from './Words/Sigma'
import { Pookie } from './Words/Pookie'
import { Grimace } from './Words/Grimace'
import { Yap } from './Words/Yap'
import { Pog } from './Words/Pog'
import { Dub } from './Words/Dub'
import { Griddy } from './Words/Griddy'
import { Slay } from './Words/Slay'
import { Glaze } from './Words/Glaze'
import { Womp } from './Words/Womp'
import { Tablemaxxing } from './Tablemaxxing'
import { Barchartmaxxing } from './Words/Barchartmaxxing'
import { Morphomeme } from './Words/Morphomeme'
import { Sus } from './Words/Sus'



export const Analysis = (props) => {
  return (
    <div>
      <LB />
      <h2><span>Analysis</span></h2>
      <Morphomeme />
      <h3>
        What are the most popular meme words now?
      </h3>
      <p>
      If you’ve ever talked to a Gen Alpha child, you’ve probably heard any combination of rizz, fanum, skibidi, gyat, and Ohio. Mew, mog, and looksmaxxing are all new phrases too. We will first understand the meanings and contexts of these words, then analyze their syllable structures. We used a combination of online words lists, Reddit, and anecdotal experience to come up a list of the following words that frequently come up in conversation to analyze:

      </p>    
      <div className='word-list'>
        {props.words.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </div>

      
      <AnalysisExplanation />
      
      <Rizz />
      <Skibidi />
      <Gyat />
      <Ohio />
      <Looksmaxxing />
      <Mew />
      <Mog />
      <Alpha />
      <Beta />
      <Sigma />
      <Pookie />
      <Grimace />
      <Yap />
      <Pog />
      <Dub />
      <Griddy />
      <Slay />
      <Glaze />
      <Womp />
      <Sus />
        
      <Tablemaxxing />
      <Barchartmaxxing />
    </div>
  )
}
