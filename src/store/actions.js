
export const CHANGE_DATE = "CHANGE_DATE";

export const changeDate = date => {
	return {
		type: CHANGE_DATE,
		startDate: date.startDate,
		endDate: date.endDate
	}
}

