import { useRouter } from 'next/router';
import { useAuth } from '../hooks/use-auth';
import { useHandleHttp401 } from '../hooks/useHandleHttp401';

/**
 * Handle HTTP 401 error by logging out the user and redirecting to the login page.
 */
export const handleHttp401 = () => {
  useHandleHttp401();
};
