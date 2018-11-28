/*var calc={

	add:function(a,b){
		console.log(a+b);
	}
}

var scien_calc=Object.create(calc);
scien_calc.add(10,20);*/

/*var mobile={
	balance:function(bal,call){
		console.log(bal,call);
	},
    nobalance:function(nobal,call){
    	console.log(nobal,call);
    }

}

var cal_mobile=Object.create(mobile);
cal_mobile.balance(17.6,"can make a call");
cal_mobile.nobalance(0,"cannot make a call");


*/


var mobile={
	balance:0,
	loan:10,
	balance1:10,
	call:function(){

  	if(this.balance==0){
  		console.log("you cannot make a call");
  	}
  	else{
  		console.log("you can make a call");
  	}

  },
     lendingBalance:function(){
     	if(this.balance1<this.loan){
     		console.log("You have successfully recieved your loan as balance");
     	}
     	else{
     		console.log("You cannot access loan as balance.");
     	}
     }
	
}
console.log(mobile.balance);
mobile.call();
mobile.lendingBalance();



