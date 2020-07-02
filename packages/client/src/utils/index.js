export const getTimeOfDay = (date) => {
	const hours = date.getHours();

	if (hours >= 6 && hours < 12) {
		// [6:00-11:59] Morning.
		return 'morning';
	}

	if (hours >= 12 && hours < 17) {
		// [12:00-16:59] Afternoon.
		return 'afternoon';
	}

	if (hours >= 17 && hours < 20) {
		// [17:00-19:59] Evening.
		return 'evening';
	}

	if (hours >= 20 || hours < 6) {
		// [20:00-5:59] Night.
		return 'night';
	}
};
