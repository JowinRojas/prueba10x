//this function fill the table
(function fillltable(){
	let request = new Request("./JsonTest.json");
	fetch(request).then(function(resp){
		return resp.json();
	}).then(function(data){
		var table = '';
		for (var i = 0; i < data.articles.length; i++) {
			table += '<tr id="tr'+i+'">';
				table += '<td><div>'+data.articles[i].source.name+'</div></td>';
				table += '<td><div></div>'+data.articles[i].author+'</td>';
				table += '<td><div></div>'+data.articles[i].title+'</td>';
				table += '<td><div></div><textarea rows="4" class="textarea2" disabled>'+data.articles[i].description+'</textarea></td>';
				table += '<td><div></div>'+data.articles[i].publishedAt+'</td>';
				table += '<td><div><textarea rows="4" class="textarea2" disabled>'+data.articles[i].content+'</textarea></div></td>';
			table += '</tr>';

		}
		document.getElementById('tablebody').innerHTML = table;
	});
})();

//this function search in the json file
function searchbusiness(){
	var keyword = document.getElementById('searchbusiness').value;

	let request = new Request("./JsonTest.json");
	fetch(request).then(function(resp){
		return resp.json();
	}).then(function(data){
		for (var i = 0; i < data.articles.length; i++) {
			document.getElementById('tr'+i).setAttribute("class", '');
			var name = data.articles[i].source.name;
			var author = data.articles[i].author;
			if (keyword == name || keyword == author) {
				document.getElementById('tr'+i).setAttribute("class", 'bg-primary text-white');
				document.getElementById('tr'+i).focus();
			}else{
				
			}

		}
	});
};

//this function show the table with notices
(function shownotices(){
	let request = new Request("./JsonTest.json");
	fetch(request).then(function(resp){
		return resp.json();
	}).then(function(data){
		var text = '';
		for (var i = 0; i < data.articles.length; i++) {

			text += '<tr>';
				text += '<td>';
					text += '<div class="row">';

						text += '<div class="col-lg-6 col-md-6 col-sm-12">';
							text += '<img src="'+data.articles[i].urlToImage+'" class="col-lg-12">';
						text += '</div>';
					
						text += '<div class="col-lg-6 col-md-6 col-sm-12 h5 mt-5">';
							text += '<div class="col-lg-12 col-md-12 text-center">';
								text += data.articles[i].title;
							text += '</div>';
							text += '<div class="col-lg-12 col-md-12 mt-5 text-center">';
								text += '<button class="btn btn-info btn-lg" onclick="fillmodal('+i+')" data-toggle="modal" data-target="#modalinfo">Ver mas información</button>';
							text += '</div>';
						text += '</div>';

					text += '<div>';
				text += '</td>';
			text += '</tr>';
		}

		document.getElementById('notices').innerHTML = text;
	});
})();

//this function put the information of each notices in the modal
function fillmodal(number){
	let request = new Request("./JsonTest.json");
	fetch(request).then(function(resp){
		return resp.json();
	}).then(function(data){
		var modal = '';

		modal += '<div class="col-lg-12">';

			modal += '<div class="row">';
				modal += '<div class="h4 text-center col-lg-12 col-md-12 mt-3 mb-3">'+data.articles[number].source.name+'</div>';
			modal += '</div>';

			modal += '<div class="row">';
				modal += '<div><a href="'+data.articles[number].url+'" target="_blank"><img src="'+data.articles[number].urlToImage+'" class="col-lg-12 mb-3" title="Click para ir a la página"></a></div>';
			modal += '</div>';

			modal += '<div class="row">';
				modal += '<div class="col-lg-12 col-md-12 h4 mb-3">'+data.articles[number].title+'</div>';
			modal += '</div>';

			modal += '<div class="row">';
				modal += '<div class="col-lg-6"><textarea rows="4"  disabled>'+data.articles[number].description+'</textarea></div>';
				modal += '<div class="col-lg-6"><textarea rows="4"  disabled>'+data.articles[number].content+'</textarea></div>';
			modal += '</div>';

			modal += '<div class="row">';
				modal += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-5">'+data.articles[number].publishedAt+'</div>';
				modal += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-5 text-right">'+data.articles[number].author+'</div>';
			modal += '</div>';

		modal += '</div>';
		
		document.getElementById('noticemodal').innerHTML = modal;
	});
}

//this function animate the inputs in the contact's form
(function() {
	'use strict';
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
				}
				form.classList.add('was-validated');
		}, false);
		});
	}, false);
})();