import { useEffect, useRef, useState } from "react"
import { generateRandomNumber } from "./genRandomNumber"
import { ParticleAnimation } from "./particles/particle-animation"
import './animation-style.css'

class ParticleProperty {
  // side = false -> izquierda, true -> derecha
  // type = 0 -> luz verde, 1 -> círculo celeste
  constructor(positionX = 0, positionY = 0, size = 0, side = false, type = 0) {
    this.positionX = positionX
    this.positionY = positionY
    this.size = size
    this.side = side
    this.type = type
  }
}

export const Animation = () => {
  const [particles, setParticles] = useState([])
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    console.log(particles)
    if (!isRendered) {
      initAnimations()
      setIsRendered(true)
    } else {
      setTimeout(() => {
        generateRandomPositionY()
      }, 7000)
    }

  }, [particles])

  const initAnimations = () => {
    const animations = []
    animations.push(new ParticleProperty(-250, -200, 410, false, 0))
    animations.push(new ParticleProperty(240, 71, 400, true, 0))
    animations.push(new ParticleProperty(-160, 1871, 290, false, 0))
    animations.push(new ParticleProperty(260, 1732, 430, true, 0))
    animations.push(new ParticleProperty(240, 71, 410, true, 1))
    animations.push(new ParticleProperty(280, 805, 370, true, 1))
    animations.push(new ParticleProperty(-280, 2473, 310, false, 1))
    animations.push(new ParticleProperty(360, 3607, 390, true, 1))
    setParticles(animations)
  }

  const generateRandomPositionY = () => {
    const animations = []
    particles.forEach(particle => {
      const maxPositionY = document.getElementById('landing-animation-layout').offsetHeight - particle.size
      // do {
      // } while (validateProximityParticles(particle))
      particle.positionY = generateRandomNumber(maxPositionY, -200)
      animations.push(particle)
    })
    setParticles(animations)
  }

  // // Valida que las partículas no estén tan juntas
  // const validateProximityParticles = (particleToValidate) => {

  //   particles.forEach(particle => {
  //     if (particle.side === particleToValidate.side) {
  //       const distance = Math.abs(particle.positionY) - Math.abs(particleToValidate.positionY)
  //       if (Math.abs(distance) < 500) {
  //         return true
  //       } else {
  //         return false
  //       }
  //     }
  //   })

  // }

  return (
    <div id='landing-animation-layout'>
      {
        particles.map(particle => {
          console.log(`Elemento -> ${particle}`)
          return <ParticleAnimation particleProperties={particle} />
        }
        )
      }
    </div>
  )

}
