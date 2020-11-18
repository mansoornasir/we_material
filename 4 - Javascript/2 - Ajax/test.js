
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// Runs when the request is successful
		console.log(xhr.responseText);
	} else {
		// Runs when it's not
		console.log(xhr.responseText);
	}

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://skew.com/d-solo/hYed6CTmz/bitcoin-options?orgId=1&to=now&from=now-3M&panelId=76&theme=light&refresh=30s');
xhr.send();