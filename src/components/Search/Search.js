import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }   
    
    handleChange(e) {
        this.setState({
            ingredient: e.currentTarget.value,
        });
    } 

    handleClick() {
        let ingredient = this.state.ingredient;
        let { ingredients, chosenIngredients, handleIngredient } = this.props;

        if (chosenIngredients.length <= 2 && ingredients.includes(ingredient)) {
            handleIngredient(ingredient);
            this.setState({ ingredient: "" });
        } // include else with error message - needs to be ingredient on list & no more than 3
    }

    render() {
        let { ingredient } = this.state;
        let { ingredients, handleClick, chosenIngredients } = this.props;

        return (
            <form className="col-sm">
                <div className="form-group">
                    <label htmlFor="ingredient-choice" >Pick up to 3 Ingredients</label>
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