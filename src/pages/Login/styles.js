import styled from 'styled-components';

export const Container = styled.div`    
  height: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`    
  height: 448px;
  width: 360px;  
  background: #FFF;  
  border-radius: 4px;
  padding: 30px;
  
`;

export const Logo = styled.div`   
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;  

  img {
    height: 53px;
    margin-bottom: 10px;
  }

  strong {
    font-size: 30px;
    color:  #EE4D64;
  }
  
`;

export const Form = styled.div`    
  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height:45px;
      padding: 0 15px;
      font-size: 16px;
    }

    button {
      border: 0;
      width: 100%;
      height: 45px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: bold;
      background: #EE4D64;
      color: #FFF;
      cursor: pointer;
      border-radius: 4px;
    }
  }
`;



