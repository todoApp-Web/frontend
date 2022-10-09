const postData = {
	text: 'Demo',
	completed: true,
};

const getData = {
	todos: [
		{
			_id: '1',
			text: 'Demo 1',
            completed: true,
			_v: 0,
		},
		{
			_id: '2',
			text: 'Demo 2',
            completed: true,
			_v: 0,
		},
		{
			_id: '3',
			text: 'Demo 3',
            completed: true,
			_v: 0,
		},
	],
};

module.exports = {
	postData,
	getData,
};
