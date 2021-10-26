// setting the name to be the first focust of the page

const name = document.getElementById('name');
const nameFocus = name.focus();

//hide the job role text input when the drop down menu "other" has not been selected

const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display="none";

//make the program display the block once "other" is selected AND hide the block if another choice is selected
const title= document.getElementById('title');
title.addEventListener('change', (e)=>{
	if (title.value==='other'){

	otherJobRole.style.display="block";
	} else {
		otherJobRole.style.display="none";
	}
});

//disable the color element
//const shirtColor = document.getElementById("shirt-colors");
const color = document.getElementById("color");
//color.style.display="none";

color.disabled=true;

//set an event listener to design to detect a change and if so enable shirt color selection

const design = document.getElementById("shirt-designs");
design.addEventListener('change', e=>{
	color.disabled=false;


		for (let i=0; i < color.children.length; i++){

				if(e.target.value===color.children[i].getAttribute('data-theme')){
					color.children[i].hidden=false;
					color.children[i].setAttribute('selected', true);
				}else{
					color.children[i].hidden=true;
					color.children[i].removeAttribute('selected');
					//console.log(color.children[1]);
				}

		}

// set the total cost for activities so it updates via checking and unchecking different courses

const activitiesBox = document.getElementById("activities-box");
activitiesBox.addEventListener('change', e=>{

	var input= document.querySelectorAll('checkbox');
	//var clickedType = document.getAttribute('data-cost');		
	let activitiesCost = document.getElementById('activities-cost');
	activitiesCost.innerText='';
	let updatedCost = 0;
	let inputCheckbox = document.querySelectorAll('#activities-box input[type="checkbox"]');
	let counter=0;
		for (let i=0; i < inputCheckbox.length; i++ ){

		if(inputCheckbox[i].checked){

			updatedCost += parseInt(inputCheckbox[i].getAttribute('data-cost'));
			counter +=1;
			activitiesCost.innerText = `Total: $${updatedCost}`;
		}	else if(counter===0	){
			activitiesCost.innerText = 'Total: $0';
			}
		

		
			

console.log(activitiesCost);

};
});
})
