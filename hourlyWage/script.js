function hourlyWage(wage) {
  var months = wage / 12;
  //console.log(months);
  var weeks = months / 4.3;
  var days = weeks / 5;
  var hours = days / 8;
  //console.log(hours);
  console.log(hours.toFixed(2));
  return hours.toFixed(2);
}

hourlyWage(42500);
