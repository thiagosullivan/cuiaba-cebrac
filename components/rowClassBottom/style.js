import styled from "styled-components";

export const RowClassBottomContainer = styled.div`
  .row_class_bottom_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 3.5rem;
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Work Sans', sans-serif;

    .row_class_bottom_col1,
    .row_class_bottom_col2,
    .row_class_bottom_col3 {
      display: flex;
      align-items: center;

      p {
        color: #ffffff;
        margin-left: 1rem;
        font-weight: bold;
      }
    }
    .row_class_bottom_col2,
    .row_class_bottom_col3 {
      p {
        max-width: 250px;
        margin-bottom: 0.5rem;
        text-transform: uppercase;

        &:nth-child(2) {
          font-size: 12px;
          text-transform: inherit;
          font-weight: inherit;
        }
      }
      
    }
  }
`