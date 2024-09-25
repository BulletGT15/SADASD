import React, { useState } from 'react';

function App() {
  const [buttonText, setButtonText] = useState('Нажми на кнопку, чтобы узнать больше'); // Состояние для хранения текста

  const handleClick = (newText) => {
    setButtonText(newText); // Обновление состояния при нажатии на кнопку
  };
  const textHandleClick1 = (
    <p><span className='titleTextBut1'>Close-knit team</span><br/><br/>
    <span className='TextBut1'>A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.</span></p>
  )
  const textHandleClick2 = [
    "asfdf"
  ]

  return (
    <div className='divTextChoose'>
      <div className='divButtonText'>
        {/* Блок с изменяемым текстом */}
        <p className='buttonText'>{buttonText}</p>
      </div>

      <div className='divButtons'>
        {/* Кнопки с уникальными текстами */}
        <button className='buttonOnClick' onClick={() => handleClick(textHandleClick1)}>Кнопка 1</button>
        <button className='buttonOnClick' onClick={() => handleClick(textHandleClick2)}>Кнопка 2</button>
        <button className='buttonOnClick' onClick={() => handleClick('Текст кнопки 3')}>Кнопка 3</button>
        <button className='buttonOnClick' onClick={() => handleClick('Текст кнопки 4')}>Кнопка 4</button>
      </div>
    </div>
  );
}

export default App;
