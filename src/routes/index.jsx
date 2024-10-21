// router.js
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Loadable from 'components/Loadable'
import GuestGuard from 'components/guards/GuestGuard'
import AuthGuard from 'components/guards/AuthGuard'
import RoleGuard from 'components/guards/RoleHGuard'
import { role } from 'constants'

const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')))
const Users = Loadable(lazy(() => import('pages/dashboard/users/index')))
const CreateUser = Loadable(lazy(() => import('pages/dashboard/users/createUser')))
const EvidenceOrders = Loadable(lazy(() => import('pages/dashboard/evidence/index')))
const Organizations = Loadable(lazy(() => import('pages/dashboard/organization/index')))
const OrganizationCreate = Loadable(lazy(() => import('pages/dashboard/organization/createOrganization')))
const EvidenceCreateOrder = Loadable(lazy(() => import('pages/dashboard/evidence/createEvidence')))
const OrderUser = Loadable(lazy(() => import('pages/dashboard/users/orderUser')))
const Settings = Loadable(lazy(() => import('pages/settings/index')))
const DashboardLayout = Loadable(lazy(() => import('layout/Dashboard/index')))
const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout')))
const PdfCreate = Loadable(lazy(() => import('pages/dashboard/pdf/index')))

// ==============================|| ROUTING RENDER ||============================== //

const routes = [
  {
    path: '/',
    element: (
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: 'login',
        element: <AuthLogin />
      }
    ]
  },
  {
    path: '/dashboard/users',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.admin, role.super_admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Users />
      }
    ]
  },
  {
    path: '/dashboard/create/user',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.admin, role.super_admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <CreateUser />
      }
    ]
  },
  {
    path: 'settings',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.admin, role.super_admin, role.user]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Settings />
      }
    ]
  },
  {
    path: '/dashboard/evidence/orders',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.admin, role.super_admin, role.user]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <EvidenceOrders />
      }
    ]
  },
  {
    path: '/dashboard/evidence/create/order',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.admin, role.super_admin, role.user]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <EvidenceCreateOrder />
      }
    ]
  },
  {
    path: '/dashboard/evidence/order/:id',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.admin, role.super_admin, role.user]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <EvidenceCreateOrder />
      }
    ]
  },
  {
    path: '/dashboard/organization',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.super_admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Organizations />
      }
    ]
  },
  {
    path: '/dashboard/organization/create',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.super_admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <OrganizationCreate />
      }
    ]
  },
  {
    path: '/dashboard/organization/:id',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.super_admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <OrganizationCreate />
      }
    ]
  },
  {
    path: '/dashboard/evidence/users',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.super_admin, role.admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <OrderUser />
      }
    ]
  },
  {
    path: '/dashboard/pdf/data',
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[role.super_admin, role.admin]}>
          <DashboardLayout />
        </RoleGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <PdfCreate />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/dashboard/evidence/orders' replace />
  }
]

export default routes
