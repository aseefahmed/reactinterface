var React = require('react');

var NewAppointmentForToday111 = React.createClass({
    handleToggle: function(){
      this.props.doToggle();
    },
    handleSubmit: function(e){
        e.preventDefault();
        var items = this.props.addItem({
            petName: this.refs.inputPetName.value,
            ownerName: this.refs.inputOwnerName.value,
            aptData: this.refs.inputAptDate.value + ' ' + this.refs.inputAptTime.value,
            aptNote: this.refs.inputAptNotes.value
        });

        this.props.addItem(items);
    },
    render: function(){
        var styleDisplay = {
            display: this.props.showDiv? 'block': 'none'
        };

        return (
            <div  className="panel panel-primary">
            <div  className="panel-heading apt-addheading" onClick={this.handleToggle}>
            <span  className="glyphicon glyphicon-plus"></span> Add Appointment</div>
        <div  className="panel-body" style={styleDisplay}>
            <form  className="add-appointment form-horizontal"  onSubmit={this.handleSubmit}>
            <div  className="form-group">
            <label  className="col-sm-2 control-label" for="petName">Pet Name</label>
        <div  className="col-sm-10">
            <input type="text"  className="form-control" id="petName" ref="inputPetName" placeholder="Pet's Name" />
            </div>
            </div>
            <div  className="form-group">
            <label  className="col-sm-2 control-label" for="petOwner">Pet Owner</label>
        <div  className="col-sm-10">
            <input type="text"  className="form-control" id="petOwner" ref="inputOwnerName" placeholder="Owner's Name" />
            </div>
            </div>
            <div  className="form-group">
            <label  className="col-sm-2 control-label" for="aptDate">Date</label>
            <div  className="col-sm-4">
            <input type="date"  className="form-control" id="aptDate" ref="inputAptDate" />
            </div>
            <label  className="col-sm-2 control-label" for="aptTime">Time</label>
            <div  className="col-sm-4">
            <input type="time"  className="form-control" id="aptTime" ref="inputAptTime" />
            </div>

            </div>
            <div  className="form-group">
            <label  className="col-sm-2 control-label" for="aptNotes">Apt. Notes</label>
            <div  className="col-sm-10">
            <textarea  className="form-control" rows="4" cols="50" id="aptNotes" ref="inputAptNotes" placeholder="Appointment Notes"></textarea>
            </div>
            </div>
            <div  className="form-group">
            <div  className="col-sm-offset-2 col-sm-10">
            <button type="submit"  className="btn btn-primary pull-right">Add Appointment</button>
        </div>
        </div>
        </form>
        </div>
        </div>
        )
    }
});

module.exports = NewAppointmentForToday111