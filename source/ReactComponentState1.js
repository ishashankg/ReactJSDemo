var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({

	getInitialState: function(){
		return{
			isHidden : false
		};
	},

	render:function(){
		if(this.state.isHidden){
			return null;
		}
		return React.createElement('h1',{className:'header'}, 'React Stateful Component');
	}
});

var reactComponentElement = React.createElement(ReactClass);
ReactDOM.render(reactComponentElement, document.getElementById('react-application'));