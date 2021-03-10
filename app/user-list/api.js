export const userListApiCall = async (url) => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        return json;
	} catch (error) {
		console.error(error);
	}
}

export const avatarApiCall = async (url) => {
	try {
		let response = await fetch('https://i.pravatar.cc/300');
		return response?.url;
	} catch (error) {
		console.error(error);
	}
}