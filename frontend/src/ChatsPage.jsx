import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props)  =>{
  const chatProps = useMultiChatLogic(
    "5e20f0a4-dde1-4764-b847-1553ae404dd2",
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