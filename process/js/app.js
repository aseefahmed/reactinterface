var React = require('react');
var ReactDOM = require('react-dom');
var NewAptList = require('./aptList');
var _ = require('lodash');
var MyNewAppointment123 = require('./addMyAppointments');

var MainInterface = React.createClass({
	getInitialState: function(){
		return {
			formVisibility: false,
			data: []
		}
	},
	deleteThisItemNow: function(item){
		var allLists = this.state.data;
		var newList = _.without(allLists, item)
		this.setState({
			data: newList
		});

	},
	componentDidMount: function(){
		this.serverRequest = $.get('./js/data.json', function(result){
			this.setState({
				data: result
			});
		}.bind(this));
	},
	componentWillUnnmount: function(){
		this.serverRequest.abort();
	},
	actToggle: function(){
		var apt = !this.state.formVisibility;
		this.setState({
			formVisibility: apt
		});
	},
	render: function(){
		var appointments = this.state.data;
		var listAppointments = appointments.map(function(item, index){
					return (
						<NewAptList key={index} myApt={item}
								removedItem={item}
									onDelete={this.deleteThisItemNow}/>
					)
				}.bind(this));

		return (

				<div className='interface'>
					<MyNewAppointment123 showDiv={this.state.formVisibility} doToggle={this.actToggle}/>
					<ul className='item-list media-list'>
						{listAppointments}
					</ul>
				</div>
			)
	}
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
