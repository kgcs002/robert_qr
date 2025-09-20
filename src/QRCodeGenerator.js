import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('https://exemplo.com/cardapio.jpg'); // URL da imagem do cardápio
  const [qrValue, setQrValue] = useState('https://exemplo.com/cardapio.jpg');
  const qrRef = useRef();

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const generateQR = () => {
    setQrValue(url);
  };

  const downloadQR = () => {
    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'qr-code-cardapio.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="qr-container">
      <div className="qr-header">
        <h1>Gerador de QR Code</h1>
        <p>Gere um QR Code que leva para a imagem do seu cardápio</p>
      </div>
      
      <div className="qr-input-section">
        <div className="input-group">
          <label htmlFor="url-input">URL da imagem do cardápio:</label>
          <input
            id="url-input"
            type="url"
            value={url}
            onChange={handleUrlChange}
            placeholder="https://exemplo.com/cardapio.jpg"
            className="url-input"
          />
        </div>
        <button onClick={generateQR} className="generate-btn">
          Gerar QR Code
        </button>
      </div>

      {qrValue && (
        <div className="qr-display-section">
          <h3>Seu QR Code:</h3>
          <div className="qr-code-container">
            <div ref={qrRef}>
              <QRCode
                value={qrValue}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
          <button onClick={downloadQR} className="download-btn">
            📥 Baixar QR Code
          </button>
        </div>
      )}

      <div className="instructions">
        <h3>Como usar:</h3>
        <ol>
          <li>Cole a URL da imagem do seu cardápio no campo acima</li>
          <li>Clique em "Gerar QR Code"</li>
          <li>Baixe o QR Code gerado</li>
          <li>Imprima e coloque nas mesas ou use digitalmente</li>
        </ol>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
