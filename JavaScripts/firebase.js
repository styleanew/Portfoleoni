

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAtn2P7YIVpOwyqTxfmaBK-uq-fgFf4qlg",
	authDomain: "portfoleoni.firebaseapp.com",
	databaseURL: "https://portfoleoni.firebaseio.com",
	projectId: "portfoleoni",
	storageBucket: "portfoleoni.appspot.com",
	messagingSenderId: "470145900753"
};
firebase.initializeApp(config);

var db = firebase.database();
var ref = db.ref('pageviews');

var pageViewsRef = ref.child('pageviews');
if (window && window.location && window.location.pathname) {

	var pathkey = window.location.pathname;
	// This is the key for now MVP
	pageRef = db.ref('pageviews/' + 111);
	var counted = false;

	pageRef.on('value', function (pageviews) {
		var pageviewsCount = pageviews.val();

		var $pageviews = $('#pageviews');
		//$pageviews.attr('title', pageviewsCount + ' people saw this post');
		$pageviews.text('Welcome visitor ' + pageviewsCount + '.');
		$pageviews.link = null;
		if (!counted) {
			counted = true;
			pageRef.transaction(function (views) {
				return views + 1;
			})
		}
	});

}