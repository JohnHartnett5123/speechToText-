import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import ReactDOMServer from 'react-dom/server';






const Dictaphone = () => {


  const { transcript, resetTranscript } = useSpeechRecognition()
  
  

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  

  return (
    <div>
      <button onClick={SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone































// import React, { useState, useEffect } from 'react';

// import './App.css';


// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition()

// recognition.start()


// function App() {
//   const [count, setCount] = useState(0)
//   let [words, setWords] = useState()
  
  

//   const voiceCommands = () => {
//     recognition.onstart = () => {
//       console.log("big brother is listening")
//     }
    
//     recognition.onresult = (e) => {
//       let current = e.resultIndex;

//       let transcript = e.results[current][0].transcript
      
//       console.log(transcript)
      

//       let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript)

//       if (!mobileRepeatBug){
//         setWords(words = transcript)
//         if (transcript === 'next' || transcript === " next"){
//           setCount(count+1)
//         }
//         if (transcript === 'back' || transcript === " back"){
//           setCount(count-1)
//         }
//       }

//       setTimeout(() => {
//         recognition.start()
//       },50)

//     }

//     recognition.onspeechend = () => {
//       recognition.stop()
//       console.log("thank god it stopped speaking")
//     }

//   }


//   useEffect(() => {
//     voiceCommands()
//   })

//   return (
//     <div className="App">
//       <h1>counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     <p>{words}</p>
//     </div>
//   );
// }

// export default App;
