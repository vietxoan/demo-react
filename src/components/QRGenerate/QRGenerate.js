import React, { useState, useEffect } from 'react';
import '../QRGenerate/QRGenerate.css'

function QRGenerate() {
  const [inputTxt, setInputText] = useState('');
  const [qrSrc, setQRSrc] = useState('');
  const [inputTxtClass, setInputTxtClass] = useState('');
  const [imgBoxClass, setImgBoxClass] = useState('');

  useEffect(() => {
    setQRSrc('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputTxt)
  }, []);

  const handleInput = (event) => setInputText(event.target.value);

  const handleGenerate = () => {
    if (inputTxt.length > 0) {
      setQRSrc('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputTxt);
      setImgBoxClass('show-img');
    } else {
      setImgBoxClass('');   
      setInputTxtClass('error');
      setTimeout(() => {
        setInputTxtClass('');     
      }, 1000)
    }
    
  };
  return (
    <div>
      <h1>This page is actually not relevant to the website</h1>
      <div className='QRContainer'>
        <p>Enter your text or URL</p>
        <input 
          className={inputTxtClass}
          id='qrText'
          placeholder='Text or URL'
          value={inputTxt}
          onChange={handleInput}
          onKeyDown = {(e) => {
            if (e.key === "Enter") {
              handleGenerate(inputTxt)
            }
          }}/>
        <div className={imgBoxClass} id='imgBox'>
          <img src={qrSrc} id='qrImg'/>
        </div>
        <button onClick={handleGenerate}>Generate QR Code</button>
      </div>
    </div>
  )
}

export default QRGenerate