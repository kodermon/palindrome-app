import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('notify me');
 
function App() {
  const [text, setText] = useState('')
  const [isPalindrome, setIsPalindrome] = useState(false)
  const  [isClicked, setIsClicked] = useState(false)
  const checkBtn = document.querySelector('.btn')
  
  const handleChange = (e) => {
    setText(e.target.value)
    setIsClicked(false)
    if(text.length > 0) {
      checkBtn.classList.add('active')
    } else {
      checkBtn.classList.remove('active')
    }
  }

  let filteredInput = text.toLowerCase().replace(/[^A-Z0-9]/ig, '')

  const handleClick = () => {
    let reversedInput = filteredInput.split('').reverse().join('')
    if(text) {
      if(filteredInput !== reversedInput) {
        setIsPalindrome(false)
      } else {
        setIsPalindrome(true)
      }
      setIsClicked(true)
    }
    notify();
  }
  return (
    <main>
      <Toaster />
      <section className="center">
        <div className="container">
          <h2>palindrome checker</h2>
          <p className="about-info">A palindrome is a word or phrase taht reads same backwards as forwards e.g level</p>
          <div className="form">
            <input
              type='text'
              placeholder='Enter text or number' 
              onChange={handleChange}
              value={text}
            />
            <button onClick={handleClick} className='btn' >Check palindrome</button>
          </div>
          {isClicked && <p className="info-text">{isPalindrome ? 'Yes' : 'No'}, <span className="text">'{text}'</span> is {!isPalindrome ? "not" : ''} a palindrome</p>}
        </div>
      </section>
    </main>
  );
}

export default App;
