import RobotImage from '../assets/Robot.png'
import UserImage from '../assets/User.png'


export function ChatMessage(props) {
       const message = props.message;
       const Sender = props.sender

      return ( 
        
          <dir className = "chat-container">
        
             <div className = {Sender === 'user'? "message-container" : "messages-container"}>
             
             
              
                {Sender === "AI" &&  <img src={RobotImage}  className = "message-container-img " /> 
                    
                }
                 <div className = "message-text"> {message} </div>
                
       
                { Sender === "user" && <img src={UserImage}  className = "message-containerimg " /> }
            

           </div>
          
          </dir>
         
    );
      }