import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import InputBox from './components/InputBox';
import ChatMessages from './components/ChatMessages';
import './App.css'


      
    
function App(){
       const [chatMessages,setChatMessages]=useState([{
        message:"hello chatbot",
        sender:"user",
        id:"id1"
      },{message:"hello! how can i help you?" ,
        sender:"robot",
        id:"id2", 
        },{message:"can you get me today's date?",
           sender:"user",
          id:"id3", },
           
          {
            message:"today is september 27",
            sender:"robot",
            id:"id4", 
          }]);
          // const chatMessages=array[0] 
          // const setChatMessages=array[1]
     
        
      return(
      <div className="app-container">
          
          <ChatMessages
           chatMessages={chatMessages}
          />
          <InputBox 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}/>

        </div>
    )
    }

export default App
