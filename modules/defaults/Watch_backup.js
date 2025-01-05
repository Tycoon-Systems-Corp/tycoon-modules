import React from 'react'
import Link from 'next/link'
import { Player, ChaptersContainer } from '@tycoonsystems/tycoon-modules/streaming/watch'
import { Chat } from '@tycoonsystems/tycoon-modules/streaming/chat'
import DonateButton from '@tycoonsystems/tycoon-modules/ecommerce/donate/DonateButton'
import { CommentInternal } from '@tycoonsystems/tycoon-modules/comment'
import { LoadComments } from '@tycoonsystems/tycoon-modules/comment/parts'
import { selectThisText } from '@tycoonsystems/tycoon-modules/utility/utility/event'

const Module = props => {
    return (
        <div className={`${props?.WatchPageStyles?.videoQuadrant} WatchPage_VideoQuadrant ${props?.simplifiedPlayer ? 'Watch_SimplifiedPlayerContainerQuadrant' : ''}`} style={{ height: `calc(100vh - ${props?.menuConfig?.height})` }}>
            {
                props?.simplifiedPlayer
                    ? <div className={`${props?.WatchPageStyles?.videoExternalContainer} Watch_SimplifiedPlayerContainer`}>
                        <div className={`${props?.WatchPageStyles?.videoInternalContainer}`} style={{ background: 'transparent' }}>
                            <div className={`${props?.WatchPageStyles?.videoChatContainer}`}>
                                <Player { ...props } />
                            </div>
                            <div className={`${props?.WatchPageStyles?.metaContainer}`}>
                                <h3 className={`${props?.WatchPageStyles?.title}`}>{props?.watchMeta?.title ?? ''}</h3>
                                <div className={`${props?.WatchPageStyles?.metaContainerInner} gap-p10`}>
                                    <div className={`${props?.WatchPageStyles?.metaAuthorMetaContainer} gap-p10`}>
                                        <Link href={`/p?u=${props?.watchMeta?.authorData?.id}`} style={{ display: 'block' }}>
                                            <img className={`${props?.WatchPageStyles?.watchIcon}`} src={`${props?.watchMeta?.authorData?.icon ? props.watchMeta.authorData.icon.match(/^https?:.*/) ? props.watchMeta.authorData.icon : `${props?.cdn?.static}/${props.watchMeta.authorData.icon}` : 'img/default/greyIcon.png'}`} />
                                        </Link>
                                        <div>
                                            <Link href={`/p?u=${props?.watchMeta?.authorData?.id}`} style={{ display: 'block' }}>
                                                <h4 className={`${props?.WatchPageStyles?.username}`}>{`${props?.watchMeta?.authorData?.username ?? ''}`}</h4>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className={`${props?.WatchPageStyles?.videoExternalContainer}`}>
                        <div className={`${props?.WatchPageStyles?.videoInternalContainer}`}>
                            <div className={`${props?.WatchPageStyles?.videoChatContainer}`}>
                                <Player { ...props } />
                                <Chat  { ...props } />
                            </div>
                            <div className={`${props?.WatchPageStyles?.commandPanelContainer} ${props?.chatState ? `${props?.WatchPageStyles?.commandPanelContainerOpen}` : ``}`}>
                                <div>
                                    {
                                        props?.watchMeta?.id
                                            ? <div className={`${props?.WatchPageStyles?.metaContainer}`}>
                                                <h3 className={`${props?.WatchPageStyles?.title}`}>{props?.watchMeta?.title ?? ''}</h3>
                                                <div className={`${props?.WatchPageStyles?.metaContainerInner} gap-p10`}>
                                                    <div className={`${props?.WatchPageStyles?.metaAuthorMetaContainer} gap-p10`}>
                                                        <Link href={`/p?u=${props?.watchMeta?.authorData?.id}`} style={{ display: 'block' }}>
                                                            <img className={`${props?.WatchPageStyles?.watchIcon}`} src={`${props?.watchMeta?.authorData?.icon ? props.watchMeta.authorData.icon.match(/^https?:.*/) ? props.watchMeta.authorData.icon : `${props?.cdn?.static}/${props.watchMeta.authorData.icon}` : 'img/default/greyIcon.png'}`} />
                                                        </Link>
                                                        <div>
                                                            <Link href={`/p?u=${props?.watchMeta?.authorData?.id}`} style={{ display: 'block' }}>
                                                                <h4 className={`${props?.WatchPageStyles?.username}`}>{`${props?.watchMeta?.authorData?.username ?? ''}`}</h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={`${props?.WatchPageStyles?.metaSimpleContainer}`}>
                                                        <div className={`${props?.WatchPageStyles?.socialContainer} flex gap-p5`}>
                                                            <div>
                                                                <button className='Ecommerce_CommandPanelButton' onClick={props?.handleInitiateAction} action='subscribe' m={props?.watchMeta?.authorData?.id}>
                                                                    <span>Subscribe</span>
                                                                </button>
                                                            </div>
                                                            <DonateButton { ...props } donateTo={`${props?.watchMeta?.donateTo ?? ''}`}></DonateButton>
                                                        </div>
                                                        <div className={`${props?.WatchPageStyles?.socialContainer} flex gap-p5`}>
                                                            <div className={`${props?.WatchPageStyles?.likeDislikeContainer}`}>
                                                                <button className={`${props?.WatchPageStyles?.like} Ecommerce_CommandPanelButton`} onClick={props?.handleInitiateAction} action='like' m={props?.watchData?.id} usetype={props?.watchData?.__typename} existing={`${props?.watchMeta?.liked}`}>
                                                                    <div className={`material-icons ${props?.watchMeta?.liked ? '' : 'material-icons-outlined'} Ecommerce_Like_Icon`}>thumb_up</div>
                                                                </button>
                                                                <button className={`${props?.WatchPageStyles?.dislike} Ecommerce_CommandPanelButton`} onClick={props?.handleInitiateAction} action='dislike' m={props?.watchData?.id} usetype={props?.watchData?.__typename} existing={`${props?.watchMeta?.disliked}`}>
                                                                    <div className={`material-icons ${props?.watchMeta?.disliked ? '' : 'material-icons-outlined'} Ecommerce_Dislike_Icon`}>thumb_down</div>
                                                                </button>
                                                            </div>
                                                            <div selectValue={`${props?.watchData?.id && props?.domainUrl ? `${props.domainUrl}/w?v=${props.watchData.id}` : ''}`} onClick={selectThisText}>
                                                                <button className={`${props?.WatchPageStyles?.share} Ecommerce_CommandPanelButton`}>
                                                                    <div className='material-icons Ecommerce_Share_Icon' style={{ paddingRight: '5px' }}>send</div>
                                                                    <span>Share</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    props?.watchMeta?.date?.date 
                                                        ? <div className={`${props.WatchPageStyles?.dateContainer}`}>
                                                            <p>{props.watchMeta.date.month} {props.watchMeta.date.date}{props.watchMeta.date.suffix}, {props.watchMeta.date.year}, {props.watchMeta.date.time}</p>
                                                        </div>
                                                        : null
                                                }
                                                {
                                                    props?.watchMeta?.description !== ''
                                                        ? <div className={`${props?.WatchPageStyles?.descriptionContainer}`} >
                                                            <p style={{ marginTop: '1rem', fontSize: '.9rem' }}>{props.watchMeta.description}</p>
                                                        </div>
                                                        : ''
                                                }
                                                <ChaptersContainer { ...props } />
                                                <div className='tagContainer' style={{ marginTop: '.25rem' }}>
                                                    {
                                                        props?.watchMeta?.tags?.map((d, i) => {
                                                            return (d !== '' ? <div className='tagItem' key={i}>{d}</div> : <div></div>)
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                            <div className={`${props?.WatchPageStyles?.commentContainer}`}>
                                {
                                    props?.watchData?.id
                                        ? <div className={`${props?.WatchPageStyles?.commentExternalContainer}`}>
                                            <CommentInternal { ...props } addComment={true} commentUseParent={props.watchData.id} commentUseParentType={props?.watchData?.__typename} pipe={'watch_comment'} />
                                            <LoadComments { ...props } pipe={'watch_comment'} commentUseParent={props.watchData.id} commentUseParentType={props?.watchData?.__typename} />
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
            }
            
        </div>
    )
}

export default Module
