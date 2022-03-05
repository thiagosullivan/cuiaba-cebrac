import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-bottom: 3rem;
`
export const TopHead = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem 0;
  
  .head__flag {
    margin-right: 10px;
    width: 30px;
    height: 20px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
  }

  p {
    font-size: 10px;
    font-weight: bold;
  }
`

export const BottomHead = styled.div`

  display: flex;
  align-items: center;
  max-width: 1300px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: .5rem 1rem;

  border-top: 1px solid ${({ theme }) => theme.blueOne};
  border-bottom: 1px solid ${({ theme }) => theme.blueOne};
`

export const NavHead = styled.nav`
  
  ul {
    display: flex;
    align-items: center;
    
    li {
      margin: 0 25px;
      text-align: center;
      font-size: 12px;

      a {
        font-family: 'Work Sans', sans-serif;
        color: ${({ theme }) => theme.blueOne};
        font-weight: bold;
      }
    }
  }

`