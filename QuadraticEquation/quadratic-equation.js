function calcQuadratic(a,b,c) {
	var a,b,c,d,x1,x2;
	a=a;
	b=b;
	c=c;
	d=(Math.pow(b,2)-(4*a*c));
	x1=(-b-Math.sqrt(d))/(2*a);
	x2=(-b+Math.sqrt(d))/(2*a);

	if(d>0) {
		console.log("x1= "+x1+"\nx2= "+x2);
	} else if(d<0) {
		console.log("No real roots");
	} else {
		console.log("x= "+x1);
	}
}

calcQuadratic(2,5,-3);
calcQuadratic(2,-4,2);
calcQuadratic(4,2,1);