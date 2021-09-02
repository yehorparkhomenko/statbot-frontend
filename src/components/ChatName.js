import React from 'react';
import { connect } from 'react-redux'
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import StatsAPI from '../services/StatsAPI';


class ChatName extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	async componentDidMount() {
		const windowUrl = window.location.href
		var chatId = windowUrl.substring(windowUrl.lastIndexOf('/') + 1);

		await StatsAPI.fetchChatName(chatId)
			.then((name) => this.setState({ data: name}));
	}
	
	render () {
		return (
			<Space direction="vertical" size={12}>
				<h1 style={{color: 'white'}}>{this.state.data}</h1>
			</Space>
		);
	}
}

export default ChatName
