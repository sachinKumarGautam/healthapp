import { FaHSquare, FaPlusCircle, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => (
    <div className="w-full flex fixed bottom-0 items-center bg-white justify-around h-16 shadow-lg">
        <Link href="/" passHref>
            <div>
                <FaHSquare className="w-10" size="1.5em" />
            </div>
        </Link>
        <FaPlusCircle size="1.5em" />
        <Link href="/profile" passHref>
            <FaUser size="1.5em" />
        </Link>
    </div>
);

export default Footer;
/*
const Nav = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

*/
