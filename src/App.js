import React from 'react';
import './App.css';
import MemeGenerator from './components/MemeGenerator';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
      </Helmet>
      <header className="App-header">
        <h1>Best Meme Generator</h1>
        <MemeGenerator />
      </header>

      <hr/>
      <p>Best Meme Generator is a open-source project created to be
        a minimalist, fastest and easiest way to create your own custom memes,
        choosing your image and adding text over and below an image.</p>
      <p>The expression Internet meme is used to describe a concept of image,
        videos, GIFs and related to humor, which spreads via the Internet.
        The so-called Meme is a term created by the writer Richard Dawkins,
        in his book The Selfish Gene (The Selfish Gene, launched in 1976),
        whose meaning is a composite of information that can be multiplied
        among the brains or in certain places like, books. The synthesis of
        his book is about the meme, considered a cultural evolution, capable
        of spreading. The Meme can be considered an idea, a concept, sounds
        or any other information that can be transmitted quickly. Just out
        of curiosity, the study of this concept is called memetics.
        In reference to the field of information technology, the expression
        Internet Memes is used to characterize an idea or concept, which
        spread quickly through the web. The Meme can be a phrase, link,
        video, website, image, among others, which are spread through emails,
        blogs, news sites, social networks and other sources of information.
        It is common for Memes to become so-called Virals, which benefit to
        publicize and propagate a brand and or service. This is one of the
        applications of Memes, because due to its almost instantaneous growth,
        it has become a target of study by industries, interested in selling
        their products. Memes are used commercially to spread the so-called
        Viral Marketing, Guerrilla and Buzz Marketing (massive advertising).
        There are also Memes that generate and disseminate content, such as TED Talks.
        Internet Memes are widely studied by Public Relations, Advertising and
        Marketers professionals, as they have an advantageous cost-benefit ratio.
        For traders, Memes are also used as a dissemination tool.
        Memes are as old as humanity and are intrinsically related to cultural
        evolution. Memes are replicating information that, like viruses,
        infect our thinking, affect our behavior, and spread from brain to brain,
        forming our culture. Thus, the meme is the cultural gene that reproduces itself.
        Anything that can be learned and transmitted as a stand-alone unit is a meme.
        The examples of Memes are endless, so there are specific sites on this
        topic like Know Your Meme, which lists some types and explains the concept.
        Two most common types of Memes can be Phrases, commonly accompanied by
        pictures, are information with a playful tone and puns; or Drawings,
        usually in B&W, are images with caricature traces or photos adapted
        to drawings. Thanks to Memes, the so-called internet phenomena
        gain strength and space on the Web quickly. They are videos with millions
        of hits in just a few hours, songs and songs heard by many people in a few
        minutes, among other news released.
        The life span of a Meme on the internet can be infinite or ephemeral,
        as well as its content that is subject to evolve over time, because
        once posted on the web, the information will be subject to comments,
        criticisms, negative effects and others types of interventions and reactions.
        The main feature of Meme is precisely the possibility of being recreated
        by anyone and at any time. However, Memes are any type of information,
        idea or concept, which can be transmitted from one place to another quickly.
        And if memes have existed since the origin of mankind, why the interest so
        great now? If in ancient times it was necessary for one person to be
        physically close to another to learn a behavior and replicate, with
        the evolution of communication technologies throughout history, an
        increasingly favorable structure for the propagation of memes was formed,
        culminating in the broadband on the internet that has enabled anyone to
        potentially become a generator and diffuser of memes. And more than that,
        the web 2.0 platform provides a rich environment to allow the creation
        and editing of technological memes, previously unviable. Thus,
        the internet favors the creation and propagation of memes due to several
        factors: greater ease and speed of propagation, full time availability
        (24 × 7), repository of tools for creating memes and replicating behaviors
        (video, audio, Image).
      </p>
    </div>
  );
}

export default App;
