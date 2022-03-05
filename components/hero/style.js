import styled from "styled-components";

export const HeroContainer = styled.section`
  
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.blueTwo};

  .banner__hero_img {
    max-width: 1260px;
    min-width: 750px;
    width: 100%;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 600px;
  padding: 3rem;
  background: ${({ theme }) => theme.blueTwo};

  input {
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.grayOne};
    margin: .5rem 0;
    font-family: 'Work Sans', sans-serif;
    padding-left: 1rem;
    color: ${({ theme }) => theme.grayTwo};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.grayTwo};
    }
  }

  button {
    height: 50px;
    color: ${({ theme }) => theme.blueTwo};
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Work Sans', sans-serif;
    background: ${({ theme }) => theme.blackOne};
    border: 2px solid ${({ theme }) => theme.blackOne};
    cursor: pointer;
    transition: all 150ms ease-in;
    margin-top: 1rem;
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.blueTwo};
      color: ${({ theme }) => theme.blackOne};
    }
  }
`