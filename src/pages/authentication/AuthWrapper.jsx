import PropTypes from 'prop-types'

// material-ui
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

// project import
import Logo from 'components/logo'
import AuthCard from './AuthCard'

// assets
import AuthBackground from 'assets/images/auth/AuthBackground'

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid 
        container 
        direction='column' 
        justifyContent='center' 
        alignItems='center' 
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <AuthCard>{children}</AuthCard>
        </Grid>
      </Grid>
    </Box>
  )
}

AuthWrapper.propTypes = { children: PropTypes.node }
