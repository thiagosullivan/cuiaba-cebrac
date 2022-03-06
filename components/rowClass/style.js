import styled from "styled-components";

export const RowClassContainer = styled.div`
  .row_class_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;

    p {
      margin-right: 6rem;
      font-size: 2.1rem;
      color: #ffffff;
      font-weight: bold;
    }

    a {
      padding: 0.8rem 2.5rem;
      color: #ffffff;
      background-color: ${({ theme }) => theme.blackOne};
      border: 2px solid ${({ theme }) => theme.blackOne};
      transition: all 150ms ease-in;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.blackOne};
      }
    }
  }
`