import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { role as roleConstants } from 'constants';
import { useAuth } from 'hooks/useAuth';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PdfIcon from '@mui/icons-material/PictureAsPdf';

const drawerItems = [
  {
    category: 'Hlavné menu',
    items: [
      {
        name: 'Organizácie',
        path: '/dashboard/organization',
        icon: <CorporateFareIcon />,
        roles: [roleConstants.super_admin]
      },
      {
        name: 'Objednávky',
        path: '/dashboard/evidence/orders',
        icon: <WorkIcon />,
        roles: [roleConstants.super_admin, roleConstants.admin, roleConstants.user]
      },
      {
        name: 'Používatelia',
        path: '/dashboard/users',
        icon: <PersonIcon />,
        roles: [roleConstants.super_admin, roleConstants.admin]
      },
      {
        name: 'História zákazníkov',
        path: '/dashboard/evidence/users',
        icon: <PersonIcon />,
        roles: [roleConstants.super_admin, roleConstants.admin]
      }
    ]
  },
  {
    category: 'Správa',
    items: [
      {
        name: 'Nastavenia',
        path: '/settings',
        icon: <SettingsIcon />,
        roles: [roleConstants.super_admin, roleConstants.admin, roleConstants.user]
      },
      {
        name: 'Pdf generátor',
        path: '/dashboard/pdf/data',
        icon: <PdfIcon />,
        roles: [roleConstants.super_admin, roleConstants.admin]
      }
    ]
  }
];

export default function MainDrawer({ drawerWidth, window, open, handleDrawerClose, toggleDrawer }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [activeItem, setActiveItem] = React.useState('');

  React.useEffect(() => {
    const path = drawerItems.flatMap(category => category.items).find((item) => item.path === location.pathname);
    setActiveItem(path ? path.path : '');
  }, [location.pathname]);

  const handleClickedItem = (path) => {
    setActiveItem(path);
    navigate(path);
    handleDrawerClose();
  };

  const filteredDrawerItems = React.useMemo(() => {
    return drawerItems.map(category => ({
      ...category,
      items: category.items.filter(item => item.roles.includes(user.role))
    })).filter(category => category.items.length > 0);
  }, [user.role]);

  const DrawerList = (
    <Box sx={{ width: 220, overflow: "hidden!important", mt: 12 }}> {/* Added margin top */}
      {filteredDrawerItems.map((category, categoryIndex) => (
        <React.Fragment key={category.category}>
          <Typography 
            variant="overline" 
            sx={{ pl: 2, color: 'text.secondary', fontWeight: 'bold' }}
          >
            {category.category}
          </Typography>
          <List>
            {category.items.map((item, index) => (
              <ListItem
                key={item.name}
                selected={item.path === activeItem}
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  '&.Mui-selected': {
                    backgroundColor: 'grey.200',
                    color: 'primary.main',
                    '& .MuiListItemIcon-root': {
                      color: 'primary.main'
                    }
                  },
                  '&:hover': {
                    backgroundColor: 'grey.100'
                  }
                }}
                disablePadding
              >
                <ListItemButton onClick={() => handleClickedItem(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {categoryIndex < filteredDrawerItems.length - 1 && <Divider sx={{ my: 2 }} />}
        </React.Fragment>
      ))}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Drawer
        container={container}
        variant='temporary'
        open={open}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      > 
        {DrawerList}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}