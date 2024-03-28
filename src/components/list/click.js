import React, { useState } from "react";

const ListItem = ({ item }) => {
  const [selected, setSelected] = useState(false); // Состояние для отслеживания выделения

  // Функция для изменения состояния выделения
  const toggleSelect = () => {
    setSelected(!selected); // Инвертируем состояние
  };

  // Стили для выделенного и обычного состояния
  const style = {
    backgroundColor: selected ? "lightblue" : "white", // Если элемент выделен, фон будет lightblue
    cursor: "pointer", // Курсор в виде указателя
  };

  return (
    <li style={style} onClick={toggleSelect}>
      {" "}
      {item}
    </li>
  );
};

/*const MyList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => ( // Отображаем каждый пункт списка
        <ListItem key={index} item={item} /> // Компонент ListItem для каждого пункта
      ))}
    </ul>
  );
};*/

export default ListItem;
