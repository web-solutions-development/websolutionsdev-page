import { useEffect, useState } from "react"
import { generateRandomNumber } from "../genRandomNumber"
import './particles-style.css'

export const ParticleLightGreen = ({ initialPositionY, initialPositionX, side, size }) => {

  const [positionY, setPositionY] = useState(initialPositionY)
  const [maxPositionY, setMaxPositionY] = useState(null)


  useEffect(() => {
    setMaxPositionY(document.getElementById('landing-animation-layout').offsetHeight - size)
  }, [])

  useEffect(() => {
    console.log("Del position y")
    generateRandomPosition()
  }, [positionY])

  const setSideParticle = () => {
    if (side) { // Esto significa que irá a la derecha
      particleStyles.right = "0px"
    } else {
      particleStyles.left = "0px"
    }
    particleStyles.transform = `translate(${initialPositionX}px, ${positionY}px)`
  }

  const particleStyles = {
    width: `${size}px`,
    height: `${size}px`,
  }

  setSideParticle()

  const generateRandomPosition = () => {
    setTimeout(() => {
      const coordY = generateRandomNumber(maxPositionY, -40)
      setPositionY(coordY)
    }, 7000)
  }


  return (
    <div style={particleStyles} className={`particle-light-green`}></div>
  )
}
