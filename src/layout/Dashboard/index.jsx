import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import MainDrawer from './Drawer'
import Profile from './Header/HeaderContent/Profile'
import { Outlet } from 'react-router-dom'

const drawerWidth = 250

export default function DashboardLayout () {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerClose = () => {
    if (mobileOpen) {
      setMobileOpen(false)
    } else {
      setMobileOpen(false)
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  React.useEffect(() => {
    const handleWindowWidthChange = () => {
      if (window.innerWidth < 1280) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleWindowWidthChange)
    return () => {
      window.removeEventListener('resize', handleWindowWidthChange)
    }
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Profile />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        <MainDrawer open={mobileOpen} handleDrawerClose={handleDrawerClose} toggleDrawer={handleDrawerToggle} drawerWidth={drawerWidth} />
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: ['64px', '64px', '64px'] // Adjust based on your AppBar height
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
