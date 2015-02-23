var React = require('react/addons');
//var Lightbox = require('./lightbox.jsx');

var SUMMARY = 0;
var FULL = 1;

module.exports = React.createClass(
  getInitialState: function() {
    return { view: SUMMARY };
  },

  propTypes: {
    title: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string,
    useDefaultLightboxStyles: React.PropTypes.bool
  },

  click_handler: function() {
    var newView;

    if (this.state.view === SUMMARY) {
      newView = FULL;
    }
    else {
      newView = SUMMARY;
    }

    this.setState({view: newView});
  },

  render: function() {
    // var lightbox =
    //   this.state.view === FULL
    //     ? <Lightbox useDefaultLightboxStyles={useDefaultLightboxStyles}>{this.props.children}</Lightbox>
    //     : null

    var content;
    var classes = React.addons.classSet({
      'blurb-display': true,
      'blurb-summary': this.state.view === SUMMARY,
      'blurb-full': this.state.view === FULL,
    })

    if (this.state.view === SUMMARY) {
      content = this.props.summary;
    }
    else {
      content = this.props.children;
    }

    return (
      <div className="blurb" onClick={this.click_handler}>
        <h1 className="blurb-title">{this.props.title}</h1>
        <div className={classes}>{content}</div>
      </div>
    );
  }
});