import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      quote:Quotes[0],
      author:Author[0]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTweet = this.handleTweet.bind(this)
  }

  handleClick(){
    const randomNum = Math.floor(Math.random()*Quotes.length)
    this.setState({
      quote:Quotes[randomNum],
      author:Author[randomNum]
  })
  }
  handleTweet(){
       window.open("https://twitter.com/intent/tweet?text="+this.state.quote+ " " + this.state.author);

  }

  render(){
    return(
    <div style={style}>
        <h1>Random Quote Machine</h1>
        <blockquote>
          <h2>{this.state.quote}</h2>
          <cite>{this.state.author}</cite>
        </blockquote>
        <div>
          <span>
          <button className = "btn btn-primary one" onClick={this.handleClick}>New Quote</button>
          <button className = "btn btn-primary two" onClick={this.handleTweet}>Tweet Out</button>
          </span>
        </div>
      </div>
    )
  }
}

const Quotes= ["“Don't cry because it's over, smile because it happened.” ", "“Be yourself, everyone else is already taken.” " , "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ", "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” " , "“So many books, so little time.” ","“A room without books is like a body without a soul.” ","“Be the change that you wish to see in the world.” ","“In three words I can sum up everything I've learned about life: it goes on.” ","“If you tell the truth, you don't have to remember anything.” ","“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ","“Always forgive your enemies; nothing annoys them so much.” ","“Live as if you were to die tomorrow. Learn as if you were to live forever.”","“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” ","“Insanity is doing the same thing, over and over again, but expecting different results.” "]

const Author = ["― Dr. Seuss","― Oscar Wilde","― Albert Einstein","― Bernard M. Baruch","― Frank Zappa","― Marcus Tullius Cicero","― Mahatma Gandhi","― Robert Frost","― Mark Twain","― Maya Angelou","― Oscar Wilde","― Mahatma Gandhi","― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches","― Narcotics Anonymous"]

ReactDOM.render(<App/>,document.getElementById('root'))
