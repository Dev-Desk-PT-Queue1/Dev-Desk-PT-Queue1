import styled from 'styled-components';
//Styled-Components for App Component

export const MainDivApp = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    .content {
        flex: 1 0 auto;
    }

    footer {
        flex-shrink: 0;
    }`;

//Styled-Components for the layout components

export const SFooter = styled.footer`
    text-align: center;
    background: #fff;
    padding: 1.6rem 0;

    a {
        color: #08addd;
    }`;

    export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
    background: #efeff3;
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: #999 1px 2px 5px;
    a {
      color: #08addd;
      text-decoration: none;
    }
    input {
      font-size: 1rem;
      margin-bottom: 1rem;
      border: 1px solid gray;
      border-radius: 3px;
      height: 30px;
      padding-left: 12px;
      outline: none;
      &::placeholder {
        color: gray;
      }
    }
    button {
      padding: 0.5rem 0.5rem;
      background: #bb1333;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 3px;
      &:hover {
        color: #bb1333;
        background: #fff;
      }
    }
    .extra {
      margin-top: 1rem;
      text-align: center;
    }
    .error {
      background: #fff6f6;
      border-radius: 3px;
      padding: 0.5rem 0;
      color: #9f3a38;
      text-align: center;
      margin-top: 1rem;
    }
    .success {
      background: #fcfff5;
      border-radius: 3px;
      padding: 0.5rem 0;
      color: #2c662d;
      text-align: center;
      margin-top: 1rem;
    }
  `;
  
  export const LoginHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 1rem;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }
    h1 {
      font-size: 1.5rem;
    }
  `;
  