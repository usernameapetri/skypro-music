import styled from 'styled-components';

const shouldForwardProp = (prop) => prop !== 'left';

export const PopupWrapper = styled.div.withConfig({ shouldForwardProp })`
  display: flex;
  flex-direction: column;
  padding: 34px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #313131;
  max-width: 248px;
  z-index: 2;
  position: absolute;
  top: 125%;
  left: ${(props) => props.left || '22%'};
`;

export const Popup = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-direction: column;
`;

export const PopupElement = styled.li`
  cursor: pointer;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`;
