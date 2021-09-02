import React from 'react';
import './../index.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Card } from 'antd';
import ChatName from './ChatName.js'
import MessagesUsersChart from './MessagesUsersChart.js';
import DateIntervalSelector from "./DateIntervalSelector";
import PopularWordsList from "./PopularWordsList";
import MostActiveUsersList from "./MostActiveUsersList";
import { Header } from 'antd/lib/layout/layout';

class App extends React.Component {
	render() {
	  return (
		<div className="App">
			<Layout>
				<Header className="haeder">
					<Menu theme="dark" mode="horizontal" style={{display: 'block'}}>
							<DateIntervalSelector changeDate={this.props.changeDate}/>
							
							<div className="chat-name">
								<ChatName />
							</div>
					</Menu>
				</Header>
				<div className="site-card-border-less-wrapper">
					<Card title="Пользователи и сообщения" bordered={false}>
						<MessagesUsersChart {...this.props}/>
					</Card>
					<Card title="Топ по сообщениям" style={{marginTop : 30}}>
						<MostActiveUsersList {...this.props}/>
					</Card>
					<Card title="Популярные слова" style={{marginTop: 30}}>
						<PopularWordsList {...this.props}/>
					</Card>
				</div>
			</Layout>
		</div>
	  );
	}
}

export default App;
