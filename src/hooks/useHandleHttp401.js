import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';
import { useAuth } from './use-auth';

export const useHandleHttp401 = () => {
  const router = useRouter();
  const { logout } = useAuth();
  logout();
  router.push('/?q=logout').catch(console.error);
};
