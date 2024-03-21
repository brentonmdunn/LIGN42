import './Conclusion.css'

import React from 'react'
import { LB } from './LB'

export const Sources = () => {


  const websites = [


    "https://www.businessinsider.com/gen-alpha-explained-technology-views-mental-health-2023-10?utm_medium=referral&utm_source=yahoo.com",
    "https://knowyourmeme.com/memes/cultures/generation-alpha-gen-alpha/photos",
    "https://www.vox.com/culture/23989120/rizz-definition-oxford-word-of-the-year-colloquial",
    "https://wordsrated.com/tools/wordslists/words-ending-in-z/#:~:text=In%20the%20English%20language%20there,ends%20with%20Z%20is%20ADZ",
    "https://www.tiktok.com/t/ZPR3ccxpK/",
    "https://nypost.com/2023/11/24/lifestyle/what-does-gen-z-slang-word-gyatt-mean/",
    "https://www.usatoday.com/story/life/2024/03/14/mewing-netflix-doc-open-wide-beauty-trend/72975030007/#:~:text=Mewing%20is%20the%20practice%20of,of%20the%20jawline%20and%20face",
    "https://www.dictionary.com/e/key-to-ipa-pronunciations/ ",
    "https://knowyourmeme.com/photos/2002974-sigma-males",
    "https://mashable.com/article/pookie-explained-meaning-tiktok",
    "https://www.nytimes.com/2022/11/01/well/mind/humor-benefits.html ",
    "https://www.quora.com/Why-does-my-son-keep-asking-if-I-have-Skibidi-rizz-Is-this-a-bad-thing ",
    "https://www.nytimes.com/2023/11/06/style/looksmaxxing-tik-tok-dillon-latham.html ",
    "https://www.businessinsider.com/inventor-grimace-shake-trend-reveals-how-thought-idea-2023-7 ",
    "https://www.reddit.com/r/OutOfTheLoop/comments/myt3we/whats_up_with_the_words_pog_or_poggers/ ",
    "https://www.dexerto.com/entertainment/what-is-the-ohio-joke-on-tiktok-1983680/ ",
    "https://www.dailymail.co.uk/sciencetech/article-12868589/Feel-old-Boy-11-gives-DailyMail-com-lowdown-BAFFLING-slang-terms-used-Gen-Alpha-including-furda-skibidi-Ohio-guess-mean.html ",
    "https://www.stuff.co.nz/technology/301011362/bruh-whats-a-fanum-tax-your-guide-to-gen-alpha-slang ",
    "https://en.wiktionary.org/wiki/mog",
    "https://ipa.winstondurand.com/#/keyboard/type",
    "https://knowyourmeme.com/memes/glazing-slang",
    "https://www.quora.com/What-does-womp-womp-mean-How-is-it-used#:~:text=Womp%20Womp%E2%80%9D%20is%20an%20imitative,a%20joke%20has%20fallen%20flat",
    "https://en.wikibooks.org/wiki/African_American_Vernacular_English/Pronunciation#:~:text=African%20American%20Vernacular%20English%20"

  ]


  return (
    <div>
      <LB /><h2><span>Sources</span></h2>
      
      
      <ul>
      {websites.map((website, index) => (
        <li key={index}>
          <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
        </li>
      ))}
    </ul>

    </div>
  )
}
