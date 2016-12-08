require('whatwg-fetch'); // for browser compatibility
require('babel-polyfill'); // for browser compatibility

const React = require('react');
const ReactDOM = require('react-dom');

const DemoTest = React.createClass({
	getInitialState: function() {
		return {
			selectState: 'initial'
		};
  },
	propTypes: {
		bar: React.PropTypes.string
  },

	getDefaultProps: function() {
    return {
      bar: 'shareming'
    };
  },
	render: function() {
		const sceneRef = this;
		const buttonNameList = ['initial', 'pending', 'applied'];
		let buttonListAlpha = [];
		for (let i = 0; i < buttonNameList.length; ++i) {
			const name = buttonNameList[i];
			const single = (
				<button	
					key={'btn-alpha-' + i}
					onClick={ function(e) {
						sceneRef.setState({
							selectState: name
						});	
					}}
				>
					{name}
				</button>
			);
			buttonListAlpha.push(single);
		}	
		return (
			<div>
				<h1>
					Welcome to {sceneRef.props.bar}	
				</h1>

				<div>
					{sceneRef.state.selectState}
				</div>
				<div>
					{buttonListAlpha}
				</div>
			</div>
		);
	}
});

ReactDOM.render((<DemoTest/>), document.getElementById('react-root'));
