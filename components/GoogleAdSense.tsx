import Script from "next/script";

type Props = {
  pId: string | undefined;
};

const GoogleAdSense: React.FC<Props> = ({ pId }) => {
  if (!pId) {
    return null;
  }
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdSense;

