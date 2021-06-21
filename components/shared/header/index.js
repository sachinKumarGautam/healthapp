import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-16 w-full fixed flex justify-start bg-white px-5 top-0 items-center">
      <div onClick={() => router.back()}>
        <FaArrowLeft size="1.5em" />
      </div>
    </div>
  );
};
export default Header;
