import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/rect/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, 
  {
    title: 'Some_text',
    url: 'https://facebook.github.io/rect/',
    author: 'Den Pugachov',
    num_comments: 5,
    points: 2,
    objectID: 1,
  },
   {
    title: 'Bull_sheet',
    url: 'https://facebook.github.io/rect/',
    author: 'Podrez Jenya',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

//(|| only one is true) You filter the list only when a searchTerm is set. When a searchTerm is set, 
//you match the incoming searchTerm pattern with the title of the item. 
const isSearched = (searchTerm) => (item) =>  
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '', // define the initial state for the searchTerm
    }; 

    this.onSearchChange = this.onSearchChange.bind(this); // bind the method onSearchChange
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list:updatedList });
  }

  onSearchChange(event) { // event has the value of the input field in its target object
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        { this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.authour}, </span>
            <span>comments {item.num_comments}, </span>
            <span>points {item.points};</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss 
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}


export default App;
