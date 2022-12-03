import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
export const Table = styled.table`
  margin-bottom: 20px;
  width: 60%;

  border: 1px solid gray;
  padding: 10px;
  tr {
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.2fr 0.2fr;
  }
  thead {
    border-bottom: 2px solid gray;
  }
  td {
    border: 1px solid gray;

    padding: 5px;
  }
`;

export const BtnEdit = styled.button`
  background: whitesmoke;
  color: gray;
`;

export const BtnDelete = styled.button`
  background: gray;
  color: whitesmoke;
`;
