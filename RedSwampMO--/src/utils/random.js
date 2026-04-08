export const getRandomNumber = (forceOdd = false) => {
  if (forceOdd) {
    const odds = [1, 3, 5];
    return odds[Math.floor(Math.random() * odds.length)];
  }
  return Math.floor(Math.random() * 6) + 1;
};