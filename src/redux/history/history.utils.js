export const updateHistoryTracks = (oldHistory, newNumb) => {
  const index = oldHistory.indexOf(newNumb);
  let newHistory = [...oldHistory];
  if (index !== -1) {
    newHistory = oldHistory.filter((item) => item !== newNumb);
  }
  newHistory.push(newNumb);
  return newHistory.length > 5 ? newHistory.slice(1) : newHistory;
};
