// Marlon do arrow function
function processTransactions(transActions) {
  if (!validateTransactions(transActions)) {
    throw new Error("Undefined collection of transactions");
  }

  // Count occurences of each transaction and store result in the object txCount
  let txCount = transActions.reduce((itemsCountObj, item) => {
    itemsCountObj[item] = (itemsCountObj[item] || 0) + 1;
    return itemsCountObj;
  }, {});

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
