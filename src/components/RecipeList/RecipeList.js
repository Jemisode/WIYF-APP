import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipesDisplayed: 2,
            expanded: false,
            recipes: [],
            loaded: false,
            error: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
    }   

    handleClick() {
        this.state.recipesDisplayed === 2 ? (
            this.setState({ recipesDisplayed: this.state.recipes.length, expanded: true })
        ) : (
            this.setState({ recipesDisplayed: 2, expanded: false })
        )
    }

    handleChoice(e, id) {
        this.props.updateRecipe(id);
    }

    componentDidMount() {
        let { ids } = this.props;
        let url = "";
        console.log(ids);

        ids.map(id => {
            url += `/${id}`;
            return url;
        });   
        
        this.setState({ error: false });

        axios.get(`/recipes/match${url}`).then(({ data }) => {
            if (data !== "No recipe found! Try different ingredients!") {
                this.setState({
                    loaded: true,
                    // data is either object or array - checking for this and coverting objects to array
                    recipes: Array.isArray(data) ? data : Object.values(data),
                });
            // if no match, returning error
            } else {
                this.setState({
                    loaded: true,
                    error: true,
                });
            }
        });
    }
    
    render() {
        let { recipesDisplayed, recipes, loaded, error } = this.state;

        return !loaded ? <p>Loading...</p> : error ? 
            <div className="card bg-info"><p className="text-white px-4 pt-2">No recipes found! Try different ingredients!</p></div> : (
            <div className="d-flex container flex-column justify-content-center">
                { recipes.slice(0, recipesDisplayed).map((recipe, index) => (
                    <Link key={index} to="/my-recipe">
                        <div onClick={ (e) => this.handleChoice(e, recipe.id) } style={{ textDecoration: "none" }} className="card bg-info text-white d-flex align-items-center my-4">
                            <div className="row no-gutters">
                                {/* not including images currently - will come back to this */}
                                {/* <div>
                                <img src={ recipe.image_url } className="card-img" alt={ recipe.image_alt } />
                                </div> */}
                                <div>
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