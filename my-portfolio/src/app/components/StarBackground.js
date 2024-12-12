import { useEffect } from 'react';
import * as THREE from 'three';

const StarBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const stars = new Float32Array(1000 * 3); // 1000 stars
    for (let i = 0; i < stars.length; i++) stars[i] = (Math.random() - 0.5) * 2000;
    geometry.setAttribute('position', new THREE.BufferAttribute(stars, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return null; // Background renders in the body
};

export default StarBackground;
