import { FaHeart, FaBookmark, FaFacebookMessenger } from 'react-icons/fa';
import Image from 'next/image';

// import { Card as CardFeed, CardFooter, Icon } from './styles';

const Card = ({ children }) => (
    <div>
        <div className="relative border border-gray-50 rounded-xl p-3 my-3 h-44 min-h-full">
            <Image
                src="/card-placeholder.jpeg"
                alt="Picture of the author"
                layout="fill"
                // width={100}
                // height={100}
                // style={{ position: 'relative' }}
            />
        </div>
        <div
            style={{ minHeight: '55px' }}
            className="mt-3 border border-black flex items-center h-full rounded-lg"
        >
            <div style={{ height: 'fit-content' }} className="inline ml-5">
                <FaHeart size="1.5em" />
            </div>
            <div>
                <FaFacebookMessenger size="1.5em" />
            </div>
            <div>
                <FaBookmark size="1.5em" />
            </div>
        </div>
    </div>
);

export default Card;

/*
export const Card = styled.div`
  height: 200px;
  border: 1px solid grey;
  border-radius: 12px;
  padding: 10px;
  margin: 10px 0;
`;

export const CardFooter = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  align-content: center;
  height: 100%;
  min-height: 55px;
  align-items: center;
`;

export const Icon = styled.div`
  display: inline;
  margin-left: 18px;
  height: fit-content;
`;

*/
