import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://source.unsplash.com/random" alt="random"/>

        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl">
            Photo by unsplash
          </div>
          <ul>
            <li>
              <strong> Views: </strong>
              4000
            </li>
            <li>
              <strong> Downloads: </strong>
              200
            </li>
            <li>
              <strong> Likes: </strong>
              400
            </li>
          </ul>
        </div>

        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1 
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    );
  }
}

export default App;
