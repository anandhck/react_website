import React,{useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect} from 'react';
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTAbleCheck,
  AssetManagerBasicPopupPlugin,
  ITexture,
  TweakpaneUiPlugin,
  CanvasSnipperPlugin,
  IViewerPlugin,
  FileTransferPlugin,
  FrameFadePlugin,
  DiamondPlugin,
  GLTFAnimationPlugin,
  GroundPlugin,
  TemporalAAPlugin,
  AnisotropyPlugin,
} from "webgi";
import "./WebgiViewer.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { scrollAnimation } from '../../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = () => {
    
    const canvasRef = useRef(null);
    
  const memoizedScrollAnimation = useCallback(
    (position, target, onUpdate) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, onUpdate);
      }
    }
  )
  
  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);
      
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;
      
      
    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin)
    await viewer.addPlugin(new ProgressivePlugin(32))
    await viewer.addPlugin(new TonemapPlugin(true))
    await viewer.addPlugin(GammaCorrectionPlugin)
    await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    await viewer.addPlugin(BloomPlugin)
    

    // or use this to add all main ones at once.
    await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Add a popup(in HTML) with download progress when any asset is downloading.
    await viewer.addPlugin(AssetManagerBasicPopupPlugin)

    // Required for downloading files from the UI
    await viewer.addPlugin(FileTransferPlugin)

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin)
    await viewer.renderer.refreshPipeline()
    // Import and add a GLB file.
    await viewer.load("./scene.glb");
      
    // viewer.getPlugin(TonemapPlugin).Config.ClibBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    window.scrollTo(0, 0);
      
    let needsupdate = true;
    
    const onUpdate = () => {
      needsupdate = true;
      viewer.setDirty();
    }
    viewer.addEventListener("preFrame", () => {
        
      if (needsupdate) {
        camera.positionTargetUpdated(true);
        needsupdate = false;
      }
        
    });
    memoizedScrollAnimation(position, target, onUpdate);
  }, []);

    useEffect(() => {
        setupViewer();
    }, []);
  
    return (
      <div>
        <div id="webgi-canvas-container">
          <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
      </div>
    );
}

export default WebgiViewer;
