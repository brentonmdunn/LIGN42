import React from 'react'
import { Word } from './Word'
import "./Background.css"
export const Background = () => {

    const words = ["sus", "rizz", "skibidi"]
    

  return (
    <div>
        <h2>
            Background
        </h2>
        <div className='word-list'>
            {words.map((word, index) => (
                <Word key={index} word={word} />
            ))}
        </div>
    </div>
  )
}
