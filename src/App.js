import './App.css';
import { useState } from 'react';
import ShowList from './components/BookForm';
import BookForm from './components/ShowList';

function App() {
  const [showList,setShowList] = useState(false);
  return (
    <div className="App">
        {showList && <BookForm setShowList={setShowList}/>}
        {!showList && <ShowList setShowList={setShowList}/>}
    </div>
  );
}

export default App;
