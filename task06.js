function maxNumber(num1, num2, num3) 
 {
  maxValue = 0;
  if (num1 > num2)
  {
    maxValue = num1;
  } else
  {
    maxValue = num2;
  }
  if (num3 > maxValue) 
  {
    maxValue = num3;
  }
  return maxValue;
}