function calcCylinderVolume(arr){
	var radius=arr[0];
	var height=arr[1];
	var result=(Math.PI*radius*radius*height).toFixed(3);
	return result;
}

calcCylinderVolume([2,4]);
calcCylinderVolume([5,8]);
calcCylinderVolume([12,3]);