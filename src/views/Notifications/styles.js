import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #808080;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  box-sizing: border-box;
  max-height: 80vh;
  overflow-x: auto;

`;

export const Notification = styled.div`
  width: 100%;
  max-width: 300px;
  background: #606060;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  
`;


export const Title = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  color: #fff;
  font-size: 14px;  
  text-align: center;
  margin: 0;
  background: rgba(0, 0, 0, 0.2);

`;
