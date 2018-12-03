const getElapsedTime = (startDate, endDate) => {
  // number of milliseconds in each
  const second = 1000;
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const twentyNineDays = 2505600000; 
  if(!startDate){
    return;
  }
  if(!endDate) {
    endDate = new Date();
  }
  //milliseconds
  let elapsedTime = endDate.getTime() - startDate.getTime();
  // if 30 days or more 
  if(elapsedTime > twentyNineDays) {
    return `on ${new Date(elapsedTime)}`;
  } else if(elapsedTime > day) {
    return (elapsedTime / day < 2) ? '1 day ago' : `${Math.round(elapsedTime / day)} days ago`;
  } else if(elapsedTime > hour) {
    return (elapsedTime / hour < 2) ? '1 hour ago' : `${Math.round(elapsedTime / hour)} hours ago`;
  } else if(elapsedTime > minute) {
    return (elapsedTime / minute < 2) ? '1 minute ago' : `${Math.round(elapsedTime / minute)} minutes ago`;
  } else {
    return "a minute ago";
  }
};

module.exports = {
  getElapsedTime
};