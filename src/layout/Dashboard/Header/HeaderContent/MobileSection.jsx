import { useEffect, useRef, useState } from 'react'

// material-ui
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Popper from '@mui/material/Popper'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

// project import
import Profile from './Profile'
import Transitions from 'components/@extended/Transitions'

// assets
import MoreOutlined from '@ant-design/icons/MoreOutlined'

// ==============================|| HEADER CONTENT - MOBILE ||============================== //

export default function MobileSection () {

  return (
    <div style={{ display: 'flex' }}>
      <Profile />
    </div>
  ) 
}
