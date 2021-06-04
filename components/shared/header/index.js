import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Nav from './styles';

const Header = () => (
  <Nav>
    <Link prefetch href="/" passHref>
      <FaArrowLeft size="1.5em" />
    </Link>
  </Nav>
);

export default Header;
