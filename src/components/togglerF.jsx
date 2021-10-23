import React, { useState } from "react";

const TogglerF = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={toggleClick}>{isToggled ? "Скрыть" : "Показать"}</button>
      {isToggled && <p>Описание</p>}
    </div>
  );
};

export default TogglerF;
