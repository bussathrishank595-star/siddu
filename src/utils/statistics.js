export const mean = values => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
export const variance = values => values.length ? values.reduce((sum, value) => sum + (value - mean(values)) ** 2, 0) / values.length : 0;
export const standardDeviation = values => Math.sqrt(variance(values));
export const correlation = (x, y) => {
  const mx = mean(x), my = mean(y);
  const numerator = x.reduce((sum, value, index) => sum + (value - mx) * (y[index] - my), 0);
  const denominator = Math.sqrt(x.reduce((sum, value) => sum + (value - mx) ** 2, 0) * y.reduce((sum, value) => sum + (value - my) ** 2, 0));
  return denominator ? numerator / denominator : 0;
};
