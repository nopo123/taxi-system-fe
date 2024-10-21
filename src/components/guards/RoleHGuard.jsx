
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RoleGuard = (props) => {
  const { user } = useAuth();
  const { allowedRoles, children } = props;

  const hasAllowedRole = allowedRoles.some((role) =>
    user?.role.includes(role)
  );

  if (!hasAllowedRole && user) {
    return <Navigate to='*' />;
  }

  return <>{children}</>;
};

export default RoleGuard;