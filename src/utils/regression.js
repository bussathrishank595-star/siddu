import { mean, correlation } from './statistics';

export function regression(data) {
  const x = data.map(row => Number(row.usage));
  const y = data.map(row => Number(row.consumption));
  const meanX = mean(x), meanY = mean(y);
  const numerator = x.reduce((sum, value, i) => sum + (value - meanX) * (y[i] - meanY), 0);
  const denominator = x.reduce((sum, value) => sum + (value - meanX) ** 2, 0);
  const slope = denominator ? numerator / denominator : 0;
  const intercept = meanY - slope * meanX;
  const predicted = x.map(value => intercept + slope * value);
  const ssTotal = y.reduce((sum, value) => sum + (value - meanY) ** 2, 0);
  const ssResidual = y.reduce((sum, value, i) => sum + (value - predicted[i]) ** 2, 0);
  return { x, y, meanX, meanY, slope, intercept, predicted, correlation: correlation(x, y), rSquared: ssTotal ? 1 - ssResidual / ssTotal : 0, numerator, denominator };
}
export const predictValue = (x, slope, intercept) => intercept + slope * Number(x);
