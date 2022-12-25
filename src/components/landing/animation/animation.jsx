import { ParticleLightGreen } from "./particles/particle-light-green"

export const Animation = () => {



  return (
    <div id='landing-animation-layout' className='absolute z-50 top-0 bottom-0 right-0 left-0 overflow-hidden'>
      <ParticleLightGreen initialPositionX={360} initialPositionY={169} side={true} size={500} />
      <ParticleLightGreen initialPositionX={-220} initialPositionY={626} side={false} size={500} />
      <ParticleLightGreen initialPositionX={360} initialPositionY={1732} side={true} size={500} />
    </div>
  )
}
