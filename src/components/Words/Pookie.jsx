import React from 'react'
import { LB } from '../LB';
import { Cite } from '../Cite';

const TikTokEmbed = ({ embedUrl }) => {
    return (
      <div>
        <iframe
          title="TikTok Video"
          src={embedUrl}
          width="100%"
          height="800"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  };




export const Pookie = () => {

    const tiktokEmbedUrl = "https://www.tiktok.com/embed/v2/7346988473028447518?lang=en-US";
  return (
    <div>
        <h3>Pookie</h3>
        <p>
        Pookie is used as a term of endearment. The morden resurgence of pookie as an endearing nickname originates from TikTok couple Campbell and Jett Puckett. 
</p>
                    <TikTokEmbed embedUrl={tiktokEmbedUrl} />
    
    
        <p>
        In their various videos, Jett refers to his wife using the term “pookie,” which was quickly caught onto by their viewers. Now, pookie is used in conversation to show affection towards a significant other, friend, or even pet. However, the word “pookie” has long existed before this internet couple. It dates back to at least the 1930s in African American Vernacular English (AAVE) (<Cite source="https://mashable.com/article/pookie-explained-meaning-tiktok)." />). It ranges from neutral to endearing in terms of affection levels. But as it catches on in the wider internet community, it has also been used in the third person when it was originally second person. This occurs in cases like saying “[NAME] is pookie.” Since many were not familiar with its prior grammatical case, those who are imitating the Pucketts have changed its use. Like all recent slang, its meaning morphs as they are spread, solidifying themselves into the internet’s vocabulary. 

        <LB />
        Pookie /ˈpu.ki/ has two syllables
        <ul>    
           <li>/pu/: /p/ is the onset and /u/ is the nucleus. This syllable has the most emphasis.</li>
            <li>/ki/: /k/ is the onset and /i/ is the nucleus.
</li>


        </ul>

        <LB />
        Morphomemes: Other versions of the word pookie are used as couple nicknames. These include but are not limited to:
        <ul>
            <li>Pookilicious (noun)</li>
            <li>Pookie Bear (noun)</li>
            <li>Pookie-Wookie (noun)</li>
            <li>Pookster (noun)</li>
        </ul>

        Examples:
        <ul>
          <li>“I love my pookie!”
</li>
          <li>“I call my boyfriend my pookie bear.”
</li>
          <li>“Hey pookie, come over here!”
</li>
        </ul>

</p>
    
    </div>
  )
}
