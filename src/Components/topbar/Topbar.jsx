import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>domadmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://yt3.ggpht.com/PQvTE7XEk7MnmNOcfjbu8vkKVSTB2YzrIofgLCdavKgSr_UkC5Wh3GssqF8HbO4qVKmBm48Zvw=s176-c-k-c0x00ffffff-no-rj'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  )
}
