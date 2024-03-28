import React, { useEffect, useState } from "react";
import axios from "axios";
import "./list.css";

function List() {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/a0f2f550-a437-4585-bfbb-9e8eefb25076")
      .then((res) => setFiles(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (fileName, index) => {
    //alert("привет");
    localStorage.setItem("selectedFile", fileName);
    console.log(localStorage.getItem("selectedFile"));
    setSelected(index); // Set the selected index
  };

  return (
    <div>
      <ul>
        {files.map((file, index) => (
          <li
            key={index}
            onClick={() => handleClick(file, index)}
            className={selected === index ? "highlight" : ""}
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
