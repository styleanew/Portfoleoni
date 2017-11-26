

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

const db = firebase.database();
const viewsref = db.ref('pageviews');
const textsref = db.ref('html_inner');

var pageViewsRef = viewsref.child('pageviews');
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

var franText1Ref = db.ref('html_inner/' + 'fran1');

if (window && window.location && window.location.pathname) {
	franText1Ref.on('value', function(text1) { 
		let fran1Text = text1.val();
		let $fran1 = $('.franc1');
		$fran1.text(fran1Text);
	});
}

var franText2Ref = db.ref('html_inner/' + 'fran2');

franText2Ref.on('value', function(text2) { 
	let fran1Text = text2.val();
	let $fran2 = $('.franc2');
	$fran2.text(fran1Text);
});
