import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
// export const NavItem = styled.div`
// height: 60,
// width: '100%',
// position: 'fixed',
// bottom: 0,
// border: '1px solid black'
// `;

// eslint-disable-next-line import/prefer-default-export
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
