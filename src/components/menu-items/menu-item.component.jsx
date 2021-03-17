import React from 'react'
import '../menu-items/menu-item.style.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, imageUrl, history, linkUrl, match})=>{
    return(
        <div className='menu-item' onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{
               backgroundImage:`url(${imageUrl})` 
            }}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)