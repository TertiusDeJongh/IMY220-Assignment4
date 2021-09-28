$(document).ready(() =>{
	//just to see if the page is ok
	
	$("button").on('click', function(){
		//now lets change the button
		//$(this).toggle();//this was removed...
		let span = $(this).prev().toggle();
		let b = span.prev().toggle();
		let parent = $(this).parent();//so we can prepend to it
		let ParentData = parent.data("type");
		let valueS = span.text();
		
		if(span.is(':visible')){
			$(this).html('Edit');
			let input = b.prev();	//grab the input before the b tag
			let newText = input.val();
			span.text(newText);	//change the text
			//now that it is toggled, we should remove the the input...
			input.remove();
		}
		else{
			/*let row = $("div", {//newly added stuff
				class: 'row'
			}).appendTo(parent);
			
			let collumn1 = $("div", {//newly added stuff
				class: 'col-8'
			}).appendTo(row);
			
			let collumn2 = $("div", {//newly added stuff
				class: 'col-4'
			}).appendTo(row);//*/
			
			
			$(this).html('Update');//pretty cool stuff below...
			$("<input/>", {
				type: ParentData,
				val: valueS
			}).prependTo(parent);//this was parent
			
			/*$("<button></button>", {
				html: "Update",
				class: "btn btn-dark pull-right"
			}).prependTo(collumn2);//*/
		}
		
	});
});

