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
  Box,
  Typography,
  Container
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSnackbar } from 'notistack'
import OrderUserService from 'services/OrderUserService'

const OrderUser = () => {
  const [users, setUsers] = useState([])
  const { enqueueSnackbar } = useSnackbar()

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await OrderUserService.getAll()
        setUsers(response)
        enqueueSnackbar('História zákazníkov načítaná úspešne', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
    }

    fetchUsers()
  }, [enqueueSnackbar])

  // Handle user deletion
  const handleDelete = async id => {
    try {
      await OrderUserService.delete(id)
      setUsers(users.filter(user => user.id !== id))
      enqueueSnackbar('Používateľ bol úspešne zmazaný', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: 'error' })
    }
  }

  return (
    <>
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            História zákazníkov
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Meno a priezvisko</TableCell>
                <TableCell>Akcia</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                    <TableCell>
                      <IconButton aria-label='delete' onClick={() => handleDelete(user.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default OrderUser
