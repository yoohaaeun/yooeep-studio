import React from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({
  children,
  requireAdmin,
}: ProtectedRouteProps) {
  const authContext = useAuthContext();

  const { user, loading } = authContext || {};

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
