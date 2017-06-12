const getRandomPointInCircle = (radius) => {
  const circumferencePosition = 2 * Math.PI * Math.random();
  const position = Math.random() + Math.random();
  const positionInCircle = position > 1 ? 2 - position : position;
  return {
    x: Math.round(radius * positionInCircle * Math.cos(circumferencePosition)),
    y: Math.round(radius * positionInCircle * Math.sin(circumferencePosition)),
  };
};

export default getRandomPointInCircle;
