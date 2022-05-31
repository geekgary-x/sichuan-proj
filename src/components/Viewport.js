import React from "react";
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math } from "cesium";
export default function Viewport() {
    React.useEffect(() => {
        const viewer = new Viewer('cesiumContainer', {
            terrainProvider: createWorldTerrain()
        });
    }, [0]);
    return (
        <div className="viewport">
            <div id="cesiumContainer"></div>
        </div>
    )
}