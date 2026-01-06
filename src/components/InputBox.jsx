import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
function InputBox({chatMessages,setChatMessages}) {
        const [inputText,setInputText]=useState()
        function saveInputText(event){
          setInputText(event.target.value)
        }
        function sendMessage(){
          const newChatMesssages= [
              ...chatMessages,
              {
                message:inputText,
                sender:"user",
                id:crypto.randomUUID()
              }
            ]
          setChatMessages(newChatMesssages) 
           const response= Chatbot.getResponse(inputText)
           setChatMessages(
            [
              ...newChatMesssages,
              {
                message:response,
                sender:"robot",
                id:crypto.randomUUID()
              }
            ]
           ) 
           setInputText('') 
        }
        
        
        return (
          <div className="chat-Input-container">

            <input placeholder="enter your message" size="30"
             onChange={saveInputText} 
             value={inputText}
             className="chat-Input"
            />
            <button onClick={sendMessage} className="send-button">send</button>
           </div>
        );
      }
export default InputBox