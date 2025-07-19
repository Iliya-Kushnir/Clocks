import { useEffect, useRef } from "react";

const AdBanner = ({ adClient, adSlot }) => {
  const adRef = useRef(null);

  useEffect(() => {
    console.log(window.adsbygoogle)
    
    if (!window.adsbygoogle) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7786117059413668";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
      
    }


    if (adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot} 
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdBanner;
