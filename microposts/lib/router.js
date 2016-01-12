Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//Posts Route
	this.route('posts',{
		path: '/',
		template: 'posts'
	});
	//About 
	this.route('about');

	//Profile Route
	this.route('profile');
});