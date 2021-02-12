import { useLocation, useMatch, useNavigate, useParams } from '@reach/router';
import { useMemo } from 'react';

export const useRouter = (pathname?: string) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const match = useMatch(pathname ?? '');

  return useMemo(() => {
    return {
      location,
      match,
      navigate,
      params,
      pathname: location.pathname,
    };
  }, [params, match, location, navigate]);
};
