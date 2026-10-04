"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function HeroOrbit() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.z = 5.2

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.32, 2),
      new THREE.MeshBasicMaterial({
        color: 0x63f5c8,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      })
    )

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.78, 0.012, 6, 96),
      new THREE.MeshBasicMaterial({
        color: 0xff72b6,
        transparent: true,
        opacity: 0.36,
      })
    )
    ring.rotation.x = Math.PI * 0.38
    ring.rotation.y = Math.PI * 0.18

    const dotsGeometry = new THREE.BufferGeometry()
    const dots = []
    for (let i = 0; i < 46; i += 1) {
      const radius = 1.65 + Math.random() * 0.55
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      dots.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      )
    }
    dotsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dots, 3))
    const dotsMaterial = new THREE.PointsMaterial({
      color: 0x63f5c8,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
    })
    const points = new THREE.Points(dotsGeometry, dotsMaterial)

    group.add(ico, ring, points)
    group.rotation.x = -0.16
    group.rotation.z = -0.12

    let mouseX = 0
    let mouseY = 0
    let raf = 0

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.34
      mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.22
    }

    const render = () => {
      group.rotation.y += (mouseX - group.rotation.y) * 0.025
      group.rotation.x += (-0.16 + mouseY - group.rotation.x) * 0.025
      ico.rotation.y += 0.0018
      ico.rotation.x += 0.0008
      ring.rotation.z -= 0.0012
      points.rotation.y -= 0.0007
      renderer.render(scene, camera)
      raf = requestAnimationFrame(render)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()

    if (reducedMotion) {
      group.rotation.y = 0.22
      renderer.render(scene, camera)
    } else {
      mount.addEventListener("pointermove", onPointerMove, { passive: true })
      raf = requestAnimationFrame(render)
    }

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      mount.removeEventListener("pointermove", onPointerMove)
      ico.geometry.dispose()
      ring.geometry.dispose()
      dotsGeometry.dispose()
      ;[ico.material, ring.material, dotsMaterial].forEach((material) => material.dispose())
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="hero-orbit" aria-hidden="true" />
}
