import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface BlockData {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;
  baseX: number;
  baseY: number;
  baseZ: number;
  currentZ: number;
  targetZ: number;
  currentRotX: number;
  currentRotY: number;
  targetRotX: number;
  targetRotY: number;
}

interface Ripple {
  x: number;
  y: number;
  startTime: number;
  strength: number;
}

export const InteractiveBlocksHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // 1. Scene & Orthographic Camera (Replicating exact architectural mockup: large panels, flat parallel faces)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#FAFBFD');

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const aspect = width / height;

    // Frustum Height calibrated so ~3.5-4 large architectural rows are visible across the screen
    const frustumHeight = 9.6;
    const frustumWidth = frustumHeight * aspect;

    const camera = new THREE.OrthographicCamera(
      -frustumWidth / 2,
      frustumWidth / 2,
      frustumHeight / 2,
      -frustumHeight / 2,
      0.1,
      100
    );
    camera.position.set(0, 0, 25);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    // 2. Realistic Studio Architectural Lighting (Matches reference mockup drop shadows)
    // Ambient light: Soft airy white fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.15);
    scene.add(ambientLight);

    // Key Light from upper left: casts clean, soft architectural drop shadows down and to the right
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.45);
    keyLight.position.set(13, 17, 18);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.left = -frustumWidth;
    keyLight.shadow.camera.right = frustumWidth;
    keyLight.shadow.camera.top = frustumHeight;
    keyLight.shadow.camera.bottom = -frustumHeight;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 50;
    keyLight.shadow.bias = -0.0002;
    scene.add(keyLight);

    // Subtle fill light from lower right
    const fillLight = new THREE.DirectionalLight(0xedf2f8, 0.5);
    fillLight.position.set(-10, -12, 14);
    scene.add(fillLight);

    // Dynamic point light tracking cursor for subtle edge glints
    const dynamicLight = new THREE.PointLight(0xffffff, 1.2, 9, 2.0);
    dynamicLight.position.set(0, 0, 3.5);
    scene.add(dynamicLight);

    // 3. Material: Pure Matte Architectural White Satin
    const blockMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFFFF'),
      roughness: 0.36,
      metalness: 0.01,
    });

    // 4. Large Rectangular Blocks Composition (Exact match to target mockup)
    const blocks: BlockData[] = [];
    const blockGroup = new THREE.Group();
    scene.add(blockGroup);

    const rowHeight = 2.4; // Large architectural block height (~4 rows visible)
    const seamGap = 0.014; // Crisp hairline contact joint
    const blockDepth = 2.2; // Solid cuboid thickness

    // Row definitions matching the mockup: large horizontal slabs, square accents, staggered joints
    const rowConfigs = [
      // Row 0 (Top):
      {
        widths: [3.4, 2.4, 2.6, 3.8, 2.2, 3.4, 2.6],
        depths: [0.35, 0.0, 0.0, 0.45, 0.0, 0.25, 0.0],
      },
      // Row 1 (Upper-Mid / Headline Top):
      {
        widths: [2.5, 4.4, 2.2, 3.6, 2.6, 3.2, 2.2],
        depths: [0.65, 0.0, 0.0, 0.5, 0.0, 0.2, 0.4],
      },
      // Row 2 (Lower-Mid / Headline Center):
      {
        widths: [3.6, 2.2, 4.8, 2.4, 3.6, 2.4],
        depths: [0.0, 0.0, 0.15, 0.0, 0.0, 0.55],
      },
      // Row 3 (Bottom / Prominent Bottom-Right Block):
      {
        widths: [2.6, 3.6, 2.4, 2.4, 4.6, 2.4],
        depths: [0.55, 0.0, 0.0, 0.0, 0.75, 0.2],
      },
      // Row 4 (Bottom Margin Overflow):
      {
        widths: [3.2, 2.4, 3.8, 2.2, 3.6, 2.8],
        depths: [0.2, 0.0, 0.35, 0.0, 0.4, 0.0],
      },
    ];

    const wallHalfW = frustumWidth / 2 + 3.0;
    const startY = (2 * (rowHeight + seamGap)); // Centers 4 main rows in viewport

    rowConfigs.forEach((rowConf, r) => {
      const curY = startY - r * (rowHeight + seamGap);
      const widths = rowConf.widths;
      const depths = rowConf.depths;

      let curX = -wallHalfW;
      let colIdx = 0;

      while (curX < wallHalfW) {
        const bWidth = widths[colIdx % widths.length];
        const baseZ = depths[colIdx % depths.length];

        const boxGeo = new THREE.BoxGeometry(bWidth, rowHeight, blockDepth);
        const mesh = new THREE.Mesh(boxGeo, blockMaterial);

        const centerX = curX + bWidth / 2;
        mesh.position.set(centerX, curY, baseZ);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        blockGroup.add(mesh);

        blocks.push({
          mesh,
          baseX: centerX,
          baseY: curY,
          baseZ,
          currentZ: baseZ,
          targetZ: baseZ,
          currentRotX: 0,
          currentRotY: 0,
          targetRotX: 0,
          targetRotY: 0,
        });

        curX += bWidth + seamGap;
        colIdx++;
      }
    });

    // 5. Cursor Interaction (Accurate Orthographic Unprojection)
    const mouseWorld = new THREE.Vector2(0, 0);
    let isMouseOver = false;
    let lastMoveTime = 0;
    const ripples: Ripple[] = [];

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        isMouseOver = true;
        const ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;

        const worldX = ndcX * camera.right;
        const worldY = ndcY * camera.top;
        mouseWorld.set(worldX, worldY);

        const now = performance.now();
        if (now - lastMoveTime > 220) {
          lastMoveTime = now;
          if (ripples.length < 4) {
            ripples.push({
              x: worldX,
              y: worldY,
              startTime: now * 0.001,
              strength: 0.15,
            });
          }
        }
      } else {
        isMouseOver = false;
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const worldX = ndcX * camera.right;
      const worldY = ndcY * camera.top;

      ripples.push({
        x: worldX,
        y: worldY,
        startTime: performance.now() * 0.001,
        strength: 0.25,
      });
    };

    const handlePointerLeave = () => {
      isMouseOver = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointerleave', handlePointerLeave);

    // 6. Visibility Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 7. Subtle Rigid Animation Loop
    const startTime = performance.now();
    const maxRotRad = (1.2 * Math.PI) / 180; // Subtle: max 1.2 degrees

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = (time - startTime) * 0.001;
      const nowSec = performance.now() * 0.001;

      // Dynamic light tracking cursor
      if (isMouseOver) {
        dynamicLight.position.x += (mouseWorld.x - dynamicLight.position.x) * 0.12;
        dynamicLight.position.y += (mouseWorld.y - dynamicLight.position.y) * 0.12;
        dynamicLight.intensity += (1.4 - dynamicLight.intensity) * 0.08;
      } else {
        const idleX = Math.sin(elapsed * 0.22) * 2.5;
        const idleY = Math.cos(elapsed * 0.18) * 1.8;
        dynamicLight.position.x += (idleX - dynamicLight.position.x) * 0.03;
        dynamicLight.position.y += (idleY - dynamicLight.position.y) * 0.03;
        dynamicLight.intensity += (1.0 - dynamicLight.intensity) * 0.04;
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        if (nowSec - ripples[i].startTime > 1.3) {
          ripples.splice(i, 1);
        }
      }

      // Proximity radius scaled to large blocks (~2.8 units)
      const proximityRadius = 2.8;

      for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];

        let targetZ = b.baseZ;
        let targetRotX = 0;
        let targetRotY = 0;

        // Proximity translation forward along Z & micro-tilt
        if (isMouseOver) {
          const dx = mouseWorld.x - b.baseX;
          const dy = mouseWorld.y - b.baseY;
          const dist = Math.hypot(dx, dy);

          if (dist < proximityRadius) {
            const norm = 1 - dist / proximityRadius;
            const factor = norm * norm;

            targetZ += factor * 0.22;
            targetRotX += Math.max(-maxRotRad, Math.min(maxRotRad, -dy * 0.008 * factor));
            targetRotY += Math.max(-maxRotRad, Math.min(maxRotRad, dx * 0.008 * factor));
          }
        }

        // Gentle ripple impulse across neighbors
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const age = nowSec - rip.startTime;
          const rDist = Math.hypot(b.baseX - rip.x, b.baseY - rip.y);
          const waveFront = age * 4.4;
          const delta = rDist - waveFront;

          if (Math.abs(delta) < 1.6) {
            const waveIntensity =
              Math.sin((delta / 1.6) * Math.PI) *
              Math.max(0, 1 - age / 1.3) *
              Math.exp(-rDist * 0.14) *
              rip.strength *
              0.15;

            targetZ += waveIntensity;
            targetRotX += Math.max(-maxRotRad, Math.min(maxRotRad, waveIntensity * 0.02));
            targetRotY += Math.max(-maxRotRad, Math.min(maxRotRad, waveIntensity * 0.02));
          }
        }

        // Heavy architectural spring easing
        b.currentZ += (targetZ - b.currentZ) * 0.12;
        b.currentRotX += (targetRotX - b.currentRotX) * 0.12;
        b.currentRotY += (targetRotY - b.currentRotY) * 0.12;

        b.mesh.position.z = b.currentZ;
        b.mesh.rotation.x = b.currentRotX;
        b.mesh.rotation.y = b.currentRotY;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 1 || h < 1) return;

      const currentAspect = w / h;
      const fWidth = frustumHeight * currentAspect;

      camera.left = -fWidth / 2;
      camera.right = fWidth / 2;
      camera.top = frustumHeight / 2;
      camera.bottom = -frustumHeight / 2;
      camera.updateProjectionMatrix();

      keyLight.shadow.camera.left = -fWidth;
      keyLight.shadow.camera.right = fWidth;
      keyLight.shadow.camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointerleave', handlePointerLeave);
      resizeObserver.disconnect();
      observer.disconnect();

      blocks.forEach((b) => {
        b.mesh.geometry.dispose();
      });
      blockMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
