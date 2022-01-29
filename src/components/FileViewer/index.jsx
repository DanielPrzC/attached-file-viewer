import React, { useState } from "react";
import {
  ViewerWrapper,
  ViewerContainer,
  ViewerLabel,
  FileTitle,
  FileContainer,
  IconContainer,
  ZoomContainer,
} from "./styles";
import Icon from "../Icon";

const FileViewer = () => {
  const [clickCount, setClickCount] = useState(0);

  const zoomIn = () => {
    if (clickCount < 5) {
      setClickCount(clickCount + 1);
    }
  };

  const zoomOut = () => {
    if (clickCount <= 5 && clickCount > 0) {
      setClickCount(clickCount - 1);
    }
  };

  return (
    <ViewerWrapper>
      <ViewerLabel>Attached files viewer</ViewerLabel>
      <ViewerContainer>
        <FileTitle>
          <IconContainer className="title">
            <Icon icon="PaperclipIcon" color="white" />
          </IconContainer>
          <h3>img001.jpeg</h3>
        </FileTitle>
        <FileContainer scale={clickCount}>
          <img
            src="https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip"
            alt="test"
          />
        </FileContainer>
        <IconContainer className="left-arrow">
          <Icon icon="ChevronLeftIcon" color="white" />
        </IconContainer>
        <IconContainer className="right-arrow">
          <Icon icon="ChevronRightIcon" color="white" />
        </IconContainer>
        <ZoomContainer>
          <IconContainer className="plus-icon" onClick={zoomIn}>
            <Icon icon="PlusIcon" color="white" />
          </IconContainer>
          <IconContainer className="minus-icon" onClick={zoomOut}>
            <Icon icon="MinusIcon" color="white" />
          </IconContainer>
        </ZoomContainer>
      </ViewerContainer>
    </ViewerWrapper>
  );
};

export default FileViewer;
