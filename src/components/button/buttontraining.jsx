import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./button.css";

const ButtonTraining = ({ isActive }) => {
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
    // Send POST request with selected features and target
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
        trigger={<button disabled={!isActive}>Обучить</button>}
        modal
        nested
        closeOnDocumentClick={false} // Отключите закрытие по умолчанию
      >
        {(close) => (
          <div
            className="modal"
            onClick={(e) => {
              // Проверяем, что клик был сделан по фону модального окна
              if (e.target.className === "modal") {
                close(); // Закрываем модальное окно
              }
            }}
          >
            <div className="content-features-targets">
              <div className="close" onClick={() => close()}>X</div>
              <div className="checkbox">
                <div className="target">
                   <h5>Выберите таргет</h5>
                   <div>
                   <input key={target} type="checkbox" id="target-checkbox" name="target"
                     checked={isTargetChecked}
                      onChange={handleTargetChange}>
                   </input>
                   <label htmlFor="target-checkbox">{target}</label></div>
              </div>
              <div className="features">
              <h5>Выберите фичи</h5>
              <div className="features-li">
                {
                  features.map((feature, index)=>(
                    <li key={index}>
                      <input type="checkbox" id={`feature-${index}`}     checked={selectedFeatures[index]}
                      onChange={() => handleFeatureChange(index)}/>
                      <label htmlFor={`feature-${index}`}>{feature}</label>
                  
                    </li>
                  ))
                }</div>
              </div>
              </div>
              <p><button className="send_button" onClick={() => {handleSubmit(); close();}}>Отправить</button></p>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
export default ButtonTraining;
