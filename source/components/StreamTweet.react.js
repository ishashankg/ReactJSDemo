var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

	getInitialState: function(){
		console.log('StreamTweet: 1. Running getInitialState()');

		return{
			numberOfCharactersIsIncreasing: null,
			headerText: null
		};
	},

	componentWillMount: function(){
		console.log('StreamTweet: 2.Running componentWillMount()');

		this.setState({
			numberOfCharactersIsIncreasing:true,
			headerText:'Latest Public Photo from Twitter'
		});

		window.snapterest = {
			numberOfReceivedTweets : 1,
			numberOfDisplayedTweets : 1
		}
	},

	componentDidMount: function(){
		console.log('StreamTweet: 3. Running componentDidMount()');

		var componentDOMRepresentation = ReactDOM.findDOMNode(this);

		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
	},

	componentWillReceiveProps : function(nextProps){
		console.log('StreamTweet: 4. Running componentWillReceiveProps()');

		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.text.length;
		var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
		var headerText;

		this.setState({
			numberOfCharactersIsIncreasing : isNumberOfCharactersIncreasing
		});

		if(isNumberOfCharactersIncreasing){
			headerText = 'Number of characters is increasing';
		}else{
			headerText = 'Latest public photo from Twitter';
		}

		this.setState({
			headerText : headerText
		});

		window.snapterest.numberOfReceivedTweets++;
	},

	shouldComponentUpdate : function(nextProps, nextState){
		console.log('StreamTweet : 5.Running shouldComponentUpdate()');

		return (nextProps.tweet.text.length > 1);
	},

	componentWillUpdate: function(nextProps, nextState){
		console.log('StreamTweet: 6. Running componentWillUpdate()');
	},

	componentDidUpdate : function(prevProps, prevState){
		console.log('StreamTweet : 7. Running componentDidUpdate()');

		window.snapterest.numberOfDisplayedTweets++;
	},


	componentWillUnmount: function(){
		console.log('StreamTweet: 8. Running componentWillUnmount()');

		delete window.snapterest;
	},

	render: function(){
		console.log('StreamTweet: Running render()');

		return(
			<section>
				<Header text={this.state.headerText} />
				<Tweet
				   tweet = {this.props.tweet}
				   onImageClick = {this.props.onAddTweetToCollection} />
			</section>
		);
	}
});

module.exports = StreamTweet;