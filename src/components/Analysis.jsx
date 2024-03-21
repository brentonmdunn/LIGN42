import React from 'react'

import { Word } from './Word'
import "./Analysis.css"
import { CustomModal } from './CustomModal'
import { LearnMore } from './LearnMore'
import { Typography } from '@mui/material'
import { CustomBlockquote } from './CustomBlockquote'
import { AnalysisExplanation } from './AnalysisExplanation'



export const Analysis = (props) => {
  return (
    <div>
      <h2><span>Analysis</span></h2>
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

      <AnalysisExplanation />

      <h3>Rizz</h3>
      <p>Shortened from charisma, rizz can be used as a noun to describe the amount of charisma, or likeability, one has. Alternatively it can be used as a verb, for example, in the sentence “He is going to rizz her up,” we see that the meaning of rizz is someone trying to be charismatic toward someone else. Similarly, we have the term “rizzler” which is the person who has rizz, or the person who has charisma. Like many of Gen Alpha’s most popular slang words, rizz was popularized by streamer Kai Cenat.

<br /> <br />Rizz /ɹɪz/ is a singular syllable: /ɹ/ is the onset, /ɪ/ is the nucleus, and /z/ is the coda. Since few words in the English language end with “z” (175 in total!), and only one syllable, “rizz” is a memorable word that is interesting to say.
      </p>
      <h3>Skibidi</h3>
      <p>
      Skibidi Toilet is an animated web series on Youtube created by DaFuq!?Boom!. The series went viral, and many memes have come from it. While the characteric head-coming-from-a-toilet has its own spinoff of memes, we are more concerned with the usage of “skibidi” in conversation. In conversation, it is mostly used ironically. However, like many other memes, skibidi has somewhat spun off from its original meaning, and has come to mean, at least in some circles, “someone who is evil or bad” 

      </p>
      <p>Skibidi /skɪ.bɪ.di/ has three syllables:</p>
      <ul>
        <li>/skɪ/: /sk/ is the onset, /ɪ/ is the nucleus</li>
        <li>/bɪ/: /b/ is the onset, /ɪ/ is the nucleus</li>
        <li>/di/: /d/ is the onset, /i/ is the nucleus</li>
      </ul>
      <p>
      Similar to rizz, there are few words that sound similar to skibidi, so it is very unique. Although it is not monosyllabic, skibidi is definitely fun to say, and has an interesting structure.

      </p>
    </div>
  )
}
