export const fetchAllProducts = (accessToken) => {
	let promiseResolveRef = null;
	let promiseRejectRef = null;
	let promise = new Promise((resolve, reject) => {
		promiseResolveRef = resolve;
		promiseRejectRef = reject;
	});
	fetch('http://localhost:8080/api/products', {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + accessToken,
		},
	}).then((response) => {
		response.json().then((json) => {
			if(response.ok) {
				promiseResolveRef({
					data: json,
					response: response,
				});
			} else {
				promiseRejectRef({
					reason: "Server error occurred.",
					response: response,
				});
			}
		});
	}).catch((err) => {
		promiseRejectRef({
			reason: "Some error occurred.",
			response: err,
		});
	});
	return promise;
};