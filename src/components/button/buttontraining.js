import axios from "axios";
import React, { useEffect, useState } from "react";
const ButtonTraining = ({ isActive }) => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/86d727c6-d11e-4dce-a033-d4fc5b22dfea")
      .then((result) => setFeatures(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <button disabled={!isActive}>Обучение</button>
    </div>
  );
};
export default ButtonTraining;
