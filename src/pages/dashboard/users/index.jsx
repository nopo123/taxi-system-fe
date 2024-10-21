import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
  Typography,
  Box,
  TextField,
  Container
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import UserService from 'services/UserService'
import { useNavigate } from 'react-router'
import { useAuth } from 'hooks/useAuth'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material'
import Loader from 'components/Loader'

const Users = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  // Fetch users from API
  useEffect(() => {
    setLoading(true)
    const fetchUsers = async () => {
      try {
        const userList = await UserService.getAll()
        // Filter out the current user
        setUsers(userList.filter(u => u.id !== user.id))
        enqueueSnackbar('Používatelia boli úspešne načítaní', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
    fetchUsers()
    setLoading(false)
  }, [])

  // Open dialog for editing
  const handleEdit = user => {
    setSelectedUser(user)
    setOpen(true)
  }

  // Handle user deletion
  const handleDelete = async userId => {
    try {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
      await UserService.delete(userId)
      enqueueSnackbar('Používateľ bol úspešne vymazaný', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: 'error' })
    }
  }

  // Handle navigation to create user page
  const handleNavigate = () => {
    navigate('/dashboard/create/user')
  }

  // Formik for personal data update
  const personalDataFormik = useFormik({
    initialValues: {
      firstName: selectedUser?.firstName || '',
      lastName: selectedUser?.lastName || '',
      email: selectedUser?.email || '',
      role: selectedUser?.role || ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string().required('Krstné meno je povinné'),
      lastName: Yup.string().required('Priezvisko je povinné'),
      email: Yup.string().email('Nepovolený formát emailu').required('Email je povinný'),
      role: Yup.string().required('Rola je povinná')
    }),
    onSubmit: async values => {
      try {
        // Update personal data in the backend
        await UserService.updateUser(selectedUser.id, values)
        setUsers(prevUsers => prevUsers.map(user => (user.id === selectedUser.id ? { ...user, ...values } : user)))
        setOpen(false)
        enqueueSnackbar('Osobné údaje boli úspešne aktualizované', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
  })

  // Formik for password update
  const passwordFormik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().min(8, 'Heslo musí mať aspoň 8 znakov').required('Heslo je povinné'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Heslá sa musia zhodovať')
        .required('Potvrdenie hesla je povinné')
    }),
    onSubmit: async values => {
      try {
        setUsers(prevUsers => prevUsers.map(user => (user.id === selectedUser.id ? { ...user, ...values } : user)))
        await UserService.updatePassword(selectedUser.id, values)
        setOpen(false)
        enqueueSnackbar('Heslo bolo úspešne aktualizované', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }
  })

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <Container maxWidth='lg' sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Používatelia
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Button variant='contained' color='primary' sx={{ height: 40, width: 150 }} onClick={handleNavigate}>
                Pridať používateľa
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Údaje</TableCell>
                    {!isMobile && <TableCell>Email</TableCell>}
                    <TableCell align='right'>Akcie</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Typography variant='body2'>
                          {user.firstName} {user.lastName}
                        </Typography>
                        {isMobile && (
                          <Typography variant='caption' color='textSecondary'>
                            {user.email}
                          </Typography>
                        )}
                      </TableCell>
                      {!isMobile && <TableCell>{user.email}</TableCell>}
                      <TableCell align='right'>
                        <IconButton onClick={() => handleEdit(user)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(user.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Edit User Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Upraviť používateľa</DialogTitle>
              <DialogContent>
                <form onSubmit={personalDataFormik.handleSubmit}>
                  <Typography variant='h4'>Aktualizácia osobných údajov</Typography>
                  <TextField
                    margin='dense'
                    label='Krstné meno'
                    name='firstName'
                    fullWidth
                    value={personalDataFormik.values.firstName}
                    onChange={personalDataFormik.handleChange}
                    error={personalDataFormik.touched.firstName && Boolean(personalDataFormik.errors.firstName)}
                    helperText={personalDataFormik.touched.firstName && personalDataFormik.errors.firstName}
                  />
                  <TextField
                    margin='dense'
                    label='Priezvisko'
                    name='lastName'
                    fullWidth
                    value={personalDataFormik.values.lastName}
                    onChange={personalDataFormik.handleChange}
                    error={personalDataFormik.touched.lastName && Boolean(personalDataFormik.errors.lastName)}
                    helperText={personalDataFormik.touched.lastName && personalDataFormik.errors.lastName}
                  />
                  <TextField
                    margin='dense'
                    label='Email'
                    name='email'
                    type='email'
                    fullWidth
                    value={personalDataFormik.values.email}
                    onChange={personalDataFormik.handleChange}
                    error={personalDataFormik.touched.email && Boolean(personalDataFormik.errors.email)}
                    helperText={personalDataFormik.touched.email && personalDataFormik.errors.email}
                  />
                  <FormControl fullWidth margin='normal' error={personalDataFormik.touched.role && Boolean(personalDataFormik.errors.role)}>
                    <InputLabel id='role-label'>Rola</InputLabel>
                    <Select
                      labelId='role-label'
                      id='role'
                      name='role'
                      value={personalDataFormik.values.role}
                      onChange={personalDataFormik.handleChange}
                      label='Rola'
                    >
                      <MenuItem value='user'>Zamestnanec</MenuItem>
                      <MenuItem value='admin'>Manažér</MenuItem>
                    </Select>
                    <FormHelperText>{personalDataFormik.touched.role && personalDataFormik.errors.role}</FormHelperText>
                  </FormControl>
                  <DialogActions>
                    <Button type='submit' color='primary'>
                      Uložiť
                    </Button>
                  </DialogActions>
                </form>
                <hr />
                <form onSubmit={passwordFormik.handleSubmit}>
                  <Typography variant='h4'>Aktualizácia hesla</Typography>
                  <TextField
                    margin='dense'
                    label='Nové heslo'
                    name='password'
                    type='password'
                    fullWidth
                    value={passwordFormik.values.password}
                    onChange={passwordFormik.handleChange}
                    error={passwordFormik.touched.password && Boolean(passwordFormik.errors.password)}
                    helperText={passwordFormik.touched.password && passwordFormik.errors.password}
                  />
                  <TextField
                    margin='dense'
                    label='Potvrďte heslo'
                    name='confirmPassword'
                    type='password'
                    fullWidth
                    value={passwordFormik.values.confirmPassword}
                    onChange={passwordFormik.handleChange}
                    error={passwordFormik.touched.confirmPassword && Boolean(passwordFormik.errors.confirmPassword)}
                    helperText={passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword}
                  />
                  <DialogActions>
                    <Button type='submit' color='primary'>
                      Uložiť
                    </Button>
                  </DialogActions>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color='secondary'>
                  Zrušiť
                </Button>
              </DialogActions>
            </Dialog>
          </Container>
        </Box>
      )}
    </>
  )
}

export default Users
