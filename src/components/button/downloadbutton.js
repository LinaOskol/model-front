import React, { useState } from "react";
import ButtonTraining from "./buttontraining";
const Dbutton = () => {
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);
  // Функция для отправки данных
  const sendData = () => {
    // Получаем значение из localStorage
    const valueToSend = localStorage.getItem("selectedFile");

    // Определяем параметры запроса
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: valueToSend }),
    };

    // Отправляем запрос
    fetch("https://yv49k.wiremockapi.cloud/json", requestOptions)
      .then((response) => {
        if (response.ok) {
          setIsPostSuccessful(true);
          console.log(isPostSuccessful);
          return response.json();
        } else {
          throw new Error("Ошибка при отправке POST запроса");
        }
      })
      .then((data) => {
        console.log(data);
      })

      .catch((error) => console.error("Ошибка:", error));
  };

  return (
    <div>
      <button onClick={sendData}>Загрузить</button>
      <ButtonTraining isActive={isPostSuccessful} />
    </div>
  );
};

export default Dbutton;
