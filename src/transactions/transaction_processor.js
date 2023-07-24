 export function processTransactions(transActions) {
  if (!validateTransactions(transActions)) {
    throw new Error("Undefined collection of transactions");
  }

 
  let txCount = transActions.reduce((itemsCountObj, item) => {
    itemsCountObj[item] = (itemsCountObj[item] || 0) + 1;
    return itemsCountObj;
  }, {});

  txCount = sortByAmountThenName(txCount);

  const arrayOfTransactions = Object.entries(txCount).map(([key, value]) => `${key} ${value}`);

  return arrayOfTransactions;
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

const validateTransactions = (transactions) => transactions !== undefined;


