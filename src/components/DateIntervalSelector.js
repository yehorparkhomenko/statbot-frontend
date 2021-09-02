import React from 'react';
import { connect } from 'react-redux'
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';


const mapDispatchToProps = dispatch => ({
	onChangeSelector: (dates, dateStrings, info) => {
		dispatch({type: "CHANGE_DATE", 
			startDate: dates[0], 
			endDate: dates[1]});
	}
});

class DateIntervalSelector extends React.Component {
	render () {
		const {RangePicker} = DatePicker;

		const dateFormat = 'YYYY/MM/DD';

		const todayMoment = moment()
		const weekBeforeMoment = todayMoment.clone().subtract(7, 'days')

		return (
			<Space direction="vertical" size={12}>
				<RangePicker
					defaultValue={[weekBeforeMoment, todayMoment]}
					format={dateFormat}
					onChange = {this.props.onChangeSelector}
				/>
			</Space>
		);
	}
}

export default connect(null, mapDispatchToProps)(DateIntervalSelector);
