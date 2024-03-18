import React from 'react'

import { Word } from './Word'

export const Analysis = (props) => {
  return (
    <div>
      <h2>Analysis</h2>
      <h3>
        What are the most popular meme words now?
      </h3>
      <p>
        If you’ve ever talked to a Gen Alpha child, you’ve probably heard any 
        combination of rizz, fanum, skibidi, gyat, and Ohio. Mew, mog, and 
        looksmaxxing are all new phrases too. We will first understand the 
        meanings and contexts of these words, then analyze their syllable 
        structures. We used a combination of online words lists, Reddit, and 
        anecdotal experience to come up a list of the following words to analyze:
      </p>    
      <div className='word-list'>
        {props.words.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </div>
    </div>
  )
}
