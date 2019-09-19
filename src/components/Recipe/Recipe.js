import React, { Component } from 'react';
import axios from '../../axios';

import Tabs from '../Tabs/Tabs';

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {},
            loaded: false
        };
    }   

    // need to come back to this
    componentDidMount() {
        let id = this.props.recipe;
        axios.get(`recipes/${id}`).then(({ data }) => {
            let recipe = data.data;
            this.setState({
                loaded: true,
                // recipe object
                recipe: recipe
            });
        });
    }
    
    render() {
        let { recipe, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <div>
                <h2>{ recipe.name }</h2>
                <p>{ recipe.description }</p>
                <p><small className="text-muted">Serves { recipe.num_servings }</small></p>
                <p><small className="text-muted">Prep time { recipe.prep_time }</small></p>
                <Tabs ingredients={ recipe.ingredients } method={ recipe.method } />
            </div>
            
        );
    };
}

export default Recipe;