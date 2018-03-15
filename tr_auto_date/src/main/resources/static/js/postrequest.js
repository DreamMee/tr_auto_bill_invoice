
//////////////////////////////////////////

	var listCustomers = [];
	$('#customerTable').hide();
	$('#postCustomersBtn').hide();

	


	
		$.ajax({
			type : "GET",
			contentType : "application/json",
			url : "http://localhost:8080/user",
			dataType : 'json',
			success: function(result){
					//console.log(result);
					//console.log(result[0].i_group_id);
					$.each(result, function(i, data){
											
						var formCustomer = {
				    			"i_group_id" : data.i_group_id,
				    			"i_mid_id" :data.i_mid_id,
				    			"dt_install" : data.dt_install,
				    			"dt_bill_tr": data.dt_bill_tr,
				    			"dt_nextbill_tr": data.dt_nextbill_tr,
				    			"contact_id":data.contact_id,
				    			"title":data.title,
				    			"product_id":data.product_id,
				    			"round":data.round,
				    			"active":data.active,
				    			"c_plate_number":data.c_plate_number,
				    			"c_car_code":data.c_car_code,
				    			"c_group_name":data.c_group_name,
				    			"c_comment":data.c_comment,	
				    	};
						//console.log(formCustomer);
						//console.log(Object.values(formCustomer));
						// store customer
						listCustomers.push(formCustomer);
						

						//console.log(listCustomers)
						// re-render customer table by append new customer to table
						
						var customerRow = '<tr>' +
											'<td>' + listCustomers.length + '</td>' +
											'<td>' + formCustomer.i_group_id + '</td>' +
											'<td>' + formCustomer.dt_install + '</td>' +
											'<td>' + formCustomer.dt_bill_tr + '</td>' +
											'<td>' + formCustomer.dt_nextbill_tr + '</td>' +
											'<td>' + formCustomer.contact_id + '</td>' +
											'<td>' + formCustomer.title + '</td>' +
											'<td>' + formCustomer.product_id + '</td>' +
											'<td>' + formCustomer.round + '</td>' +
											'<td>' + formCustomer.active + '</td>' +
											'<td>' + formCustomer.c_plate_number + '</td>' +
											'<td>' + formCustomer.c_car_code + '</td>' +
											'<td>' + formCustomer.c_group_name + '</td>' +
											'<td>' + formCustomer.c_comment + '</td>' +
											
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
						
				    	resetData();


				    	// DO POST
				    	$.ajax({
				    		type : "POST",
				    		contentType : "application/json",
				    		accept: 'text/plain',
				    		url : "http://localhost:8080/save",
				    		data : JSON.stringify(listCustomers),
				    		dataType: 'text',
				    		success : function(result) {
				    			// clear customer body

				    			$('#customerTable tbody').empty();
				    			$('#customerTable').hide();
				    			
				    			// re-set customer table list
				    			listCustomers = [];
				    			
				    			// fill successfully message on view
				    			$("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" + 
				    									result+
				    									  "</p>");
				    		}
				    	});


				    		
				    	
				    	
				        
				    	// Do DELETE a Customer via JQUERY AJAX
				    	$(document).on("click","a",function() {
				    		var customerId = $(this).parent().find('input').val();
				    		$(this).closest("tr").remove()
				    	});
				    	
				    	// Submit List of Customer to Back-End server
				    	
				        
				        function resetData(){
				        	$("#name").val("");
				        	$("#age").val("");
				        	$("#street").val("");
				        	$("#postcode").val("");
				        }

				    	
				    	/////////////////ต่อนี่
				    	
				        
				        
				        
				    	////////////////ต่อนี่
					});

					var i_group_id = [];
					var i_mid_id = [];
					var dt_install = [];
					var dt_bill_tr = [];
					var dt_nextbill_tr = [];
					var contact_id = [];
					var title = [];
					var product_id = [];
					var round = [];
					var active = [];
					var c_plate_number =[];
					var c_car_code = [];
					var c_group_name = [];
					var c_comment = [];
					var data = [];
					// GET REQUEST
					
						
					
					// DO GET
					
						$.ajax({
							type : "GET",
							url : "http://localhost:8080/all",
							success: function(result){	
									
									// ลูบเอาจำนวนรถ แล้วส่งไปสร้างบิล
									
									$.each(result,function(key, value) {
								//	for (const [key, value] of Object.entries(result)) {						 						
										  var arr_i_group_id = [];
										  var arr_i_mid_id = [];
										  var arr_dt_install = [];
										  var arr_dt_bill_tr = [];
										  var arr_dt_nextbill_tr = [];
										  var arr_contact_id = [];	
										  var arr_title = [];
										  var arr_product_id = [];
										  var arr_round = [];
										  var arr_active = [];
										  var arr_c_plate_number =[];
										  var arr_c_car_code = [];
										  var arr_c_group_name = [];
										  var arr_c_comment = [];						
								for( var i = 0; i < value.length; i++ ) 
									{						  							 				  
									arr_i_group_id.push(value[i].i_group_id),
									arr_i_mid_id.push(value[i].i_mid_id),
									arr_dt_install.push(value[i].dt_install),
									arr_dt_bill_tr.push(value[i].dt_bill_tr);
									arr_dt_nextbill_tr.push(value[i].dt_nextbill_tr);							  
									arr_contact_id.push(value[i].contact_id)
									arr_title.push(value[i].title);
									arr_product_id.push(value[i].product_id);
									arr_round.push(value[i].round);
									arr_active.push(value[i].active);
									arr_c_plate_number.push(value[i].c_plate_number);
									arr_c_car_code.push(value[i].c_car_code);
									arr_c_group_name.push(value[i].c_group_name);
									arr_c_comment.push(value[i].c_comment);							 							 												
								}	
										//ใช้ตัวแปรจากตรงนี้ ไปแมพใน API
										  i_group_id = arr_i_group_id[0];
										  i_mid_id = arr_i_mid_id,
										  dt_install = arr_dt_install[0],
										  dt_bill_tr = arr_dt_bill_tr[0],
										  dt_nextbill_tr = arr_dt_nextbill_tr[0],
										  contact_id = arr_contact_id[0],
										  title = arr_title[0],
										  product_id = arr_product_id[0],
										  round = arr_round[0],
										  active = arr_active[0],
										  c_plate_number = arr_c_plate_number,
										  c_car_code = arr_c_car_code[0],
										  c_group_name = arr_c_group_name[0],
										  c_comment = arr_c_comment[0]
										  
										  
										 
										    var lodata = {
												  "i_group_id" : i_group_id,
									    			"i_mid_id" :i_mid_id,
									    			"dt_install" : dt_install,
									    			"dt_bill_tr": dt_bill_tr,
									    			"dt_nextbill_tr": dt_nextbill_tr,
									    			"contact_id":contact_id,
									    			"title":title,
									    			"product_id":product_id,
									    			"round":round,
									    			"active":active,
									    			"c_plate_number":c_plate_number,
									    			"c_car_code":c_car_code,
									    			"c_group_name":c_group_name,
									    			"c_comment":c_comment,				    			
									    	};
										  console.log(listCustomers)
										    data.push(lodata);
										    console.log(data)	
										
										    console.log(lodata.i_mid_id);
										    
										    var if_mid = lodata.i_mid_id ; 
										    var i = if_mid.length
										  
										    
										  
										    
										    
										    if(i<11){
										    	 console.log("สร้างบิลปกติ ");
										    	// ใช้ฟังชั่นค์สร้างบิลตรงนี้
													
													var contact_id = lodata.contact_id;
													var c_car_code = lodata.c_car_code;
													var c_group_name = lodata.c_group_name;
													var c_plate_number = lodata.c_plate_number;
													var dt_bill_tr = lodata.dt_bill_tr;
													var dt_nextbill_tr = lodata.dt_bill_tr;
													var dt_install = lodata.dt_install;
													var i_group_id = lodata.i_group_id;
													var i_mid_id = lodata.i_mid_id;
													console.log(i_mid_id);
													var product_id = lodata.product_id;
													var round = lodata.round;
													var title = lodata.title;

													// ดึงข้อมูลคู่ค้า

													var timestamp = Math.floor(new Date() / 1000);
													var hash = CryptoJS.MD5("d9ee33" + "t" + timestamp)
															.toString();
													var load = {
														"company_id" : "6",
														"passkey" : "dc77bc85d9ee3371cf37aaf4d7b6ec71",
														"securekey" : hash,
														"timestamp" : timestamp,

														"id" : contact_id,

													};
													var json = JSON.stringify(load);
													var url = "https://eyefleet.trcloud.co/application/api-connector/end-point/engine-contact/retrieve-contact.php";
													var html = "";

													$.ajax({
													data : {
															"json" : json
																},
																url : url,
																type : "post",
																dataType : "json",
																success : function(res) {
																	console.log(res);
																	var organ = res.result.organization;
																	console.log(organ);
																	console.log(i_mid_id);
											
																	var organ = res.result.organization;
																	var address = res.result.address;
																	var name = res.result.name;
																	var tax_id = res.result.tax_id;
																	var telephone = res.result.telephone;
																	var branch = res.result.branch;

																	// ดึงข้อมูลสินค้า
																	var timestamp = Math
																			.floor(new Date() / 1000);

																	// ~ hash should be generated using
																	// server-side script
																	// ~ but, for sake of this example, let's
																	// use the CryptoJS.
																	var hash = CryptoJS.MD5("d9ee33" + "t" + timestamp).toString();

																	var product = {
																		"company_id" : "6",
																		"passkey" : "dc77bc85d9ee3371cf37aaf4d7b6ec71",
																		"securekey" : hash,
																		"timestamp" : timestamp,

																		"product_id" : product_id,

																					};

																	var json = JSON.stringify(product);

																	// ~ your end-point
																	var url = "https://eyefleet.trcloud.co/application/api-connector/end-point/engine-inventory/retrieve-inventory.php";

																	// ~ ajax post
																	$.ajax({
																	data : {
																			"json" : json
																				},
																				url : url,
																				type : "post",
																				dataType : "json",
																				success : function(res) {
																					console.log(res);

																					var category = res.result.category;
																					var product_name = res.result.product_name;
																					var product_id = res.result.product_id;
																					var sell_price = res.result.sell_price;
																					var unit = res.result.unit;

																					// คำนวนราคา
																					var quantity = i_mid_id.length;
																					var be_nbtc = 9.3458 ;
																					var before_nbtc = be_nbtc * quantity;
																					var nbtc = 10.0000;
																					
																					var sum_nbtc = nbtc
																					* quantity;
																			console.log("sum_nbtc = "+sum_nbtc);
																					var total_nbtc = sum_nbtc * 0.9300;
																					var vat_nbtc = sum_nbtc * 0.0700;
																					console.log("total_nbtc = "+total_nbtc);
																					console.log("vat_nbtc = "+vat_nbtc);
																					
																					console.log("sell_price = "+sell_price);
																					
																					console.log("sell_price = "+sell_price);
																					var sum_sell_price = parseInt(sell_price)
																							* quantity;
																					console.log("sum_sell_price = "+sum_sell_price);
																					

																					var grand_sell_price = sum_sell_price / 1.07;
																					console.log("grand_sell_price = "+grand_sell_price);
																					
																					var grand_nbtc = sum_nbtc / 1.07;
																					console.log("grand_nbtc = "+grand_nbtc);
																					
																					var grand_all = grand_sell_price + grand_nbtc;
																					console.log("grand_all = "+grand_all);
																					
																					var vat_all = grand_all * 0.07;
																					console.log("vat_all = "+vat_all);
																					var all_total = grand_all + vat_all;
																					console.log("all_total = "+all_total);
																					var sum_total = sum_sell_price + sum_nbtc;
																					console.log("sum_total = "+sum_total);
																					
																					var sum_totalafter = sum_total + sum_vat;
																					console.log("sum_totalafter = "+sum_totalafter);
																					
																					var sum_vat = sum_total * 0.07;
																					
																					console.log("sum_vat = "+sum_vat);
																					
																					//วันกำหนดชำระ
																					var due_date = new Date();
																					due_date.setDate(due_date.getDate()+30);
																					
																					var round_date1 = new Date();
																					round_date1.setMonth(round_date1.getMonth()+1);
																					round_date1.setMonth(round_date1.getMonth()-12);

																					
														
																					var round_date2 = new Date();
																					round_date2.setMonth(round_date2.getMonth()+1);
																					
																					

																					// สร้างบิล		https://eyefleet.trcloud.co/application/api-connector/end-point/engine-bill/bill.php
																					var myurl = "https://eyefleet.trcloud.co/application/api-connector/end-point/engine-bill/bill.php";
																					var passkey = "dc77bc85d9ee3371cf37aaf4d7b6ec71";
																					var encrypt_head = "d9ee33";
																					var company_id = "6";
																					var date_now = new Date();
																					var timestamp = Math
																							.floor(new Date() / 1000);
																					// ตัวแปร

																					// ~ hash should be
																					// generated using
																					// server-side script
																					// ~ but, for sake of this
																					// example, let's use the
																					// CryptoJS.
																					var hash = CryptoJS.MD5(encrypt_head+ "t"+ timestamp).toString();
																					var invoice = {
																						"company_id" : company_id,
																						"passkey" : passkey,
																						"securekey" : hash,
																						"timestamp" : timestamp,

																						"type" : "แจ้งหนี้-ค่าบริการ (IY)",
																						"issue_date" : date_now, //วันที่ออก
																						"due_date" : due_date, // วันครบกำหนดชำระ
																						"company_format" : "ABL",
																						"invoice_no" : "",
																						"reference" : "",
																						"invoice_note" : "",
																						"discount" : "0.00",
																						"tax" : vat_all, // ภาษี
																						"total" : grand_all, // ราคาสินค้าก่อนรวมภาษี
																						"grand_total" : all_total, // ราคาสินค้าหลังรวมภาษี  *ต้องเท่ากับ  tax+total					
																						"tax_option" : "in",
																						"url" : "",
																						"status" : "Debtor",
																						"staff" : "",
																						"department" : "",
																						"project" : "", //โครการ														"warehouse" : "6",
																						"salesman" : "", //พนักงานขาย
																						"payment" : "",
																						"wht" : "", // หักภาษี ณ ที่จ่าย
																										
																										
																						"tax_date" : date_now, //วันครบกำหนดชำระ
																						"po" : "10",
																						"tax_report" : 1,
																						"fx" : "",
																						"rate" : "", // อัตรา
																						
																						

																						"customer" : {
																							"title" : title,
																							"name" : name,
																							"organization" : organ,
																							"branch" : branch,
																							"email" : "",
																							"telephone" : telephone,
																							"address" : address,
																							"tax_id" : tax_id,
																							"add_contact" : false,
																							"identifier" : "key"
																						},

																						"product" : [
																								{
																									"id" : product_id,
																									"product" : product_name
																										//	+"รอบ" + round_date1 +"-" +round_date2
																											+"\n"
																											+ "MID "
																											+ i_mid_id
																											+"\n"
																											+ "ทะเบียน "
																											+ c_plate_number
																											+"\n",
																									"price" : sell_price,
																									"quantity" : quantity + "คัน",
																									"discount" : "",
																									"vat" : "7%",
																									"unit" : unit,
																									"before" : sum_sell_price,
																									"amount" : sum_sell_price,
																								},
																								{
																									"id" : "1-NBTC",
																									"product" : "บริการมูลค่าเพิ่มการบันทึกและส่ง  (รายได้ BOI)10 บาท",
																									"price" : "10.00",
																									"quantity" : quantity + "คัน",
																									"discount" : "",
																									"vat" : "7%",
																									"before" : grand_nbtc,
																									"amount" : sum_nbtc
																								} ],

																					};
																					var json = JSON
																							.stringify(invoice);

																					// ~ your end-point
																					var url = myurl;

																					// ~ ajax post
																					$
																							.ajax({
																								data : {
																									"json" : json
																								},
																								url : url,
																								type : "post",
																								dataType : "json",
																								success : function(
																										res) {
																									console
																											.log(res);
																								
																									
																									var dt_autobill = new Date();
																									
																									
																									
																								var all_grand_total = res.document.grand_total ;
																								var all_grand_total_real = parseInt(all_grand_total)
																									
																									var insert = {
																											"bill_id" : res.document.bill_id,
																											"contact_id" : contact_id,
																											"i_group_id" : i_group_id,
																											"company_format" : res.document.company_format,
																											"invoice_number" : res.document.invoice_number,
																											"grand_total" : all_grand_total_real,
																											"organization" : res.document.organization,
																											"telephone" : res.document.telephone,
																											"title" : res.document.title,
																											"total" : grand_all,
																											"vat" : vat_all,
																											"dt_autobill" : dt_autobill,
																											
																										}
																										var insertup = JSON.stringify(insert);
																									console.log(insert);
																									
																										$.ajax({
																											data : insertup,
																											type : "Post",
																											contentType : "application/json",
																											url : "http://localhost:8080/insert",
																											dataType : 'json',
																											success : function(kk) {
																												console.log(kk);
																											}
																										});
																									
																									
																									
																									$.each(i_mid_id, function( key, value ) {
																										 console.log(value);
																										 
																										 event.preventDefault();
																											
																											var up = {
																													"i_mid_id" : value,
																													//"round":round,
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
																										 
																										});
																							

																								}
																							});
																					
																				}
																			});
																}
															});
										    }else{
										    	// ใช้ฟังชั่นค์สร้างบิลตรงนี้
												console.log("สร้างเอกสารแนบ");
												console.log(lodata);
												var contact_id = lodata.contact_id;
												var c_car_code = lodata.c_car_code;
												var c_group_name = lodata.c_group_name;
												var c_plate_number = lodata.c_plate_number;
												var dt_bill_tr = lodata.dt_bill_tr;
												var dt_nextbill_tr = lodata.dt_bill_tr;
												var dt_install = lodata.dt_install;
												var i_group_id = lodata.i_group_id;
												var i_mid_id = lodata.i_mid_id;
												console.log(i_mid_id);
												var product_id = lodata.product_id;
												var round = lodata.round;
												var title = lodata.title;

												// ดึงข้อมูลคู่ค้า

												var timestamp = Math.floor(new Date() / 1000);
												var hash = CryptoJS.MD5("d9ee33" + "t" + timestamp)
														.toString();
												var load = {
													"company_id" : "6",
													"passkey" : "dc77bc85d9ee3371cf37aaf4d7b6ec71",
													"securekey" : hash,
													"timestamp" : timestamp,

													"id" : contact_id,

												};
												var json = JSON.stringify(load);
												var url = "https://eyefleet.trcloud.co/application/api-connector/end-point/engine-contact/retrieve-contact.php";
												var html = "";

												$.ajax({
												data : {
														"json" : json
															},
															url : url,
															type : "post",
															dataType : "json",
															success : function(res) {
																console.log(res);
																var organ = res.result.organization;
																console.log(organ);
																console.log(i_mid_id);
										
																var organ = res.result.organization;
																var address = res.result.address;
																var name = res.result.name;
																var tax_id = res.result.tax_id;
																var telephone = res.result.telephone;
																var branch = res.result.branch;

																// ดึงข้อมูลสินค้า
																var timestamp = Math
																		.floor(new Date() / 1000);

																// ~ hash should be generated using
																// server-side script
																// ~ but, for sake of this example, let's
																// use the CryptoJS.
																var hash = CryptoJS.MD5("d9ee33" + "t" + timestamp).toString();

																var product = {
																	"company_id" : "6",
																	"passkey" : "dc77bc85d9ee3371cf37aaf4d7b6ec71",
																	"securekey" : hash,
																	"timestamp" : timestamp,

																	"product_id" : product_id,

																				};

																var json = JSON.stringify(product);

																// ~ your end-point
																var url = "https://eyefleet.trcloud.co/application/api-connector/end-point/engine-inventory/retrieve-inventory.php";

																// ~ ajax post
																$.ajax({
																data : {
																		"json" : json
																			},
																			url : url,
																			type : "post",
																			dataType : "json",
																			success : function(res) {
																				console.log(res);

																				var category = res.result.category;
																				var product_name = res.result.product_name;
																				var product_id = res.result.product_id;
																				var sell_price = res.result.sell_price;
																				var unit = res.result.unit;
																				
																				// คำนวนราคา
																				var quantity = i_mid_id.length;
																				var be_nbtc = 9.3458 ;
																				var before_nbtc = be_nbtc * quantity;
																				var nbtc = 10.0000;
																				
																				var sum_nbtc = nbtc
																				* quantity;
																		console.log("sum_nbtc = "+sum_nbtc);
																				var total_nbtc = sum_nbtc * 0.9300;
																				var vat_nbtc = sum_nbtc * 0.0700;
																				console.log("total_nbtc = "+total_nbtc);
																				console.log("vat_nbtc = "+vat_nbtc);
																				
																				console.log("sell_price = "+sell_price);
																				
																				console.log("sell_price = "+sell_price);
																				var sum_sell_price = parseInt(sell_price)
																						* quantity;
																				console.log("sum_sell_price = "+sum_sell_price);
																				

																				var grand_sell_price = sum_sell_price / 1.07;
																				console.log("grand_sell_price = "+grand_sell_price);
																				
																				var grand_nbtc = sum_nbtc / 1.07;
																				console.log("grand_nbtc = "+grand_nbtc);
																				
																				var grand_all = grand_sell_price + grand_nbtc;
																				console.log("grand_all = "+grand_all);
																				
																				var vat_all = grand_all * 0.07;
																				console.log("vat_all = "+vat_all);
																				var all_total = grand_all + vat_all;
																				console.log("all_total = "+all_total);
																				var sum_total = sum_sell_price + sum_nbtc;
																				console.log("sum_total = "+sum_total);
																				
																				var sum_totalafter = sum_total + sum_vat;
																				console.log("sum_totalafter = "+sum_totalafter);
																				
																				var sum_vat = sum_total * 0.07;
																				
																				console.log("sum_vat = "+sum_vat);
																				
																				
																				//วันกำหนดชำระ
																				var due_date = new Date();
																				due_date.setDate(due_date.getDate()+30);
																				
																				var round_date1 = new Date();
																				round_date1.setMonth(round_date1.getMonth()+1);
																				round_date1.setMonth(round_date1.getMonth()-12);

																				console.log(round_date1);
													
																				var round_date2 = new Date();
																				round_date2.setMonth(round_date2.getMonth()+1);
																				console.log(round_date2);
																				

																				// สร้างบิล
																				var myurl = "https://eyefleet.trcloud.co/application/api-connector/end-point/engine-bill/bill.php";
																				var passkey = "dc77bc85d9ee3371cf37aaf4d7b6ec71";
																				var encrypt_head = "d9ee33";
																				var company_id = "6";
																				var date_now = new Date();
																				var timestamp = Math
																						.floor(new Date() / 1000);
																				// ตัวแปร
																					
																				// ~ hash should be
																				// generated using
																				// server-side script
																				// ~ but, for sake of this
																				// example, let's use the
																				// CryptoJS.
																				var hash = CryptoJS.MD5(encrypt_head+ "t"+ timestamp).toString();
																				var invoice = {
																					"company_id" : company_id,
																					"passkey" : passkey,
																					"securekey" : hash,
																					"timestamp" : timestamp,

																					"type" : "SERVICEFEE",
																					"issue_date" : date_now, //วันที่ออก
																					"due_date" : due_date, // วันครบกำหนดชำระ
																					"company_format" : "ABL",
																					"invoice_no" : "",
																					"reference" : "",
																					"invoice_note" : "",
																					"discount" : "0.00",
																					"tax" : vat_all, // ภาษี
																					"total" : grand_all, // ราคาสินค้าก่อนรวมภาษี
																					"grand_total" : all_total, // ราคาสินค้าหลังรวมภาษี  *ต้องเท่ากับ  tax+total					
																					"tax_option" : "ex",
																					"url" : "",
																					"status" : "Debtor",
																					"staff" : "",
																					"department" : "",
																					"project" : "", //โครการ														"warehouse" : "6",
																					"salesman" : "", //พนักงานขาย
																					"payment" : "",
																					"wht" : "", // หักภาษี ณ ที่จ่าย
																									
																									
																					"tax_date" : date_now, //วันครบกำหนดชำระ
																					"po" : "10",
																					"tax_report" : 1,
																					"fx" : "",
																					"rate" : "", // อัตรา
																					
																					

																					"customer" : {
																						"title" : title,
																						"name" : name,
																						"organization" : organ,
																						"branch" : branch,
																						"email" : "",
																						"telephone" : telephone,
																						"address" : address,
																						"tax_id" : tax_id,
																						"add_contact" : false,
																						"identifier" : "key"
																					},

																					"product" : [
																							{
																								"id" : product_id,
																								"product" : product_name
																									//	+"รอบ" + round_date1 +"-" +round_date2
																									//	+"\n"
																									//	+ "MID "
																									//	+ i_mid_id
																										+"\n"
																										+ "*หมายเหตุ รายละเอียดตามเอกสารแนบ"
																										,
																								"price" : sell_price,
																								"quantity" : quantity + "คัน",
																								"discount" : "",
																								"vat" : "",
																								"unit" : unit,
																								"before" : sum_sell_price,
																								"amount" : sum_sell_price,
																							},
																							{
																								"id" : "1-NBTC",
																								"product" : "บริการมูลค่าเพิ่มการบันทึกและส่ง  (รายได้ BOI)10 บาท",
																								"price" : "10.00",
																								"quantity" : quantity + "คัน",
																								"discount" : "",
																								"vat" : "",
																								"before" : grand_nbtc,
																								"amount" : sum_nbtc
																							} ],

																				};
																				var json = JSON
																						.stringify(invoice);

																				// ~ your end-point
																				var url = myurl;

																				// ~ ajax post
																				$
																						.ajax({
																							data : {
																								"json" : json
																							},
																							url : url,
																							type : "post",
																							dataType : "json",
																							success : function(
																									res) {
																								console
																										.log(res);
																							
																								 console.log("เริ่ม");
																								 /////////////สร้างเอกสารแนบ
																								 var up = {
																											"i_mid_id" : i_mid_id ,
																											"c_plate_number" : c_plate_number,
																											"bill_id" : res.document.bill_id ,
																											"company_format" : res.document.company_format,
																											"invoice_number" : res.document.invoice_number,
																											
																											//"round":round,
																										}
																										var midup = JSON.stringify(up);
																									console.log(up);
																									console.log(midup);
																										$.ajax({
																											data : midup,
																											type : "Post",
																											contentType : "application/json",
																											url : "http://localhost:8080/pdf",
																											dataType : 'json',
																											success : function(d) {
																												console.log(d);
																											}
																										});
																								 
																								 
																								    console.log("จบ");
																								var dt_autobill = new Date();
																								
																								
																								console.log(contact_id);
																								console.log(i_group_id);
																								console.log(sum_vat);
																								console.log(dt_autobill);
																								console.log(res.document.grand_total);
																								
																								
																								
																								
																							var all_grand_total = res.document.grand_total ;
																							var all_grand_total_real = parseInt(all_grand_total)
																								
																								var insert = {
																										"bill_id" : res.document.bill_id,
																										"contact_id" : contact_id,
																										"i_group_id" : i_group_id,
																										"company_format" : res.document.company_format,
																										"invoice_number" : res.document.invoice_number,
																										"grand_total" : all_grand_total_real,
																										"organization" : res.document.organization,
																										"telephone" : res.document.telephone,
																										"title" : res.document.title,
																										"total" : grand_all,
																										"vat" : vat_all,
																										"dt_autobill" : dt_autobill,
																										
																									}
																									var insertup = JSON.stringify(insert);
																								console.log(insert);
																								
																									$.ajax({
																										data : insertup,
																										type : "Post",
																										contentType : "application/json",
																										url : "http://localhost:8080/insert",
																										dataType : 'json',
																										success : function(kk) {
																											console.log(kk);
																										}
																									});
																								
																								

													
																								

																								
																								$.each(i_mid_id, function( key, value ) {
																									 console.log(value);
																									 
																									 event.preventDefault();
																										
																										var up = {
																												"i_mid_id" : value,
																												//"round":round,
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
																									 
																									});
																						

																							}
																						});
																				
																			}
																		});
															}
														});
										    };
										    
										
											
											
									});				
													
									        			        					     				        					       					        														      				
									$('#resultGetAllCustomerDiv ul').empty();
									var custList = "";
									var json = JSON.stringify(result,null, 4);
													
										
										$('#resultGetAllCustomerDiv .list-group').append("<li>" + json + "</li>");
							     
									
									// just re-css for result-div
									$('#resultGetAllCustomerDiv').css({'background-color':'#D16953', 'color':'white', 'padding':'20px 20px 5px 30px'});
									// just hide POST button
									if($('#customerTable').is(":hidden")){
										$('#postCustomersBtn').hide();	
									}
							},
							error : function(e) {
								$("#getResultDiv").html("<strong>Error</strong>");
								console.log("ERROR: ", e);
							}
						});
					 
					    
					

				}
		
		
		});	



	