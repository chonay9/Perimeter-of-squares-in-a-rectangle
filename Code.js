function perimeter(n) {
var a = 1,b = 1,y;
  for(var i=0;i<=n;i++){
    y = a + b;
    a = b;
    b = y;
    //console.log(y);
  }
//console.log(y);
return (y-1)*4;
}


/**********TDD***********
Test.describe("Basic tests",function() {
Test.it("Small numbers",function() {
    Test.assertEquals(perimeter(0), 4)
    Test.assertEquals(perimeter(5), 80)
    Test.assertEquals(perimeter(7), 216)
    Test.assertEquals(perimeter(20), 114624)
    Test.assertEquals(perimeter(30), 14098308)
})})
************************/
