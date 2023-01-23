import "./App.css";
import QRCode from "react-qr-code";
import QRDCodeLink from 'qrcode';
import { useState } from "react";


function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState('');

  const handleQrcode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value);
    handleGenerate(e.currentTarget.value)
  };

  const handleGenerate = (link_url: string) => {
    QRDCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3
    }, (err: any, url: string) => {
      setQrcodeLink(url);
    })
  }

  return (
    <div className="container">
      <QRCode value={link} />
      <input
        className="input"
        value={link}
        onChange={(e) => handleQrcode(e)}
        placeholder="Digite o seu link..."
      />
      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</a>
    </div>
  );
}

export default App;
