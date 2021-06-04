import { FaHeart, FaBookmark, FaFacebookMessenger } from 'react-icons/fa';
// import Image from 'next/image';

import { Card as CardFeed, CardFooter, Icon } from './styles';

const Card = () => (
  <div>
    <CardFeed>
      {/* <Image
        src="/card-placeholder.jpeg"
        alt="Picture of the author"
        width={100}
        height={100}
      /> */}
      {/* <Image
        src="/card-placeholder.jpeg"
        alt="Picture of the author"
        layout="fill"
        style={{ position: 'relative' }}
      /> */}
    </CardFeed>
    <CardFooter>
      <Icon>
        <FaHeart size="1.5em" />
      </Icon>
      <Icon>
        <FaFacebookMessenger size="1.5em" />
      </Icon>
      <Icon>
        <FaBookmark size="1.5em" />
      </Icon>
    </CardFooter>
  </div>
);

export default Card;
