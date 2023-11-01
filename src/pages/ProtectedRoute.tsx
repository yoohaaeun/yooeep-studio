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

  if (!user) {
    alert('로그인 후 이용해주세요.');
    return <Navigate to='/' replace />;
  }

  if (requireAdmin && !user.isAdmin) {
    alert('관리자 권한이 필요합니다. 권한이 없습니다.');
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
}
