"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

const espPins = Array.from({ length: 10 })
const arduinoPins = Array.from({ length: 12 })
const breadboardHoles = Array.from({ length: 30 })

export function ElectronicsLabVisual() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const leds = root.querySelectorAll(".lab-led, .board-led")
    const pulses = root.querySelectorAll(".pcb-trace-pulse")
    const ports = root.querySelectorAll(".board-port")
    const sensor = root.querySelector(".sensor-node")

    const animations = [
      animate(leds, {
        opacity: [0.3, 1],
        scale: [0.88, 1.12],
        delay: stagger(170),
        duration: 850,
        loop: true,
        alternate: true,
        ease: "inOut(2)",
      }),
      animate(pulses, {
        opacity: [0.15, 1, 0.15],
        scale: [0.8, 1.15, 0.8],
        delay: stagger(220),
        duration: 1200,
        loop: true,
        ease: "inOut(2)",
      }),
      animate(ports, {
        opacity: [0.65, 1],
        delay: stagger(180),
        duration: 1200,
        loop: true,
        alternate: true,
        ease: "inOut(2)",
      }),
    ]

    if (sensor) {
      animations.push(
        animate(sensor, {
          y: [0, -3, 0],
          duration: 1800,
          loop: true,
          ease: "inOut(2)",
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
          <span>HOBBY LAB / ELECTRONICS</span>
          <div className="lab-led-row">
            <i className="lab-led" />
            <i className="lab-led" />
            <i className="lab-led" />
          </div>
        </div>

        <div className="electronics-bench">
          <span className="pcb-trace pcb-trace-a" />
          <span className="pcb-trace pcb-trace-b" />
          <span className="pcb-trace pcb-trace-c" />
          <span className="pcb-trace pcb-trace-d" />
          <span className="pcb-trace pcb-trace-e" />
          <span className="pcb-trace pcb-trace-f" />

          <span className="pcb-trace-pulse pcb-pulse-a" />
          <span className="pcb-trace-pulse pcb-pulse-b" />
          <span className="pcb-trace-pulse pcb-pulse-c" />
          <span className="pcb-trace-pulse pcb-pulse-d" />

          <div className="dev-board esp32-board">
            <div className="board-header">
              <span className="board-chip-label">dev board</span>
              <span className="board-led" />
            </div>

            <div className="board-chip">
              <small>MCU</small>
              <strong>ESP32</strong>
              <span>Wi-Fi · BLE</span>
            </div>

            <div className="board-pins pins-left">
              {espPins.map((_, i) => <i key={`esp-l-${i}`} />)}
            </div>
            <div className="board-pins pins-right">
              {espPins.map((_, i) => <i key={`esp-r-${i}`} />)}
            </div>

            <span className="board-silk silk-a">3V3</span>
            <span className="board-silk silk-b">GND</span>
            <span className="board-silk silk-c">GPIO</span>
            <div className="board-port usb-c">USB-C</div>
          </div>

          <div className="dev-board arduino-board">
            <div className="board-header">
              <span className="board-chip-label">microcontroller</span>
              <span className="board-led alt" />
            </div>

            <div className="board-chip arduino-chip">
              <small>ATmega328P</small>
              <strong>Arduino</strong>
              <span>GPIO · PWM · ADC</span>
            </div>

            <div className="board-pins pins-top horizontal">
              {arduinoPins.map((_, i) => <i key={`ard-t-${i}`} />)}
            </div>
            <div className="board-pins pins-bottom horizontal">
              {arduinoPins.slice(0, 10).map((_, i) => <i key={`ard-b-${i}`} />)}
            </div>

            <span className="board-silk arduino-silk">UNO / LAB</span>
            <div className="board-port usb-mini">USB</div>
          </div>

          <div className="sensor-node">
            <div className="sensor-body">
              <small>sensor</small>
              <strong>DHT22</strong>
              <span>temp / hum</span>
            </div>
            <div className="sensor-pins">
              <i /><i /><i />
            </div>
          </div>

          <div className="mini-breadboard">
            <div className="breadboard-rail rail-positive" />
            <div className="breadboard-rail rail-negative" />
            <div className="breadboard-grid">
              {breadboardHoles.map((_, i) => <span key={i} />)}
            </div>
          </div>

          <span className="bench-label label-gpio">GPIO</span>
          <span className="bench-label label-i2c">I²C</span>
          <span className="bench-label label-5v">5V</span>
        </div>
      </div>
    </div>
  )
}
