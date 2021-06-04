import { Home as StyledHome } from './styles';
import connect from './store';
import Card from '../shared/cardDefault';
import Footer from '../shared/footer';

const Home = () => (
  <>
    <StyledHome>
      <span>Welcome to health App</span>
      <div>
        <Card>Hey this is a awesome fact about covid</Card>
        <Card>Hey this is a awesome fact about covid</Card>
        <Card>Hey this is a awesome fact about covid</Card>
        <Card>Hey this is a awesome fact about covid</Card>
        <Card>Hey this is a awesome fact about covid</Card>
      </div>
    </StyledHome>
    <Footer />
  </>
);

export default connect(Home);
