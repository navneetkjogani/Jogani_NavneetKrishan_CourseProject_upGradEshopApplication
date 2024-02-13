export const setFilter = (category) => {
	//Note: used for filtering of products based on selected category
	return {
		type: "SET_FILTER",
		category: category,
	}
};

export const clearFilter = () => {
	//Note: for clearing filter
	return {
		type: "CLEAR_FILTER",
	}
};

export const clearAllMetadata = () => {
	//Note: for clearing filter
	return {
		type: "CLEAR_ALL",
	}
};