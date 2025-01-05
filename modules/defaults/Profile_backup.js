import React from 'react'
import { AdminPanel, BeginStream, UsernameContainer, UserFeed, UserIcon, UserShop, Follow, Message } from '@tycoonsystems/tycoon-modules/profile'
import { IndexHello } from '@tycoonsystems/tycoon-modules/presentation/hello/IndexHello'

const Module = props => {
    return (
        <div>
            <AdminPanel { ...props } />
            {
                props?.profileData?.user
                    ? <div>
                        <div className={`${props?.className ?? ''} flex wrap gap-p10 PagePadding pTop ProfilePage_ProfileContainer`}>
                            <UserIcon { ...props } />
                            <div>
                                <div className={`flex wrap gap-p5 al-cen`} style={{ height: 'fit-content' }}>
                                    <UsernameContainer { ...props } />
                                    <BeginStream { ...props } />
                                    <Follow { ...props } />
                                    <Message { ...props } />
                                </div>
                            </div>
                        </div>
                        <UserFeed { ...props } />
                        <h3 style={{ padding: '0 1rem' }}>Videos</h3>
                        <div className='ProfilePage_Feed'>
                            {/* <GridList loggedIn={props._loggedIn} _gridItems={props.videoCombinedFeed ?? []} _gridListType={'video'} {...props}></GridList> */}
                            <IndexHello { ...props } groupLabel={'Most Recent'} items={props?.videoData?.videos ?? []} />
                        </div>
                        <UserShop { ...props } />
                    </div>
                    : null
            }
        </div>
    )
}

export default Module
