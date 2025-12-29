import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Copy } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Button from "../CommonComponents/Button";

const QRCodeDownload = () => {
  const [url,] = useState("https://demofelicity-mlm.netlify.app")
  const [copied, setCopied] = useState(false)
  const CopyHandler = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      if (copied) {
        toast.success("URL Copy Successfully", {
          position: 'top-center',
          closeOnClick: false,
          autoClose: 1500,
          theme: 'dark'
        })
      }
    }
    catch {
      toast.error("Failed to Copy !", {
        position: 'top-center',
        closeOnClick: false,
        autoClose: 1500,
        theme: 'dark'
      })
    }
  }

  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "referral-qr.png";
    link.click();
  };

  return (
    <div className="flex items-center mt-3 flex-col w-full border-white px-6 py-5">
      <div ref={qrRef} style={{ marginBottom: "16px", }}>
        <QRCodeCanvas
          value={url}
          size={180}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin
        />
      </div>
      <div onClick={downloadQR}>
        <Button onClick={downloadQR} btnText={"Download QR Code"} />
      </div>

      <div className="flex gap-4 items-center bg-gray-700 px-5 py-4 rounded-xl text-white overflow-hidden  my-5 ">
        <p className="overflow-hidden  text-nowrap w-50 border-white">{url}</p>
        <p className="cursor-pointer text-white" onClick={CopyHandler}><Copy size={18} /></p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default QRCodeDownload;
