import { useLocation, useNavigate, useParams } from '@reach/router';
import { useMemo } from 'react';

export { useMatch } from '@reach/router';

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      location,
      navigate,
      params,
      pathname: location.pathname,
    };
  }, [params, location, navigate]);
};
