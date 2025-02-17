import React from 'react'
import ChatStyles from '@tycoonsystems/tycoon-modules/streaming/chat/Chat.module.scss'
import WatchPageStyles from '@tycoonsystems/tycoon-modules/streaming/watch/WatchPage.module.scss'
import MessagingStyles from '@tycoonsystems/tycoon-modules/social/messaging/Messaging.module.scss'
import ChatLog from './ChatLog'
import { DonateBar } from '@tycoonsystems/tycoon-modules/streaming/chat'
import { RecentChatTimeout, ReplyTo, ReplyToInfo, ModChatTools } from '@tycoonsystems/tycoon-modules/streaming/chat/parts'
import TextareaAutosize from 'react-textarea-autosize'

const Module = props => {
    const { chatInputRef, blockChat, handleChatTextChange, handleKeyPressChat, handleSendChat, currentChat, blockSend, blockSendForce, renderDonations, handleRunTasks, windowWidth } = props

    return (
        <div className={`${props?.className ?? ''} ${WatchPageStyles.chatContainer} Chat_Container ${props?.chatState ? `${WatchPageStyles.chatOpen} Chat_ChatOpen` : `${WatchPageStyles.chatClosed} Chat_ChatClosed`} ${!props?.chatState && props?._isMobile ? `${WatchPageStyles.chatClosedMobile}` : null} WatchPage_ChatContainer ${props?.messageType === 'direct_message' ? `${MessagingStyles.chatContainer}` : null}`}>
            <div className={`${props.className} ${ChatStyles.chatContainer} Chat_ChatContainer`} style={{ height: `${!props.chatState ? 0 : windowWidth === null || windowWidth > 700 ? `100%` : '50vh'}` }} onClick={handleRunTasks}>
                <ModChatTools { ...props } />
                {renderDonations}
                <ChatLog { ...props } />
                <div className={`${ChatStyles.chatInputContainer} ${!props.chatState ? `${ChatStyles.forceHideChat}` : null} Chat_ChatInputContainer`}>
                    <div className={`${ChatStyles.chatInputInternalContainer} Chat_ChatInputInternalContainer`}>
                        <RecentChatTimeout { ...props } />
                        <DonateBar { ...props } />
                        <ReplyTo { ...props } />
                        <ReplyToInfo { ...props } />
                        <div className={`${ChatStyles.chatInputSendContainer} Chat_ChatInputSendContainer`}>
                            <TextareaAutosize className={`${ChatStyles.textChatInput} ${ChatStyles.highlightBorder} Chat_TextChatInput`} ref={chatInputRef} onKeyPress={(e) => {handleKeyPressChat(e, handleSendChat)}} onChange={handleChatTextChange} disabled={blockChat || !currentChat}/>
                            <button className={`${ChatStyles.send} ${ChatStyles.highlightBorder} Chat_Send`} onClick={handleSendChat} disabled={blockSend || blockSendForce}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Module
