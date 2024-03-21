import React from 'react'
import pogchamg from './images/pogchamp.png'
import { LB } from '../LB'

export const Pog = () => {
  return (
    <div>
        <h3>Pog</h3>
        <p>
        Pog acts like an adjective or interjection synonymous with "cool" or "awesome." It is a shortened form of “pogchamp,” the name of Twitch emote used to convey excitement, joy or shock. A misconception some people have is that pog stands for “player of the game.” This idea actually came much later. This interpretation could have been because of people trying to reverse engineer the term to figure out what it means.
        <LB />
        <img src={pogchamg} />
        <LB />
        Pog /pɑg/ is monosyllabic: /p/ is the onset, /ɑ/ is the nucleus, and /g/ is the coda.
        <LB />
        Morphomemes: Originally from the word “pogchamp,” made popular through Twitch. Other variations include:
        <ul>
            <li>poggers</li>
            <li>PogU</li>
            <li>PogO</li>
            <li>Pogey</li>
            <li>poog</li>
        </ul>
        </p>
    </div>
  )
}
