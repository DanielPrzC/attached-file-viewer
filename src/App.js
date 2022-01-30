import React from "react";
import FileViewer from "./components/FileViewer";

const imageData = [
  {
    id: 1,
    file_name: "img001",
    extension: ".jpg",
    src: "https://img.theculturetrip.com/1440x/smart/images/56-3952461-1442312428ad594563dd744329af13db5754be75f3.jpg",
  },
  {
    id: 2,
    file_name: "img002",
    extension: ".jpg",
    src: "https://img.theculturetrip.com/1440x/smart/images/56-3952451-144231240620402a5b3c1f47468f79ca0891c6d828.jpg",
  },
  {
    id: 3,
    file_name: "img003",
    extension: ".jpg",
    src: "https://img.theculturetrip.com/1440x/smart/images/56-3952453-144231241062b6bbc70d20401d93e07025593c2539.jpg",
  },
  {
    id: 4,
    file_name: "img004",
    extension: ".jpg",
    src: "https://img.theculturetrip.com/1440x/smart/images/56-3952455-1442312414885dd321afae43b19c8e2856aa2922ee.jpg",
  },
  {
    id: 5,
    file_name: "img005",
    extension: ".jpg",
    src: "https://img.theculturetrip.com/1440x/smart/images/56-3952457-14423124193c80f4dad3b94f2ea6c8afdf9640feea.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <FileViewer data={imageData} />
    </div>
  );
}

export default App;
