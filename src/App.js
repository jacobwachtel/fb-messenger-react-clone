import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { FormControl, Input } from '@mui/material';
import Message from './Message';
import db from './firebase';
import FlipMove from 'react-flip-move';
import {
   onSnapshot,
   collection,
   serverTimestamp,
   addDoc,
   orderBy,
   query,
} from 'firebase/firestore';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function App() {
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState([]);
   const [username, setUsername] = useState('');

   useEffect(() => {
      // run code here...(on condition)
      setUsername(prompt('Please enter your name'));
   }, []); // this is the condition // IF blank, runs ONCE when app component loads.

   useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
      onSnapshot(q, (snapshot) => {
         setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
         );
      });
   }, []);

   const sendMessage = (event) => {
      // All the logic to send a message goes here...
      event.preventDefault();
      addDoc(collection(db, 'messages'), {
         message: input,
         username: username,
         timestamp: serverTimestamp(),
      });
      setInput('');
   };

   return (
      <div className="App">
         <img
            src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
            alt=""
         />
         <h1>FB Messenger Clone</h1>
         <h2>Welcome {username}</h2>
         <form className="app__form">
            <FormControl className="app__formControl">
               <Input
                  className="app__input"
                  placeholder="Enter a message..."
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
               />
               <IconButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!input}
                  onClick={sendMessage}
                  className="app_iconButton"
               >
                  <SendIcon />
               </IconButton>
            </FormControl>
         </form>

         <FlipMove>
            {messages.map(({ id, message }) => (
               <Message key={id} username={username} message={message} />
            ))}
         </FlipMove>
      </div>
   );
}

export default App;

// state is like short-term memory (keeps track of what we are typing into input)
// keeps track of what we input

//UseState = variable in REACT
//UseEffect = snippet of code that gets executed based on a condition - that condition is determined in useEffect
