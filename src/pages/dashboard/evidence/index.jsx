import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableSortLabel,
  useMediaQuery,
  useTheme,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import { useSnackbar } from 'notistack';
import { useAuth } from 'hooks/useAuth';
import UserService from 'services/UserService';
import OrderService from 'services/OrderService';
import { role } from 'constants';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router';
import Loader from 'components/Loader';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [orderBy, setOrderBy] = useState('date');
  const [orderDirection, setOrderDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      try {
        let fetchedOrders;
        fetchedOrders = await OrderService.getAll(page);
        const _orders = [...orders, ...fetchedOrders];
        setOrders(_orders);
        enqueueSnackbar('Objednávky boli úspešne načítané', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error.response.data.message, { variant: 'error' });
      }
    };
    fetchOrders();
    setLoading(false);
  }, [page]);

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && orderDirection === 'asc';
    setOrderDirection(isAscending ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleDelete = async (orderId) => {
    try {
      await OrderService.delete(orderId);
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
      enqueueSnackbar('Objednávka bola úspešne vymazaná', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: 'error' });
    }
  };

  const handleViewDetails = (orderId) => {
    navigate(`/dashboard/evidence/order/${orderId}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (!orders || !orders.length) {
      setFilteredOrders([]);
    }

    const _filteredOrders = orders
      .filter((order) => {
        // Check if searchQuery matches the firstName, lastName, or route
        const matchesName =
          order.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.lastName.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesRoute = order.route.toLowerCase().includes(searchQuery.toLowerCase());

        // Check if the order date matches the filterDate
        const matchesDate = filterDate ? new Date(order.date).toDateString() === filterDate.toDateString() : true;

        return (matchesName || matchesRoute) && matchesDate;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return orderDirection === 'asc' ? dateA - dateB : dateB - dateA;
      });

    setFilteredOrders(_filteredOrders);
  }, [orders, searchQuery, filterDate, orderDirection]);

  const handleNavigate = () => {
    navigate('/dashboard/evidence/create/order');
  };

  const nextEvidences = () => {
    setPage(page + 20);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Objednávky zákazníkov
            </Typography>
            <Box sx={{ display: 'flex', mb: 2, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <TextField
                  label="Vyhľadávanie podľa mena"
                  variant="outlined"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  sx={{ width: '100%', maxWidth: 140 }}
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary" sx={{ height: 40, width: 150, p: 2 }} onClick={handleNavigate}>
                  Nová objednávka
                </Button>
              </Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Filtrovať podľa dátumu"
                  value={filterDate}
                  onChange={(newValue) => setFilterDate(newValue)}
                  renderInput={(params) => <TextField {...params} sx={{ width: '100%', maxWidth: 200 }} />}
                />
              </LocalizationProvider>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Údaje</TableCell>
                    {!isMobileOrTablet && <TableCell>Trasa</TableCell>}
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === 'date'}
                        direction={orderBy === 'date' ? orderDirection : 'asc'}
                        onClick={() => handleRequestSort('date')}
                      >
                        Dátum
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="right">Akcie</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Typography variant="body1">{`${order.firstName} ${order.lastName}`}</Typography>
                        {isMobileOrTablet && (
                          <Typography variant="body2" color="text.secondary">
                            Trasa: {order.route}
                          </Typography>
                        )}
                      </TableCell>
                      {!isMobileOrTablet && <TableCell>{order.route}</TableCell>}
                      <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => handleViewDetails(order.id)} size="small">
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(order.id)} size="small">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {orders && orders.length >= page + 20 && (
              <Button variant="contained" color="primary" onClick={nextEvidences} style={{ marginTop: 5 }}>
                Ďalšie
              </Button>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default OrderPage;
