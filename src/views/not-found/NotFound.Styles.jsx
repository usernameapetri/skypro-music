import styled from 'styled-components';
import { ModalBtnEnter } from '../login/LoginStyles';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 50%; */
  /* margin: 50%; */
  justify-content: center;

  /* height: 100%; */
  padding-top: 140px;
`;

export const ErrorHeading = styled.h1`
  color: #fff;

  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: StratosSkyeng;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ErrorText = styled.p`
  color: #fff;

  font-variant-numeric: lining-nums proportional-nums;

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const ErrorBot = styled.p`
  color: #4e4e4e;

  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  /* Desk • 1366/Text M */

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
`;

export const ErrorBtn = styled(ModalBtnEnter)`
  width: 278px;
  height: 52px;
  flex-shrink: 0;
  margin-top: 36px;
`;
