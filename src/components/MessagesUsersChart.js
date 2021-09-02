import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Line } from '@ant-design/charts';
import StatsAPI from "../services/StatsAPI";
import moment from "moment";

const mapStateToProps = state => ({
	startDate: state.startDate,
	endDate: state.endDate
});

class MessagesUsersChart extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	async componentDidMount() {
		const windowUrl = window.location.href
		var chatId = windowUrl.substring(windowUrl.lastIndexOf('/') + 1);

		let startDate = this.props.startDate.format();
		let endDate = this.props.endDate.format();

		const messages = await StatsAPI.fetchMessagesByDates(chatId, startDate, endDate)
		const users = await StatsAPI.fetchUsersByDates(chatId, startDate, endDate)
		this.setState({ data: [...messages, ...users]})
	}
	
 	async componentDidUpdate(prevProps) {
		if (this.props.startDate != prevProps.startDate || this.props.endDate != prevProps.endDate){
			const windowUrl = window.location.href
			var chatId = windowUrl.substring(windowUrl.lastIndexOf('/') + 1);

			let startDate = this.props.startDate.format();
			let endDate = this.props.endDate.format();

			const messages = await StatsAPI.fetchMessagesByDates(chatId, startDate, endDate)
			const users = await StatsAPI.fetchUsersByDates(chatId, startDate, endDate)
			this.setState({ data: [...messages, ...users]})
		}
	}
	
 	render () {
		var config = {
			data: this.state.data,
			xField: 'date',
			yField: 'value',
			seriesField: 'category',
			yAxis: {
				label: {
					formatter: function formatter(v) {
						return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
							return ''.concat(s, ',');
						});
					},
				},
			},
			color: ['#1979C9', '#d2280b', '#faa219'],
		};
		return <Line {...config} />;
	}
}
 

export default connect(mapStateToProps)(MessagesUsersChart);

