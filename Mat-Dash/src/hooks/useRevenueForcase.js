import { useEffect, useState } from "react";

const useResponsiveChart = () => {

    const [chartHeight, setChartHeight] = useState(270);

    //For 
    useEffect(() => {
        const updateHeight = () => {
            const screenHeight = window.innerHeight;

            if (screenHeight < 600) setChartHeight(200);
            else if (screenHeight < 800) setChartHeight(250);
            else setChartHeight(300);
        };

        updateHeight(); // initial
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);
    return chartHeight

}

export default useResponsiveChart
