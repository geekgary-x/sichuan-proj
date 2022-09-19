import React from "react";
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math, HeadingPitchRange, Cesium3DTileset } from "cesium";
export default function Viewport(props) {
    const [state, setstate] = React.useState({
        model: "",
        focus: false,
        first: true,
        viewer: undefined,
        tileset: undefined, 
        default_HeadingPitchRane: undefined,
    })

    console.log("ttt");

    if(props.focus) {
        console.log("focues");
    }

    React.useEffect(() => {
        if(props.model==state.model && !state.first) {
            console.log("zoom");
            state.viewer.zoomTo(state.tileset, state.default_HeadingPitchRane);
            return;
        };
        Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYmFjZGI5Ny0yM2RjLTRlZWUtYWVkMS1lODI0N2FiZjVlNTIiLCJpZCI6ODgxMDQsImlhdCI6MTY0ODg5ODM3Nn0.xbWbDzDLSjZNUgNTiV-ncvBRecBaYBiEM8SE6cC16kI';
        document.getElementById("cesiumContainer").innerHTML = "";
        console.log("eee");
        let viewer = new Viewer('cesiumContainer', {
            terrainProvider: createWorldTerrain(),
            geocoder: false, //搜索框
            homeButton: false, //home按钮
            sceneModePicker: false, //3d/2d 模式切换按钮
            baseLayerPicker: false, //图层选择按钮
            navigationHelpButton: false, //右上角的帮助按钮
            animation: false, //左下角的动画控件的显示
            shouldAnimate: false, //控制模型动画
            timeline: false, //底部的时间轴
            fullscreenButton: false, //右下角的全屏按钮
            selectionIndicator: false, //选择指示器
            infoBox: true, //信息面板
        });
        viewer._cesiumWidget._creditContainer.style.display = "none";
        if(props.model == "") return;
        let tileset_url = props.model;
        let tileset = new Cesium3DTileset({ url: tileset_url });
        let default_HeadingPitchRane
        tileset.readyPromise.then(function (tileset) {

            viewer.scene.primitives.add(tileset);

            default_HeadingPitchRane = new HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0);

            viewer.zoomTo(tileset, default_HeadingPitchRane);
        });
        setstate({
            ... state,
            model: props.model,
            first: false,
            viewer: viewer,
            tileset: tileset, 
            default_HeadingPitchRane: default_HeadingPitchRane,
        })
    }, [props]);
    return (
        <div className="viewport">
            <div id="cesiumContainer"></div>
        </div>
    )
}