var React = require('react');
var ReactDOM = require('react-dom');

/*var h1 = React.createElement('h1', {className : 'header', key:'header'},'This is React');
var p = React.createElement('p',{className : 'content', key:'content'},"And that's how it's works");
var reactFragment = [h1,p];
var section = React.createElement('section',{className:'container'}, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));
*/

/*var createListItemElement = React.createFactory('li');

var listItemElement1 = createListItemElement({className : 'item-1', key:'item-1'},'Item-1');
var listItemElement2 = createListItemElement({className : 'item-2', key:'item-2'},'Item-2');
var listItemElement3 = createListItemElement({className : 'item-3', key:'item-3'},'Item-3');

var reactFragment = [listItemElement1,listItemElement2, listItemElement3];

var listOfItems = React.createElement('ul',{className:'list-of-items'}, reactFragment);*/

var listOfItems = <ul className = "list-of-items">
					<li className="item-1">Item 1</li>
					<li className="item-2">Item 2</li>
					<li className="item-3">Item 3</li>
				  </ul>;

ReactDOM.render(listOfItems, document.getElementById('react-application'));