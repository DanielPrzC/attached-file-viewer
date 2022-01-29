import styled, { css } from "styled-components";

export const ViewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const ViewerContainer = styled.div`
  width: 700px;
  height: 400px;
  border-radius: 10px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  .left-arrow {
    border-radius: 4px;
    padding: 6px;
    position: absolute;
    left: 16px;
    z-index: 5;
    &:hover {
      cursor: pointer;
      background: grey;
    }
  }
  .right-arrow {
    border-radius: 4px;
    padding: 6px;
    position: absolute;
    right: 16px;
    z-index: 5;
    &:hover {
      cursor: pointer;
      background: grey;
    }
  }
`;

export const ViewerLabel = styled.p`
  align-self: flex-start;
  margin: 0 0 8px;
`;

export const FileTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 5;
  h3 {
    color: white;
    margin: 0;
  }
`;

export const FileContainer = styled.div`
  width: 65%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  img {
    width: 100%;
  }
  ${({ scale }) =>
    scale === 1 &&
    css`
      transform: scale(1.2);
    `}
  ${({ scale }) =>
    scale === 2 &&
    css`
      transform: scale(1.4);
    `}
  ${({ scale }) =>
    scale === 3 &&
    css`
      transform: scale(1.6);
    `}
  ${({ scale }) =>
    scale === 4 &&
    css`
      transform: scale(1.8);
    `}
  ${({ scale }) =>
    scale === 5 &&
    css`
      transform: scale(2);
    `}
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ZoomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: fit-content;
  position: absolute;
  bottom: 24px;
  z-index: 5;
  .plus-icon,
  .minus-icon {
    border-radius: 4px;
    padding: 6px;
    &:hover {
      cursor: pointer;
      background: grey;
    }
  }
`;
