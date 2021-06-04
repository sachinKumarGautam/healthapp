import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Home = styled.div`
  padding: 5px;
  width: 100%;
  margin-to: 18px;
  > span {
    color: Black;
    font-weight: bold;
    font-size: 24px;
    margin-top: 18px;
  }
`;

export const Nav = styled.div`
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

// export const NavItem = styled.div`
// height: 60,
// width: '100%',
// position: 'fixed',
// bottom: 0,
// border: '1px solid black'
// `;

export const Card = styled.div`
  height: 200px;
  border: 1px solid grey;
  border-radius: 12px;
  padding: 10px;
  margin: 38px 0;
`;
