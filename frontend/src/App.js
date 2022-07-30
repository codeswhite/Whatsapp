import './App.css';
import openSocket from 'socket.io-client'
import {useEffect} from 'react'

// const socket = io.connect("http://localhost:8000");
const socket = openSocket('http://localhost:8000', {transports: ['websocket']});

function App() {
  useEffect(()=>{
    socket.on("receive_message", (data)=>{
      alert(data.message)
    })
  }, [socket])
  const sendMessage = () => {
    socket.emit('send_message', {message: "hello"})
  }
  return <div>
    <input type="button" onClick={sendMessage} value="click"></input>
  </div>
}

export default App;
