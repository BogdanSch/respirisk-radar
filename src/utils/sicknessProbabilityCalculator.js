const calculateSicknessProbability = (aqi, respiratoryIllnessPercentage) => {
  return (aqi / 100) * (respiratoryIllnessPercentage / 100) * 1.15;
};

const calculateSicknessCount = (probability, groupSize) => {
  return Math.round(probability * groupSize);
};

export { calculateSicknessProbability, calculateSicknessCount };
