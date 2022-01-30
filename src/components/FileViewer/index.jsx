import React, { useState } from "react";
import {
  ViewerWrapper,
  ViewerContainer,
  ViewerLabel,
  FileTitle,
  FileContainer,
  IconContainer,
  ZoomContainer,
  FileIndexContainer,
  FileIndex,
} from "./styles";
import Icon from "../Icon";

const FileViewer = ({ data }) => {
  const [clickCount, setClickCount] = useState(0);
  const [currentFile, setCurrentFile] = useState(0);

  const length = data.length;

  const nextFile = () => {
    setCurrentFile(currentFile === length - 1 ? 0 : currentFile + 1);
    setClickCount(0);
  };

  const prevFile = () => {
    setCurrentFile(currentFile === 0 ? length - 1 : currentFile - 1);
    setClickCount(0);
  };

  const moveFile = (index) => {
    setCurrentFile(index);
    setClickCount(0);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

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
          <h3>{`${data[currentFile].file_name}${data[currentFile].extension}`}</h3>
        </FileTitle>
        <FileContainer scale={clickCount}>
          {data.map((file, index) => (
            <div
              key={index}
              className={
                index === currentFile ? "slide active scale" : "slide scale"
              }
            >
              {index === currentFile && (
                <img src={file.src} alt={file.file_name} className="image" />
              )}
            </div>
          ))}
        </FileContainer>
        <FileIndexContainer>
          {data.map((file, index) => (
            <FileIndex
              key={index}
              fileIndex={index}
              currentFile={currentFile}
              onClick={() => moveFile(index)}
            />
          ))}
        </FileIndexContainer>
        <IconContainer className="left-arrow" onClick={prevFile}>
          <Icon icon="ChevronLeftIcon" color="white" />
        </IconContainer>
        <IconContainer className="right-arrow" onClick={nextFile}>
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
