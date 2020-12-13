function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function start() {
  class Reason extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "title", this.props.title);

      _defineProperty(this, "titleStyle", {
        color: "#7f65de"
      });

      console.log("Reason component created");
    }

    render() {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", {
        style: this.titleStyle
      }, this.title), /*#__PURE__*/React.createElement("a", {
        href: this.props.href
      }, this.props.description));
    }

  }

  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Why you should watch Star Trek"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Reason, {
    title: "For the Science",
    href: "https://www.imdb.com/title/tt0708856/?ref_=fn_al_tt_1",
    description: "Science advances when people never stop asking questions. Voyager inspires an alien world to explore."
  }), /*#__PURE__*/React.createElement(Reason, {
    title: "For the existential questions of life",
    href: "https://www.imdb.com/title/tt0708807/",
    description: "How do you define a sentient being? Is Commander Data Starfleet property because he can be switched off?"
  }))), document.getElementById("mainContainer"));
}
