import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient: "",
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }   
    
    handleChange(e) {
        this.setState({
            ingredient: e.currentTarget.value,
            error: false
        });
    } 

    handleClick() {
        let ingredient = this.state.ingredient;
        let { ingredients, chosenIngredients, handleIngredient } = this.props;

        if (chosenIngredients.length <= 2 && ingredients.includes(ingredient) && !chosenIngredients.includes(ingredient)) {
            handleIngredient(ingredient);
            this.setState({ ingredient: "" });
        } else {
            this.setState({ error: true });
        }
    }

    render() {
        let { ingredient, error } = this.state;
        let { ingredients, chosenIngredients } = this.props;

        return (
            <form className="col-sm">
                <div className="form-group">
                    <label htmlFor="ingredient-choice" >Pick Your Ingredients</label>
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

                    <button type="button" className="btn btn-primary" onClick={ this.handleClick }>Add</button>
                    { error ? <p className="text-danger">Please pick up to 3 different ingredients, from our list</p> : null }
                </div>

                <div className="form-group">
                    <h3>Ingredients</h3>
                    <ul>
                        { chosenIngredients.map((ingredient, index) => (
                            <li key={ index }>{ ingredient }</li>
                        )) }
                    </ul>

                    <button type="submit" className="btn btn-primary" >Find Recipes</button>
                </div>
                    
            </form>
        );
    };
}

export default Search;