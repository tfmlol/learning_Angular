angular.module("myApp").controller("myController",MyController)


function MyController(){
	var ctrl = this;
    ctrl.greeting="hello world";
	ctrl.message="First Message";

	ctrl.names=[{name:"alan"},{name:"helen"},{name:"mike"}];

    
	ctrl.popUp = function (){
     ctrl.message="hi girls";
}

}

