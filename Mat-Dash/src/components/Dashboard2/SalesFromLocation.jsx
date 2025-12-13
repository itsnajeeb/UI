// src/components/SalesLocationsDashboard.jsx
import React, { useRef, useEffect, useMemo } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

const SalesBar = ({ code, percentage, colorClass }) => (
    <div className="flex items-center justify-between">
        <span className="w-12 font-medium text-gray-700">{code}</span>
        <div className="flex-1 mx-3">
            <div className="h-3 rounded-full bg-gray-200">
                <div
                    className={`h-3 rounded-full ${colorClass} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
        <span className="w-12 text-right font-semibold text-gray-800">{percentage}%</span>
    </div>
);

const SalesFromLocation = () => {
    const mapRef = useRef(null);
    const chartRef = useRef(null);

    const salesData = [
        { countryCode: "AE", salesPercentage: 28, label: "United Arab Emirates" },
        { countryCode: "AT", salesPercentage: 21, label: "Austria" },
        { countryCode: "AU", salesPercentage: 18, label: "Australia" },
        { countryCode: "DE", salesPercentage: 12, label: "Germany" },
    ];

    const cityLocations = [
        { title: "Vienna", latitude: 48.2092, longitude: 16.3728, value: 10 },
        { title: "Minsk", latitude: 53.9678, longitude: 27.5766, value: 5 },
        { title: "Brussels", latitude: 50.8371, longitude: 4.3676, value: 8 },
        { title: "Sofia", latitude: 42.7105, longitude: 23.3238, value: 12 },
        { title: "Paris", latitude: 48.8567, longitude: 2.351, value: 15 },
        { title: "Berlin", latitude: 52.5235, longitude: 13.4115, value: 18 },
        { title: "Athens", latitude: 37.9792, longitude: 23.7166, value: 7 },
        { title: "Rome", latitude: 41.8955, longitude: 12.4823, value: 11 },
        { title: "London", latitude: 51.5002, longitude: -0.1262, value: 30 },
        { title: "New Delhi", latitude: 28.6353, longitude: 77.225, value: 40 },
        { title: "Tokyo", latitude: 35.6785, longitude: 139.6823, value: 35 },
        { title: "Dubai", latitude: 25.2048, longitude: 55.2708, value: 25 },
        { title: "Abu Dhabi", latitude: 24.4539, longitude: 54.3773, value: 22 },
        { title: "Vienna 2", latitude: 48.2082, longitude: 16.3738, value: 9 },
    ];

    const colors = ["bg-indigo-500", "bg-teal-400", "bg-pink-500", "bg-purple-500"];
    const dataWithColor = useMemo(
        () =>
            salesData.map((item, index) => ({
                ...item,
                colorClass: colors[index % colors.length],
            })),
        []
    );

    useEffect(() => {
        const root = am5.Root.new(mapRef.current);
        root._logo.dispose();
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "translateY",
                projection: am5map.geoMercator(),
            })
        );

        let zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
        zoomControl.homeButton.set("visible", true);
        const polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"],
            })
        );

        polygonSeries.mapPolygons.template.setAll({
            fill: am5.color(0xd1d5db),
            stroke: am5.color(0x9ca3af),
            tooltipText: "{name}",
            interactive: true,
        });

        const pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {}));

        pointSeries.set("clusteredBullet", (root) => {
            const container = am5.Container.new(root, { cursorOverStyle: "pointer" });
            const color = am5.color(0x635BFF);

            container.children.push(am5.Circle.new(root, { radius: 10, fill: color }));
            container.children.push(am5.Circle.new(root, { radius: 15, fillOpacity: 0.2, fill: color }));
            container.children.push(am5.Circle.new(root, { radius: 20, fillOpacity: 0.15, fill: color }));

            container.children.push(
                am5.Label.new(root, {
                    centerX: am5.p50,
                    centerY: am5.p50,
                    fill: am5.color(0xffffff),
                    populateText: true,
                    fontSize: "12",
                    fontWeight: "bold",
                    text: "{value}",
                })
            );

            container.events.on("click", (e) => {
                pointSeries.zoomToCluster(e.target.dataItem);
            });

            return am5.Bullet.new(root, { sprite: container });
        });

        pointSeries.bullets.push(() => {
            const circle = am5.Circle.new(root, {
                radius: 6,
                fill: am5.color(0x635BFF),
                tooltipText: "{title}",
            });
            return am5.Bullet.new(root, { sprite: circle });
        });

        pointSeries.data.setAll(
            cityLocations.map((c) => ({
                geometry: { type: "Point", coordinates: [c.longitude, c.latitude] },
                title: c.title,
                value: c.value,
            }))
        );

        chart.appear(1000, 100);
        chartRef.current = chart;

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div className="bg-white rounded-xl shadow  h-full p-5  w-full font-sans">
            <header className="mb-4">
                <h2 className="text-[18px] manrope-fontFamily font-semibold text-[29343d]">Sales from Locations</h2>
                <p className="text-sm font-normal text-[#526b7a]">4 top most countries</p>
            </header>

            <div className="relative mb-10 h-[200px] rounded-lg  overflow-hidden ">
                <div ref={mapRef} id="chartdiv" className="w-full h-full"></div>
            </div>

            <div className="space-y-3">
                {dataWithColor.map((item) => (
                    <SalesBar
                        key={item.countryCode}
                        code={item.countryCode}
                        percentage={item.salesPercentage}
                        colorClass={item.colorClass}
                    />
                ))}
            </div>
        </div>
    );
};

export default SalesFromLocation;
