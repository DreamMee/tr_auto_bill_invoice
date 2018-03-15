/*function testupdate(){
		event.preventDefault();
		
		var up = {
				"i_mid_id" : $("#i_mid_id").val(),
			}
			var midup = JSON.stringify(up);
		console.log(up);
		console.log(midup);
			$.ajax({
				data : midup,
				type : "PUT",
				contentType : "application/json",
				url : "http://localhost:8080/update",
				dataType : 'json',
				success : function(updd) {
					console.log(updd);
				}
			});
		
	};	
*/


/*$("#customerForm").submit(function(event) {
	// Prevent the form from submitting via the browser.
	event.preventDefault();
	
	// get data from submit form
	
	var formCustomer = {
			name : $("#name").val(),
			age : $("#age").val(),
			address : {
		    	street : $("#street").val(),
		    	postcode : $("#postcode").val()
		    }
	}
	console.log(formCustomer);

	
	// store customer
	listCustomers.push(formCustomer);
	console.log(listCustomers);
	
	// re-render customer table by append new customer to table
	
	var customerRow = '<tr>' +
						'<td>' + listCustomers.length + '</td>' +
						'<td>' + formCustomer.name.toUpperCase() + '</td>' +
						'<td>' + formCustomer.age + '</td>' +
						'<td>' + formCustomer.address.street + '</td>' +
						'<td>' + formCustomer.address.postcode + '</td>' +
				        '<td class="text-center">' +
				        	'<input type="hidden" value=' + (listCustomers.length - 1) + '>' +
				        	'<a>' +
				  				'<span class="glyphicon glyphicon-remove"></span>' +
							'</a>' +
				        '</td>' +
					  '</tr>';

	$('#customerTable tbody').append(customerRow);

	// just how customer table and POST button
	$('#customerTable').show();
	$('#postCustomersBtn').show();
	
	// Reset FormData after Posting
	resetData();
});*/