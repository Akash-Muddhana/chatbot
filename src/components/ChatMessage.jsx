import './ChatMessage.css'
function ChatMessage({message,sender}) {
        // const message = props.message;
        // const sender = props.sender;
        // const {message,sender}=props;
        // if (sender === "robot") {
        //   return (
        //     <>
        //       <div>
        //         {message}
        //         <img
        //           src="https://static.vecteezy.com/system/resources/previews/009/742/308/original/robot-icon-isolated-contour-symbol-illustration-vector.jpg"
        //           width="50"
        //         />
        //       </div>
        //     </>
        //   );
        // }
        
        return (
          <>
            <div className={sender==="user"?"chat-Input-User" :"chat-Input-Robot"}>
              {sender==="robot"&& <img className="chat-message-profile"
                  src="https://static.vecteezy.com/system/resources/previews/009/742/308/original/robot-icon-isolated-contour-symbol-illustration-vector.jpg"
                  
                />}
                <div className="chat-Input-Message">
                   {message}
                </div>
              {sender==="user"&&<img className="chat-message-profile"
                src="https://i.pinimg.com/originals/ee/d1/76/eed176d5fb3f77e3e003b85a246ba7ad.jpg"
               
              />}
              
            </div>
          </>
        );
          }
    export default ChatMessage