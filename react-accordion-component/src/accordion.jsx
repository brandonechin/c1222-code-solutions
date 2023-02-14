import React, { useState } from 'react';

export function Accordion({ languages }) {
  const [clicked, setClicked] = useState(0);

  return (
    <>
      {languages.map((language) => (
        <LanguageContainer key={language.id}
        language={language.name}
        description={language.description}
        isClicked={clicked === language.id}
        setClicked={() => clicked === language.id ? setClicked(0) : setClicked(language.id)}/>
      ))}
    </>
  );
}

function LanguageContainer({ language, description, isClicked, setClicked }) {
  return (
    <>
      <div onClick = {setClicked} className='title-box'>
        <h2>{language}</h2>
      </div>
      <div className={isClicked ? 'description' : 'description-hidden'}>
        <p>{description}</p>
      </div>
    </>
  );
}
