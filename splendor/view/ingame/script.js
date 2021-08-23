class PlayerSummaryList extends React.Component {
    render() {
        let retval = null;
        for (let player_name of this.props.value) {
            retval = P
        }
        return (

        )
    }
}

class PlayerSummary extends React.Component {
    render() {
        return (
            React.createElement("li", null, 'PlayerSummary')
        );
    }
}

ReactDOM.render(
    React.createElement(
        PlayerSummaryList,
        {
            value: [
                'Hepheir',
                'koreair',
                'isuke',
                'whggf',
            ]
        }),
    document.getElementById('sidebar-left')
);