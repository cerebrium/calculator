import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SubContainer = styled.div`
  display: flex;
  border: 2px solid #222831;
  padding: 3px 6px;
  margin: 3px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  :hover {
    background-color: #cc3d3d;
    color: white;
    transition: 0.6s;
    cursor: pointer;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  border: 2px solid #222831;
  padding: 3px 6px;
  margin: 3px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Operator = styled.div`
  display: flex;
  padding: 3px 6px;
  margin: 3px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: green;
`;
