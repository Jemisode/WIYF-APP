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
            <div className="card bg-info text-white d-flex align-items-center p-4 mt-5">
                <h2>{ recipe.name }</h2>
                <p className="mt-3">{ recipe.description }</p>
                <div className="d-flex flex-row justify-content-center card bg-warning m-0 mt-4">
                    <p className="d-inline text-secondary text-center font-weight-bold m-2 mr-5">Serves { recipe.num_servings }</p>
                    <p className="d-inline text-secondary text-center font-weight-bold m-2 ml-5">Prep time { recipe.prep_time }</p>
                </div>
                <Tabs ingredients={ recipe.ingredients } method={ recipe.method } />
            </div>
            
        );
    };
}

export default Recipe;