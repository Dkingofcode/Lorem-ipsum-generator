import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid';


function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count) // string
    let amount = parseInt(count);
    setText(data.slice(0,amount));
  };

  return (
    <div className="App">
      <h4>tired of boring lorem ipsum? </h4>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='another'
              name='amount'
              id='amount'
              step='1'
              max='8'
              value={count}
              onChange={(e) => setCount(e.target.value)} />
              <button className='btn' type='submit' onClick={handleSubmit}>
                generate
              </button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </div>
  )
}

export default App;
