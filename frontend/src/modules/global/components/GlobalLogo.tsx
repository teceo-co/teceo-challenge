import { Link } from 'react-router';
import { TECEO_SVG_LOGO } from '../../../constants/images.constants';

const GlobalLogo = () => {
  return (
    <Link to="/">
      <img src={TECEO_SVG_LOGO} />
    </Link>
  );
};

export default GlobalLogo;
