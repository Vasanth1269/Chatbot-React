 import { useRef,useEffect } from "react"; 
 import { ChatMessage } from "./message";
 import RobotImage from '../assets/Robot.png'
  
 
  
  
  
export function ChatDetails( {ChatMessag , loading}) {
  const ChatMessageRef =  useRef(null)
   useEffect(() => {
    const ChatMessageElemt = ChatMessageRef.current;
    if (ChatMessageElemt){
      ChatMessageElemt.scrollTop = ChatMessageElemt.scrollHeight;

    }
   },[ChatMessag])
  
     return (
      <div className = "chat-ChatDetails" ref = {ChatMessageRef}>
        {ChatMessag.map((Response) => {
      return  (
             <ChatMessage
          message={Response.message}
          sender={Response.sender}
          key={Response.id}
        />
        )
       
      })}
   
    {loading && (
  <div className="chat-container">
    <div className="messages-container">
      <img src={RobotImage} className="message-container-img" />
      <div className="message-text insta-typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
)}

       
    </div>
     ) 
    }  