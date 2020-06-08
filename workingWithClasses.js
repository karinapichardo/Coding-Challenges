/*
Given a class for a BasicPlan, 
write the classes for StandardPlan and PremiumPlan which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓               ✓	         ✓	canStream
✓	        ✓	         ✓	canDownload
✓	        ✓           	 ✓	hasSD
                ✓	         ✓	hasHD
                                 ✓	hasUHD
1	        2	         4	numOfDevices
$8.99	    $12.99	      $15.99 price
*/

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = false;
  static hasUHD = false;
  static price = '$8.99';
}

class StandardPlan extends BasicPlan {
  static hasHD = true;
  static hasUHD = false;
  static numOfDevices = 2;
  static price = '$12.99';
}

class PremiumPlan extends StandardPlan {
  static hasUHD = true;
  static numOfDevices = 4;
  static price = '$15.99';
}

// testing classes 
console.log(BasicPlan.canStream) // --> true
console.log(BasicPlan.canDownload) // --> true
console.log(BasicPlan.numOfDevices) // --> 1
console.log(BasicPlan.hasSD) // --> true
console.log(BasicPlan.hasHD) // --> false
console.log(BasicPlan.hasUHD) // --> false
console.log(BasicPlan.price) // --> '$8.99'
console.log(StandardPlan.canStream) // true
console.log(StandardPlan.canDownload) // --> true
console.log(StandardPlan.numOfDevices) // --> 2
console.log(StandardPlan.hasSD) // --> true
console.log(StandardPlan.hasHD) // --> true
console.log(StandardPlan.hasUHD) // --> false
console.log(StandardPlan.price) // --> '$12.99'
console.log(PremiumPlan.canStream) // --> true
console.log(PremiumPlan.canDownload) // --> true
console.log(PremiumPlan.numOfDevices) // --> 4
console.log(PremiumPlan.hasSD) // --> true
console.log(PremiumPlan.hasHD) // --> true
console.log(PremiumPlan.hasUHD) // --> true
console.log(PremiumPlan.price) // --> '$15.99'
