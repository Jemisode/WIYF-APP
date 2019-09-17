import React from 'react';

import { 
    BrowserRouter as Router, 
    Route, 
} from 'react-router-dom';

import Header from './Header';
import Search from './Search';
import RecipeList from './RecipeList';

const App = () => (
    <Router>
        <>
            <Header />
            <Route exact path="/" component={ Search} />
            <Route exact path="/recipes" component={ RecipeList } />
            
        </>
    </Router>
);
export default App;