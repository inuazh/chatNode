import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props)  =>{
  const chatProps = useMultiChatLogic(
    "44a95a98-1fcf-407a-9985-78884ba4be5b",
     props.user.username,
      props.user.secret
    
    );
  return (
    <div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
  </div>
)

}

export default ChatsPage