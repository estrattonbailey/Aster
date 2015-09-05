var data_obj = {
	docs: [],
	user: 'estrattonbailey.com'
};

function App(editor, view){
	this.editor = $(editor);
	this.view = $(view);
}
App.prototype.GET = function(){
	this.storage = localStorage.getItem('aster_data') !== undefined ? localStorage.getItem('aster_data') : undefined;
	return this.storage;
}
App.prototype.ADD = function(){
	data_obj.docs.push({'Title of Post': 'Content of the new post.'});
	data_obj.docs.push({'Title of Post 2': 'Content of the second new post.'});

	localStorage.setItem('aster_data', JSON.stringify(data_obj));
}

jQuery(function($){
	var Aster = new App('#Editor', '#View');

	var data = Aster.GET();

	if (data === undefined) {
		Aster.ADD();
	}

	console.log(data);
});