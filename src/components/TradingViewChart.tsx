"use client";
import { useEffect, useState, useRef } from "react";

const TradingViewChart = ({ id }: { id: string }) => {
  const [loaded, setLoaded] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement & { id: string | undefined }>(
    null
  );
  useEffect(() => {
    // check if  TradingView is defined
    const intervalId = setInterval(() => {
      // @ts-ignore
      if (typeof window.TradingView !== "undefined") {
        setLoaded(true);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (window.TradingView && loaded && chartContainerRef.current) {
      const tradingViewEmbedOptions = {
        chart: id,
        width: window.innerWidth,
        height: window.innerHeight,
        container_id: chartContainerRef.current.id,
      };
      // @ts-ignore
      new window.TradingView.chart(tradingViewEmbedOptions);
    }

    window.addEventListener("resize", () => {
      // @ts-ignore
      if (window.TradingView && loaded && chartContainerRef.current) {
        const tradingViewEmbedOptions = {
          chart: id,
          width: window.innerWidth,
          height: window.innerHeight,
          container_id: chartContainerRef.current.id,
        };
        // @ts-ignore
        new window.TradingView.chart(tradingViewEmbedOptions);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [loaded, id]);

  if (!loaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-4 border-t-8 border-black h-16 w-16 mb-4"></div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen"
      id="tradingview_chart"
      ref={chartContainerRef}
    ></div>
  );
};

export default TradingViewChart;
