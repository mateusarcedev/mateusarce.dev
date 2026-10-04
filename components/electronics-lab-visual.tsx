"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

export function ElectronicsLabVisual() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const leds = root.querySelectorAll(".lab-led")
    const bars = root.querySelectorAll(".scope-bar")
    const scan = root.querySelector(".scope-scan")
    const pulses = root.querySelectorAll(".circuit-pulse")

    const animations = [
      animate(leds, {
        opacity: [0.25, 1],
        scale: [0.85, 1.15],
        delay: stagger(190),
        duration: 800,
        loop: true,
        alternate: true,
        ease: "inOut(2)",
      }),
      animate(bars, {
        scaleY: [0.25, 1],
        delay: stagger(55, { from: "center" }),
        duration: 850,
        loop: true,
        alternate: true,
        ease: "inOut(2)",
      }),
      animate(pulses, {
        opacity: [0.2, 1],
        delay: stagger(150),
        duration: 700,
        loop: true,
        alternate: true,
        ease: "inOut(2)",
      }),
    ]

    if (scan) {
      animations.push(
        animate(scan, {
          x: [0, 190],
          opacity: [0.25, 0.9, 0.25],
          duration: 1800,
          loop: true,
          ease: "linear",
        })
      )
    }

    return () => {
      animations.forEach((animation) => {
        animation.revert()
      })
    }
  }, [])

  return (
    <div ref={rootRef} className="electronics-lab-visual" aria-hidden="true">
      <div className="lab-board">
        <div className="lab-board-head">
          <span>HOBBY LAB / 01</span>
          <div className="lab-led-row">
            <i className="lab-led" /><i className="lab-led" /><i className="lab-led" />
          </div>
        </div>

        <div className="lab-circuit">
          <span className="circuit-track track-a" />
          <span className="circuit-track track-b" />
          <span className="circuit-track track-c" />
          <span className="circuit-pulse pulse-a" />
          <span className="circuit-pulse pulse-b" />
          <span className="circuit-pulse pulse-c" />
          <div className="lab-chip">
            <small>MCU</small>
            <strong>ESP32</strong>
            <span>240 MHz</span>
          </div>
          <div className="lab-port">GPIO</div>
          <div className="lab-port secondary">USB</div>
        </div>

        <div className="lab-scope">
          <div className="lab-scope-head"><span>OSC</span><small>signal / learning</small></div>
          <div className="scope-screen">
            <span className="scope-grid" />
            <span className="scope-scan" />
            <div className="scope-wave">
              {[0.35, 0.6, 0.88, 0.48, 0.72, 0.3, 0.82, 0.56, 0.92, 0.42, 0.7, 0.5].map((height, index) => (
                <span className="scope-bar" style={{ height: `${height * 100}%` }} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
