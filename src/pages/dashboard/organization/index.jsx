import React, { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Box
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import OrganizationService from 'services/OrganizationService'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
import Loader from 'components/Loader'

const OrganizationTable = () => {
  const [organizations, setOrganizations] = useState([])
  const [loading, setLoading] = useState(true)
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOrganizations = async () => {
      setLoading(true)
      try {
        const data = await OrganizationService.getAll()
        setOrganizations(data)
        enqueueSnackbar('Organizácie boli úspešne načítané', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' })
      }
      setLoading(false)
    }

    fetchOrganizations()
  }, [])

  const handleDelete = async id => {
    try {
      await OrganizationService.delete(id)
      setOrganizations(prev => prev.filter(org => org.id !== id))
      enqueueSnackbar('Organizácia bola úspešne vymazaná', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: 'error' })
    }
  }

  return (
    <Container>
      <Box mt={4}>
        <Typography variant='h4' sx={{ mb: 3 }}>
          Spoločnosti
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button variant='contained' color='primary' onClick={() => navigate('/dashboard/organization/create')}>
            Vytvoriť spoločnosť
          </Button>
        </Box>
      </Box>

      {loading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizations.map(org => (
                <TableRow key={org.id}>
                  <TableCell>{org.name}</TableCell>
                  <TableCell>{org.address}</TableCell>
                  <TableCell>
                    <IconButton color='secondary' aria-label='edit' onClick={() => navigate(`/dashboard/organization/${org.id}`)}>
                      <Edit />
                    </IconButton>
                    <IconButton color='secondary' aria-label='delete' onClick={() => handleDelete(org.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  )
}

export default OrganizationTable
