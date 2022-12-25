export const generateRandomNumber = (max, min) => {
  // return (Math.random() * (max - min)) + (min)
  return max + Math.floor(Math.random() * min)
}