import React from 'react';

import { 
    BrowserRouter as Router, 
    Route, 
} from 'react-router-dom';

import '../index.css'

import Header from './Header/Header';
import Search from './Search';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

const App = () => (
    <Router>
        <>
            <Header />
            <Route exact path="/" component={ Search} />
            <Route exact path="/recipes" component={ RecipeList } />
            <Route exact path="/my-recipe" component={ Recipe } />
            
        </>
    </Router>
);
export default App;