const getElapsedTime = (startDate, endDate) => {
  if(!startDate){
    return;
  }
  if(!endDate) {
    endDate = new Date();
  }
  //milliseconds
  let elapsedTime = endDate.getTime() - startDate.getTime();
  // TODO: calculate the number or minutes, hours, days, and return the date opened for greater than 29 days
  console.log(elapsedTime);
  return elapsedTime;
};

module.exports = {
  getElapsedTime
};