import React from 'react'
import { AddComment, ReadComment } from '@tycoonsystems/tycoon-modules/comment/parts'

const Module = props => {
    return (
        <div className={`Comment_Container ${props.className}`}>
            <AddComment { ...props } />
            <ReadComment { ...props } />
        </div>
    )
}

export default Module
