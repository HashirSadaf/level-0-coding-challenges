function timeProperConversion(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  if (hours > 1 || hours == 0  && minutes > 1 || minutes == 0) {
  return hours + " hours and " + minutes + " minutes.";     
  }    else if (hours == 1 && minutes > 1 || minutes == 0) {
      return hours + " hour and " + minutes + " minutes.";
  }    else if (hours > 1 || hours == 0 && minutes == 1) {
      return hours + " hours and " + minutes + " minute.";
  }    else if (hours == 1 && minutes == 1) {
      return hours + " hour and " + minutes + " minute.";
  }    
}
