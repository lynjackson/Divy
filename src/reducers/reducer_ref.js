export default function(state = '', action) {
	switch (action.type) {
		case 'SETREF':
			return action.payload;
			break;
		default:
			return state;
			break;
	}
};
