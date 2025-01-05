import React from 'react'
import SubMenu from '@tycoonsystems/tycoon-modules/menu/SubMenu.js'
import menuStyle from '@tycoonsystems/tycoon-modules/menu/Menu.module.scss'
import Search from './Search'
import MessagingInternal from '@tycoonsystems/tycoon-modules/social/messaging/MessagingInternal'

const Module = props => {
    return (
        <div className='Menu_MenuContainerInternal' style={{ padding: props?.menuPadding ?? '' }}>
            <nav aria-label='breadcrumb'>
                <ol style={{ paddingBottom: 0, paddingTop: 0, maxHeight: '100%' }} className={`margin1600 menuContainer`}>
                    <div className={`${props._loggedIn ? `${menuStyle.subMenu}` :  `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${menuStyle.menu}`}>
                        <SubMenu { ...props } type='img' name={'Platform'} width={80} heigth={20} src={'https://d2p2h79srr15gg.cloudfront.net/img/LOGO-rainbow.png'} local={true} href={props?.devAddress ? `${props.devAddress}` : `https://${props.domainUrl}`}></SubMenu>
                    </div>
                    <div className={`${menuStyle.menu} ${menuStyle.menuNoPadding}`}>
                        <Search { ...props } />
                    </div>
                    <div className={`${props._loggedIn ? `${menuStyle.subMenu}` :  `${menuStyle.subMenu} ${menuStyle.subMenuBottomPadding} subMenuContainer`} ${menuStyle.menu}`}>
                        <SubMenu {...props} type='link' muiIcon={'upload'} name='Upload' href={props?.devAddress ? `${props.devAddress}/upload` : `https://${props.domainUrl}/upload`}></SubMenu>
                        <SubMenu {...props} type='notifications' small={true}></SubMenu>
                        <SubMenu {...props} type='cart'></SubMenu>
                        <SubMenu {...props} type='user'></SubMenu>
                    </div>
                </ol>
            </nav>
            <MessagingInternal { ...props }></MessagingInternal>
        </div>
    )
}

export default Module
