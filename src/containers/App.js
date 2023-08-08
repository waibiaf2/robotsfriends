import {Component} from "react";

import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "./ErrorBoundry";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchfield:''
        }
    }
    
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }
    
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }
    
    render() {
        
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
    
        return !robots.length ?
            <h1 className="text-center">Loading</h1>:
            <div className="container mx-auto text-center">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox  searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
    }
}

export default App;

