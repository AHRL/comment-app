import React from 'react';
import './App.css';
import CommentInputContainer from './containers/commentInput'
import CommentListContainer from './containers/commentList'

const App: React.FC = () => {
  return (
    <div className="App">
      <CommentInputContainer />
      <CommentListContainer />
    </div>
  );
}

export default App;
