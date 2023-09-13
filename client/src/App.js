import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const[result , setResult] = useState("")
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    const getImg = async() => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path)
      }
     
    };
    getImg();
  }, [file]);
  const logo =
    "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <div className="App">
      <div className="left">
        <img src={logo} alt="banner" />
        <div className="wrapper">
          <h1>Share Your Files</h1>
          <p>Upload file and share download link</p>
          <button onClick={() => onUploadClick()}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target="blank">{result}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
