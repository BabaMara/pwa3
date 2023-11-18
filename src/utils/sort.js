const isEqual = 0;
const isGreater = 1;
const isSmaller = -1;

export const comparer = (elA, elB) => {
  if (typeof elA === 'string' && typeof elB === 'string') return elA.localeCompare(elB);
  if (typeof elA === 'number' && typeof elB === 'number') return elA - elB;
  throw new Error('Sort comparison needs string or number types');
};
