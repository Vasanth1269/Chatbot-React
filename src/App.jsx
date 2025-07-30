import { useState } from 'react'
import{ChatInput} from './components/Inputmessage'
import { ChatDetails } from './components/chatmessage';

import './App.css'



export function DisplayChat() {
  const [loading, setLoading] = useState(false);
   const [ChatMessag , setChatMessag ] = useState([
    { message: "hello",
     sender: "user",
      id: "id1"
     },
    { message: "hello how can i help you ?",
     sender: "AI",
      id: "id2"
     },

    { message: "can you get me todays date ?",
     sender: "user",
      id: "id3" 
    },
    { message: "Today is 10 July 2025",
     sender: "AI", 
     id: "id4"
     },
    { message: "how about flip a coin", 
    sender: "user",
     id: "id5" 
    },
    { message: "sure! You got tails",
     sender: "AI",
      id: "id6" 
    }
  ]);
    return(
      <div className = "chat-papage" >

        
         
           
            <ChatDetails ChatMessag = {ChatMessag} loading = {loading} />
             <ChatInput  ChatMessag = {ChatMessag} setChatMessag = {setChatMessag}   setLoading ={setLoading} />
          
      </div>
)
 }

     
      
 