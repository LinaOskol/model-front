import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./button.css";

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
      <Popup
        trigger={<button disabled={!isActive}>Обучение</button>}
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
              <div onClick={() => close()}>X</div>
              {/* Содержимое модального окна */}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
export default ButtonTraining;
