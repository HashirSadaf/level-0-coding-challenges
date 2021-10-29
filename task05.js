function areaOfTriangle(side1,side2,side3)
{
    let halfTriangle = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(halfTriangle*(halfTriangle - side1)*(halfTriangle - side2)*(halfTriangle - side3));
    return area 
}

console.log(areaOfTriangle(420, 69, 666));