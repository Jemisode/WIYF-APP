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
            this.setState({ recipesDisplayed: this.state.recipes.length, expanded: true })
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
            <div className="d-flex container flex-column justify-content-center">
                { recipes.slice(0, recipesDisplayed).map((recipe, index) => (
                    <Link key={index} to="/my-recipe">
                        <div onClick={ (e) => this.handleChoice(e, recipe.id) } className="card bg-info text-white d-flex align-items-center my-4">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src={ recipe.image_url } className="card-img" alt={ recipe.image_alt } />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">{ recipe.name }</h3>
                                        <p className="card-text">{ recipe.description }</p>
                                        <div className="d-flex flex-row justify-content-center card bg-warning">
                                            <p className="d-inline text-secondary text-center font-weight-bold m-2 mr-5">Serves { recipe.num_servings }</p>
                                            <p className="d-inline text-secondary text-center font-weight-bold m-2 ml-5">Prep time { recipe.prep_time }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )) }

                <button className="btn btn-warning text-secondary font-weight-bold border border-info m-3 mb-4" onClick={ this.handleClick }>
                    { this.state.expanded ?  <span>Show less</span> : <span>Show more</span> }
                </button>
            </div> 
        );
    };
}

export default RecipeList;