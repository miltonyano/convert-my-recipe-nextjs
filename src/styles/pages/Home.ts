import styled from 'styled-components';

export const Content = styled.div`
  padding: 32px;
`;

export const MainContentContainer = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RecipeContainer = styled.div`
  border: 1px solid #232129;
  border-radius: 10px;
  padding: 16px;
  height: fit-content;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Description = styled.div`
  margin-top: 16px;
  text-align: center;

  p {
    margin-bottom: 0;
  }
`;

export const UnitContentContainer = styled.section`
  padding-top: 16px;
`;

export const UnitHeader = styled.div`
  padding-bottom: 16px;
`;

export const UnitTitle = styled.h3`
  margin-bottom: 0;
`;

export const UnitCite = styled.cite`
  font-size: 12px;
`;

export const UnitContent = styled.div``;

export const UnitFooter = styled.p`
  font-size: 12px;
`;

export const ConversionTableContainer = styled.section`
  width: 75%;
  margin: auto;
  text-align: center;
  padding-top: 16px;
`;
