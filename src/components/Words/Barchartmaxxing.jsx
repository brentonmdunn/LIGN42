import React from 'react'
import chart1 from './images/barchat1.png'
import chart2 from './images/barchart2.png'
import { LB } from '../LB'
import "./Memes.css"

export const Barchartmaxxing = () => {
  return (
    <div>
        <h3>Barchartmaxxing</h3>
        <img src={chart1} />
        <LB />

        Based on the words that we have collected and observed (20 total words), we can observe that the majority of the words seem to only be monosyllabic, which makes sense because these words are easy to say and are easy to roll off the tongue. Because most of the words are one syllable, it would be safe to say that most of these words also have the accent on the first syllable.
        <LB />
        But wait a minute, if there are 2+ syllables in the word, where are the accented syllables? This is most definitely a good question to think about and explore, but luckily for whoever is reading this, we have a chart for that too!

        <LB />

        <img src={chart2} />

        <LB />
        Based on our observations, we can see that out of the 9 words that we collected that have over one syllable, eight of them have an initial stress on the first syllable while only one word out of the nine has the accented syllable on the second syllable. 

        <LB />
        We hypothesize that this preference for monosyllabic words reflects a broader linguistic trend towards efficiency and ease of articulation, a principle that’s also seen in the phonological features of AAVE, such as consonant cluster reductions and the use of “-in” instead of “-ing.” This is reflected in frequent use cases of some of our words, such as “yap” is frequently used as “yappin” (i.e., “What is blud yappin’ about?”). These simplifications make words quicker and easier to say, enhancing communication speed and fluidity, which is particularly valued in informal, fast-paced, digital environments. In addition, it can be noted that the monosyllabic dominance can be attributed to not only 


    </div>
  )
}
