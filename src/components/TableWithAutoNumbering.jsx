import React from 'react';

const TableWithAutoNumbering = () => {
  const blocksCount = 4; // Количество блоков
  const blockTitle = [
    "Title of the first goal",
    "Title of the second goal",
    "Title of the third goal",
    "Title of the fourth goal"
  ]
  const uniqueTexts = [
    "A small text describing one of the goals in two lines.",
    "A small text describing one of the goals in two lines.",
    "A small text describing one of the goals in two lines. A small text describing one of the goals in two lines.",
    "A small text describing one of the goals in two lines. A small text describing one of the goals in two lines."
  ]; // Массив уникальных текстов для каждого блока

  const imageUrl1 = 'src/components/images/Block_1.png'; // Первая картинка
  const imageUrl2 = 'src/components/images/Block_5.png'; // Вторая картинка
  const imageUrlAfterLastBlock = 'src/components/images/Block_6.png'; // Картинка после последнего блока

  return (
    <div className='table1'>
      {Array.from({ length: blocksCount }, (_, index) => (
        <React.Fragment key={index}>
          <div className='numberTable1'>
            <h1 className='indexNumber'>{index + 1}</h1>
            <h3 className='titleText'>{blockTitle[index]}</h3>
            <p className='uniqueText'>{uniqueTexts[index]}</p> {/* Уникальный текст для каждого блока */}
          </div>

          {/* Добавляем две картинки между 2 и 3 блоком */}
          {index === 1 && (
            <>
              <img className='imageBlock1' src={imageUrl1}/>
              <img className='imageBlock2' src={imageUrl2}/>
            </>
          )}

          {/* Добавляем одну картинку после 4-го блока */}
          {index === blocksCount - 1 && (
            <img className='imageBlock3' src={imageUrlAfterLastBlock}/>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TableWithAutoNumbering;
