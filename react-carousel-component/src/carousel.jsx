import React, { useState } from 'react';

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function changeCircleIcon(index) {
    if (currentIndex === index) {
      return 'fa-solid fa-circle';
    } else {
      return 'fa-regular fa-circle';
    }
  }

  return (
    <div className='center row'>
      <div className='container'>
        <h1>{images[currentIndex].title}</h1>
        <div className='row pic-container'>
          <i className="fas fa-chevron-left" onClick={goToPrevious}></i>
          <img src={images[currentIndex].url}/>
          <i className="fas fa-chevron-right" onClick={goToNext}></i>
        </div>
        <div className='row dots'>
          {images.map((image, index) => (
            <i key={index} className={changeCircleIcon(index)} onClick={() => setCurrentIndex(index)}></i>
          ))}
        </div>
      </div>
    </div>
  );
}
