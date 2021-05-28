import { Home as StyledHome, Nav, Card } from './styles';
import connect from './store';

const Home = () => (
  <StyledHome>
    <span>Welcome to health App</span>
    <div>
      <Card>Hey this is a awesome fact about covid</Card>
      <Card>Hey this is a awesome fact about covid</Card>
      <Card>Hey this is a awesome fact about covid</Card>
      <Card>Hey this is a awesome fact about covid</Card>
      <Card>Hey this is a awesome fact about covid</Card>
    </div>
    <Nav>
      <div>Home</div>
      <div>Chats</div>
      <div>Profile</div>
    </Nav>
  </StyledHome>
);

export default connect(Home);
