import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipesDisplayed: 5,
            expanded: false,
            recipes: [],
            loaded: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
    }   

    handleClick() {
        this.state.recipesDisplayed === 5 ? (
            this.setState({ recipesDisplayed: this.props.recipes.length, expanded: true })
        ) : (
            this.setState({ recipesDisplayed: 5, expanded: false })
        )
    }

    handleChoice(e, id) {
        this.props.updateRecipe(id);
    }

    componentDidMount() {
        // get request will change once API search function is working
        axios.get("/recipes").then(({ data }) => {
            let recipes = data.data;
            this.setState({
                loaded: true,
                // array of recipes
                recipes: recipes
            });
        });
    }
    
    render() {
        let { recipesDisplayed, recipes, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <div className="container">
                { recipes.slice(0, recipesDisplayed).map((recipe, index) => (
                    <Link to="/my-recipe">
                        <div onClick={ (e) => this.handleChoice(e, recipe.id) } key={index} className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={ recipe.image_url } className="card-img" alt={ recipe.image_alt } />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{ recipe.name }</h3>
                                    <p className="card-text">{ recipe.description }</p>
                                    <p><small className="text-muted">Serves { recipe.num_servings }</small></p>
                                    <p><small className="text-muted">Prep time { recipe.prep_time }</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )) }

                <button className="btn btn-primary" onClick={ this.handleClick }>
                    { this.state.expanded ?  <span>Show less</span> : <span>Show more</span> }
                </button>
            </div> 
        );
    };
}

export default RecipeList;