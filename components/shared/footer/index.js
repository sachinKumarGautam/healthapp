import { FaHSquare, FaPlusCircle, FaUser } from 'react-icons/fa';
import Link from 'next/link';

import Nav from './styles';

const Footer = () => (
  <Nav>
    <Link href="/">
      <FaHSquare size="1.5em" />
    </Link>
    <FaPlusCircle size="1.5em" />
    <Link href="/profile">
      <FaUser size="1.5em" />
    </Link>
  </Nav>
);

export default Footer;
