var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');

var inputStyle = {
	marginRight : '5px'
};

var CollectionRenameForm = React.createClass({

	getInitialState : function(){
		return {
			inputValue : this.props.name
		};
	},

	setInputValue : function(){
		this.setState({
			inputValue : inputValue
		});
	},

	handleInputValueChange : function(event){
		var inputValue = event.target.value;
		this.setInputValue(inputValue);
	},

	handleFormSubmit : function(event){
		event.preventDefault();

		var CollectionName = this.state.inputValue;
		this.props.onChangeCollectionName(CollectionName);
	},

	handleFormCancel : function(event){
		event.preventDefault();

		var CollectionName = this.props.name;
		this.setInputValue(CollectionName);
		this.props.onCancelCollectionNameChange();
	},

	componentDidMount: function(){
		this.refs.collectionName.focus();
	},

	render: function(){
		return (
			<form className = "form-inline" onSubmit = {this.handleSubmit} >

				<Header text = "Collection Name:" />
				<div ClassName = "form-group">
					<input 
						className = "form-control"
						style = {inputStyle}
						onChange = {this.handleInputValueChange}
						value = {this.state.inputValue}
						ref = "collectionName" />
				</div>

				<Button label = "Change" handleClick = {this.handleFormSubmit} />
				<Button label = "Cancel" handleClick = {this.handleFormCancel} />
			</form>
		);
	}
});

module.exports = CollectionRenameForm;