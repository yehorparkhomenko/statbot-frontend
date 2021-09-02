import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Table, Tag, Space } from 'antd';
import StatsAPI from "../services/StatsAPI";
import moment from "moment";

import { connect } from 'react-redux';
const mapStateToProps = state => ({
	startDate: state.startDate,
	endDate: state.endDate
});


class MostActiveUsersList extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	async componentDidMount() {
			const windowUrl = window.location.href
			var chatId = windowUrl.substring(windowUrl.lastIndexOf('/') + 1);

			let startDate = this.props.startDate.format();
			let endDate = this.props.endDate.format();

			await StatsAPI.fetchMostActiveUsers(chatId, startDate, endDate)
				.then((json) => this.setState({ data: json }));
	}

	async componentDidUpdate(prevProps) {
		if (this.props.startDate != prevProps.startDate || this.props.endDate != prevProps.endDate){
			const windowUrl = window.location.href
			var chatId = windowUrl.substring(windowUrl.lastIndexOf('/') + 1);

			let startDate = this.props.startDate.format();
			let endDate = this.props.endDate.format();


			await StatsAPI.fetchMostActiveUsers(chatId, startDate, endDate)
				.then((json) => this.setState({ data: json }));
		}
	}

	render() {
		const columns = [
			{
				title: 'User',
				dataIndex: 'user',
				key: 'user',
				render: text => <a>{text}</a>,
			},
			{
				title: 'Messages count',
				dataIndex: 'messages_count',
				key: 'messages_count',
			}
		];

		return (<Table columns={columns} dataSource={this.state.data}/>);
	}
}

export default connect(mapStateToProps)(MostActiveUsersList);
