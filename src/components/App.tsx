import * as React from "react";

interface AppProps extends React.Props<App> {
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        ) 
    }
}