// Marlon do arrow function
function processTransactions(transActions) {
  const txr = [];

  if (!validateTransactions(transActions)) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = {};

  const numberOfTransactions = transActions.length;
  // Zanna refactors it
  for (var i = 0; i < numberOfTransactions; i++) {
    const transaction = transActions[i];
    txCount[transaction]
      ? (txCount[transaction] += 1)
      : (txCount[transaction] = 1);
  }

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning - Marlon do
  Object.keys(txCount).forEach(function (key, index) {
    txr[index] = `${key} ${txCount[key]}`;
  });

  return txr;
}

function sortByAmountThenName(txCount) {
  const sortedKeys = Object.keys(txCount).sort(function sortingFunction(
    itemOne,
    itemTwo
  ) {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  const sortedResults = {};
  for (let objectKey of sortedKeys) {
    sortedResults[objectKey] = txCount[objectKey];
  }

  return sortedResults;
}

// Zanna refactors it
function validateTransactions(transactions) {
  if (transactions === undefined) {
    return false;
  }

  return true;
}

module.exports = processTransactions;
