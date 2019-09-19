import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient: "",
            error: false,
            ingredients: [],
            loaded: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }   
    
    handleChange(e) {
        this.setState({
            ingredient: e.currentTarget.value,
            error: false
        });
    } 

    handleClick() {
        let { chosenIngredients, handleIngredient } = this.props;
        let { ingredients } = this.state;

        let ingredient = this.state.ingredient;

        if (chosenIngredients.length <= 2 && ingredients.includes(ingredient) && !chosenIngredients.includes(ingredient)) {
            handleIngredient(ingredient);
            this.setState({ ingredient: "" });
        } else {
            this.setState({ error: true });
        }
    }

    handleDelete(e, ingredient) {
        e.preventDefault();
        this.props.handleRemoveIngredient(ingredient);
    }

    componentDidMount() {
        axios.get("/ingredients").then(({ data }) => {
            let ingredients = [];
            data.map(ingredient => {
                // response includes ingredient objects, with id and name keys
                ingredients = [...ingredients, ingredient.name]
            });
            this.setState({
                loaded: true,
                // sorting ingredients into alphabetical order
                ingredients: ingredients.sort()
            });
        });
    }

    render() {
        let { ingredient, error, ingredients, loaded } = this.state;
        let { chosenIngredients } = this.props;

        return !loaded ? <p>Loading...</p> : (
            <div className="d-flex flex-column justify-content-center text-center" style={{ height: "70vh" }}>
                <div className="card bg-info text-white d-flex align-items-center">
                    <form className="">
                        <div className="form-group" style={{ maxWidth: 200 }}>
                            <label htmlFor="ingredient-choice">Pick Your Ingredients</label>

                            <input
                                type="text"
                                className="form-control"
                                onChange={ (e) => this.handleChange(e) }
                                value={ ingredient }
                                list="ingredients"
                                id="ingredient-choice"
                            />

                            <datalist id="ingredients">
                                { ingredients.map((ingredient, index) => (
                                    <option key={ index } value={ ingredient } />
                                )) }
                            </datalist>

                            <button type="button" className="btn btn-primary btn-block" onClick={ this.handleClick }>Add</button>

                            { error ? <p className="text-warning">Please pick up to 3 different ingredients, from our list</p> : null }
                        </div>

                        <div className="form-group">
                            <h3>Ingredients</h3>
                            <ul className="col">
                                { chosenIngredients.map((ingredient, index) => (
                                    <div key={ index } className="row">
                                        <li><h5>{ ingredient }</h5></li>
                                        <button onClick={ (e) => this.handleDelete(e, ingredient) } className="btn btn-danger btn-sm">X</button>
                                    </div>
                                )) }
                            </ul>
                
                            <Link to='/recipes'>
                                <button type="submit" className="btn btn-primary btn-block" >Find Recipes</button>
                            </Link>
                        </div> 
                    </form>
                </div>
            </div>
        );
    };
}

export default Search;