function start() {
    class Reason extends React.Component {
        constructor(props) {
                            super(props);
                            console.log("Reason component created");
                           }
        title = this.props.title;
        titleStyle = { color : "#7f65de" }
    
        render() {
                    return (
                             <li>
                                <h2 style={this.titleStyle}>{this.title}</h2>
                                <a href={this.props.href}>
                                    {this.props.description}
                                </a>
                            </li>
                            );
                    }
    }

    ReactDOM.render(
                    <div>
                        <h1>Why you should watch Star Trek</h1>
                        <ul>
                            <Reason title={"For the Science"}
                                        href={"https://www.imdb.com/title/tt0708856/?ref_=fn_al_tt_1"}
                                        description={"Science advances when people never stop asking questions. Voyager inspires an alien world to explore."}
                            />
                            <Reason title={"For the existential questions of life"}
                                      href={"https://www.imdb.com/title/tt0708807/"}
                                    description={"How do you define a sentient being? Is Commander Data Starfleet property because he can be switched off?"}
                            />

                        </ul>
                    </div>,
                    document.getElementById("mainContainer")
                    );

   const towatch = React.createElement("h2", { style : { color : "#7f65de" } },
                                        "We recommend you start with these");
   ReactDOM.render(towatch,
    document.getElementById("watch"));                  


}