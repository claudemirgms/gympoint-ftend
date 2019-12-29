import styled from 'styled-components';

export const Container = styled.div`    
  width: 100%;
  height: 100%;
  max-height: 65px;
  background-color: #FFF;

  display: flex;
  flex-direction: row;
  align-items: center;  

  border-bottom: #aaa 2px solid;
`;

export const Head = styled.div` 
  height: 25px;
  font-size: 15px;
  font-weight: bold;  
  width: 100%

  display: flex;
  flex-direction: row;
  align-items: center;  
  
`;
export const Logo = styled.div` 
  margin-left: 30px    
  border-right: #ddd solid 1px;
  min-width: 160px;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  img {        
    height: 24px;     
  }  
  strong {
    margin-left: 10px;    
    color: #EE4D64;    
  }
`;

export const Nav = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 480px;
  ul {
    padding:0px;
    margin:0px;      
    list-style:none;

    li { 
      display: inline; 
      
      a {
        margin-left: 30px;
        color: #000;
        display: inline-block;      
        text-decoration: none;          

        &:hover {            
          color: #999;        
        } 
      }
    }
  }  
`;
export const Aside = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;    
  min-width: 200px;
  width: 100%;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #d00;
    }
  }
`;
