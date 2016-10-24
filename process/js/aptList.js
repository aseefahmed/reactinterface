var React = require('react');

var AptList = React.createClass({
    handleDelete: function(){
        this.props.onDelete(this.props.removedItem )
    },
    render: function(){
        return (
            <li className='pet-item media'>
                <div className='media-left'>
                    <button className='btn btn-danger'><i className=' glyphicon glyphicon-remove' onClick={this.handleDelete}></i></button>
                </div>
                <div className='pet-info media-body'>
                    <div className='pet-head'>
                        <span className='pet-name'>{this.props.myApt.petName}</span>
                        <span className='apt-date pull-right'>{this.props.myApt.aptDate}</span>
                    </div>
                    <div className='owner-name'>
                        <span className='label-item'>
                        Owner: {this.props.myApt.ownerName}
                        </span>
                    </div>
                    <div className='apt-notes'>
                        {this.props.myApt.aptNotes}
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = AptList;