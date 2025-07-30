import { Chatbot } from 'supersimpledev'
import { useState } from 'react';


 export function ChatInput({ChatMessag , setChatMessag , setLoading}) {
          const [Inputbox , setInputbox] = useState("");

          function InputValue(event) {
           setInputbox(event.target.value)

            
          }
          function UserMessage() {
            if (Inputbox){
               const newChat = [
          ...ChatMessag,
          {
            message: Inputbox,
            sender:'user',
            id:crypto.randomUUID()
          }

        ]
        setInputbox("")
                 setChatMessag(newChat)
                     setLoading(true)
                 
          setTimeout(() => {
             const BotRespose = Chatbot.getResponse(Inputbox)
        
              setChatMessag([
          ...newChat,
          {
            message:BotRespose,
            sender:'AI',
            id:crypto.randomUUID()
          }

        ])
         
         setLoading(false)
          }, 2000);
        }
      }
           
          
         return(
            <div className = "input-container">
              <input type="text" placeholder="Anything" onChange = {InputValue} value = {Inputbox} ></input>
              <button onClick = {UserMessage}>Send</button>
              
          </div>);
        };