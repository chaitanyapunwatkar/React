class Name extends React.Component {
    render() {
        return (
            <li> {this.props.name.toUpperCase()}</li>
        );
    }
}

class NameList extends React.Component{

    render() {
        var listItems = Object.keys(this.props.names).map(
            (key, index) => <Name key={key} name={names[key]}/>
        );

        return (
            <ul className = "names">{listItems}</ul>
        );
    }
} 


// correct way
const names = {
    'id1': 'Chaitanya',
    'id2': 'Yash',
    'id3': 'Harsh',
    'id4': 'Kastur'
}

ReactDOM.render(<NameList names={names}/>,
    document.getElementById('react-lists'));