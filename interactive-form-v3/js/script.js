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
	console.log(e.target.value);
	color.disabled=false;


		for (let i=0; i < color.children.length; i++){

				if(e.target.value===color.children[i].getAttribute('data-theme')){
					color.children[i].hidden=false;
					console.log(color.children[i]);
					color.children[i].setAttribute('selected', true);
				}else{
					color.children[i].hidden=true;
					color.children[i].removeAttribute('selected');
					//console.log(color.children[1]);
				}

		}

		
		

	
	

})

