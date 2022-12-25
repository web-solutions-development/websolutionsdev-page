import { useContext, useEffect, useState } from "react"
import { generateRandomNumber } from "../genRandomNumber"
import './particles-style.css'

export const ParticleAnimation = ({ particleProperties }) => {

  const particleStyles = {}

  useEffect(() => {
    console.log(particleProperties)
  }, [])

  const setStylesParticle = () => {
    if (particleProperties.side) { // Esto significa que irá a la derecha
      particleStyles.right = "0px"
    } else {
      particleStyles.left = "0px"
    }
    particleStyles.transform = `translate(${particleProperties.positionX}px, ${particleProperties.positionY}px)`
    particleStyles.width = `${particleProperties.size}px`
    particleStyles.height = `${particleProperties.size}px`
  }

  setStylesParticle()
  if (particleProperties.type === 0) {
    return <div style={particleStyles} className={`particle-light`}></div>
  } else {
    return <div style={particleStyles} className={`particle-circle`}></div>
  }

}
