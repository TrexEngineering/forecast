import Head from 'next/head'
import { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'

const cardImages = [
  { "src": "/cards/Fool.jpg", matched: false },
  { "src": "/cards/Magician.jpg", matched: false },
  { "src": "/cards/Priestess.jpg", matched: false }
]

export default function Home() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //　シャッフルカード
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  //　選択処理
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    console.log(card)
  }

  //　選択カード比較
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 800)
      }
    }
  }, [choiceOne, choiceTwo])

  //　選択リセット & ターン経過
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  //　自動開始
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="container">
      <Head>
        <title>タロット占い</title>
        <meta name="description" content="タロット占い作ってみた"/>
        <meta property="og:type" content="website" />
        <meta property='og:image' content="/tarot.png" />
        <meta property='og:title' content="株式会社トレックス | タロット占い" />
        <meta property='og:description' content="タロット占い作ってみた" />
        <meta property='og:url' content="https://www.trex-group.com/"/>
        <meta name='twitter:site' value="@Trex2003" />
        <meta name='twitter:card' value="summary" />
        <meta name= 'twitter:image' value="/tarot.png" />
        <meta name= 'twitter:description' value="タロット占い作ってみた" />
        <link rel="icon" href="/card.ico" />
      </Head>

      <main>
        <h1>タロット占い</h1>
        <button onClick={shuffleCards}>New Game</button>

        <div className="card-grid">
          {cards.map(card => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>
      </main>

      <footer>
        <a
          href="https://www.trex-group.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/trex.png" alt="Trex" className="logo" />
        </a>
      </footer>
    </div>
  )
}
