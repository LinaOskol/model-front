import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./button.css";

const ButtonPrognoz = ()=>{
    const [features, setFeatures] = useState([]);
  const [target, setTarget]=useState(" ")
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [isTargetChecked, setIsTargetChecked] = useState(false);


  useEffect(() => {
    axios
      .get("https://mocki.io/v1/86d727c6-d11e-4dce-a033-d4fc5b22dfea")
      .then((result) => {setFeatures(result.data.features);
      setTarget(result.data.target);})
      .catch((err) => console.log(err));
  }, []);

  const handleTargetChange = () => {
    setIsTargetChecked(!isTargetChecked);
  }; 
  const handleFeatureChange = (index) => {
    const updatedFeatures = [...selectedFeatures];
    updatedFeatures[index] = !updatedFeatures[index];
    setSelectedFeatures(updatedFeatures);
  };
  const features_ = []
  selectedFeatures.forEach((item,index)=>{
  if(item){
      features_.push(features[index])
  }
  })



  const handleSubmit = () => {
    axios.post("https://yv49k.wiremockapi.cloud/json", {
      features: features_,
      target: isTargetChecked ? target : null,
    })
    .then((response) => {
      console.log("POST request successful:", response.data);
    })
    .catch((error) => {
      console.error("Error sending POST request:", error);
    });
  };

  return (
    <div>
      <Popup
        trigger={<button>Прогноз</button>}
        modal
        nested
        closeOnDocumentClick={false} 
      >
        {(close) => (
          <div
            className="modal"
            onClick={(e) => {
              if (e.target.className === "modal") {
                close(); 
              }
            }}
          >
            <div className="content-features-targets">
              <div onClick={() => close()}>X</div>
              
              <div className="target">
                <input key={target} type="checkbox" id="target-checkbox" name="target"
                  checked={isTargetChecked}
                  onChange={handleTargetChange}></input>
                <label htmlFor="target-checkbox">{target}</label>
              </div>
              <div className="features">
                {
                  features.map((feature, index)=>(
                    <li key={index}>
                      <input type="checkbox" id={`feature-${index}`}     checked={selectedFeatures[index]}
                      onChange={() => handleFeatureChange(index)}/>
                      <label htmlFor={`feature-${index}`}>{feature}</label>
                  
                    </li>
                  ))
                }
              </div>
              <button onClick={() => {handleSubmit(); close(); sendData();}}>Отправить</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
export default ButtonPrognoz;