var React = require('react');
var ReactDOM = require('react-dom');


var MainInterface = React.createClass({
	getInitialState: function(){
		return {
			title: 'OK Appointment',
			show: true
		}
	},
	render: function(){
		var showTitle;
		if(this.state.show)
			showTitle = 'NEW';

		var DisplayListt = {
			display: this.state.show? 'block': 'none',
			color: 'red'
		}
		return (
				<div className='interface'>
					<h1>{showTitle} {this.state.title}</h1>
					<ul style={DisplayListt}>
						<li>aseef</li>
						<li>saeef</li>
						<li>rifa</li>
					</ul>
				</div>
			)
	}
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
