import { useState, useRef, useEffect } from 'react'
import RobotProfileImg from './assets/robot.png'
import UserProfileImg from './assets/user.png'

import './App.css'



       function ChatMessage({message, sender}){
      //  const message = props.message;
      //  const sender = props.sender;
      //  const { message, sender } = props;

      //  if(sender === 'robot'){
      //     return(
      //       <div>
      //         <img src="robot.png" width="50"/>
      //         {message}
      //       </div>
      //     )
      //  }

          return (
            <div className={
              sender === 'user' ? 
              'chat-message-user': 
              'chat-message-robot'
            }>
              {sender === 'robot' && 
                (<img src={RobotProfileImg} className="chat-message-profile"/>)}
            <div className="chat-message-text">
              {message}
            </div>
              {sender === 'user' && 
                (<img src={UserProfileImg} className="chat-message-profile"/>)}
            </div>
          )
       }
       
  
      function ChatMessages({chatMessages}){  
        const chatMessagesRef=useRef(null);

        useEffect(()=>{
         const containerElem= chatMessagesRef.current;
         if(containerElem){
              containerElem.scrollTop = containerElem.scrollHeight;
         }
        }, [chatMessages])     
          return(
            <div 
            className="chat-messages-container"
            ref={chatMessagesRef}
            >
              {chatMessages.map((chatMessage) => {
                    return(
                      <ChatMessage
                          message = {chatMessage.message}
                          sender = {chatMessage.sender}
                          key={chatMessage.id}
            />
           );
          })}      
        </div>
      );
      } 
function App(){
          const [chatMessages,setChatMessages ] = useState([{ 
          message: 'hello chatbot',
          sender: 'user',
          id: "id1"
        },{
          message: 'Hello! How can I help you?',
          sender: 'robot',
          id: "id2"
        },{ 
          message: 'can you get todays date',
          sender: 'user',
          id:'id3'
        },{
          message: 'Today is March 12',
          sender: 'robot',
          id:'id4'

          }]); 
       //const [chatMessages, setChatMessages] = array;
       //const chatMessages = array[0];
       //const setChatMessages = array[1];
      
          return(
            <div className="app-container">
              
               <ChatMessages 
                chatMessages = {chatMessages}
               />  
               <ChatInput
                chatMessages={chatMessages} 
                setChatMessages ={setChatMessages}              
                />      
          </div>
      );
       }

export default App
