import styled from 'styled-components';

export const List = styled.ul`
  width: 380px;
  display: flex;
  flex-direction: column;
  gap 12px;
  margin: auto;
  font-weight: 500;
  font-style: oblique;

  li {
    display: flex;
    // color: blue;

    span:first-child {
      padding: 2px;
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
      margin-right: auto;
      margin-bottom: 4px;
      color: #000000;
    }

    button {
      height: 24px;
      font-size: 12px;
      margin-left: 36px;
      padding: 2px 8px;
      color: grey;
      background-color: #d9ead3;
      border: none;
      border-radius: 4px;
    }

     button:hover,
    button:focus {
    background-color: #93c47d;
    color: white;
  }
`;
