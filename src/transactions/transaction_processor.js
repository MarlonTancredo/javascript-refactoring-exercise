// Marlon do arrow function
function processTransactions(transActions) {
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
  const txr = Object.keys(txCount).map((key) => {
    return `${key} ${txCount[key]}`;
  });

  return txr;
}

function sortByAmountThenName(txCount) {
  const sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
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
  return transactions !== undefined;
}

module.exports = processTransactions;
