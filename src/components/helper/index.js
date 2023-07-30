export const getDirection = (destination, startingPoint) => {
  if (!destination) return;
  const direction = destination?.replace(
    "{{value}}",
    `${startingPoint?.lat}, ${startingPoint?.long}`
  );
  return direction;
};
