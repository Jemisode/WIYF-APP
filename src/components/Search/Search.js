import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient: "",
            ingredientID: 0,
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
            ingredientID: this.state.ingredients.find(ingredient => ingredient.name === e.currentTarget.value).id,
            error: false
        });
    } 

    handleClick() {
        let { chosenIngredients, handleIngredient } = this.props;
        let { ingredients } = this.state;

        let name = this.state.ingredient;
        let id = this.state.ingredientID;

        if (chosenIngredients.length <= 2 && ingredients.map(ingredient => ingredient.name).includes(name) && !chosenIngredients.map(ingredient => ingredient.name).includes(name)) {
            handleIngredient(id, name);
            this.setState({ ingredient: "", ingredientID: 0 });
        } else {
            this.setState({ error: true });
        }
    }

    handleDelete(e, id) {
        e.preventDefault();
        this.props.handleRemoveIngredient(id);
    }

    componentDidMount() {
        axios.get("/ingredients").then(({ data }) => {
            this.setState({
                loaded: true,
                ingredients: data
            });
        });
    }

    render() {
        let { ingredient, error, ingredients, loaded } = this.state;
        let { chosenIngredients } = this.props;

        return !loaded ? <p>Loading...</p> : (
            <div className="d-flex flex-column justify-content-center text-center" style={{ height: "70vh" }}>
                <div className="card bg-info text-white d-flex align-items-center py-5">
                    <form className="">
                        <div className="form-group" style={{ maxWidth: 250 }}>
                            <label htmlFor="ingredient-choice"><h4>Pick Your Ingredients</h4></label>

                            <input
                                type="text"
                                className="form-control my-2"
                                onChange={ (e) => this.handleChange(e) }
                                value={ ingredient }
                                list="ingredients"
                                id="ingredient-choice"
                            />

                            <datalist id="ingredients">
                                { ingredients.map((ingredient) => {
                                    return (<option key={ ingredient.id } value={ ingredient.name } />);
                                }) }
                            </datalist>

                            <button type="button" className="btn btn-warning btn-block my-3 text-secondary font-weight-bold" onClick={ this.handleClick }>Add</button>

                            { error ? <p className="text-warning">Please pick up to 3 different ingredients, from our list</p> : null }
                        </div>

                        <div className="form-group">
                            <h4>Ingredients</h4>
                            <ul className="col">
                                { chosenIngredients.map((ingredient, index) => (
                                    <div key={ index } className="row">
                                        <li><h5>{ ingredient.name }</h5></li>
                                        <button onClick={ (e) => this.handleDelete(e, ingredient.id) } className="btn btn-danger btn-sm ml-3 font-weight-bold">X</button>
                                    </div>
                                )) }
                            </ul>
                
                            <Link to='/recipes'>
                                <button type="submit" className="btn btn-warning btn-block text-secondary font-weight-bold" >Find Recipes</button>
                            </Link>
                        </div> 
                    </form>
                </div>
            </div>
        );
    };
}

export default Search;