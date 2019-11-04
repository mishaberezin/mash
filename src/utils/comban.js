// Возвращает перестановки заданного множества элементов.
// Кредитс: https://github.com/trekhleb/javascript-algorithms
export const getPermutations = elements => {
  if (elements.length === 1) {
    return [elements];
  }

  const permutations = [];

  const smallerPermutations = getPermutations(elements.slice(1));

  const firstElement = elements[0];

  for (const smallerPermutation of smallerPermutations) {
    for (let i = 0; i <= smallerPermutation.length; i++) {
      const permutationPrefix = smallerPermutation.slice(0, i);
      const permutationSuffix = smallerPermutation.slice(i);
      permutations.push([
        ...permutationPrefix,
        firstElement,
        ...permutationSuffix
      ]);
    }
  }

  return permutations;
};
