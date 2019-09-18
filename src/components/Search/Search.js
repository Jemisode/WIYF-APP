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
        this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete(e, ingredient) {
        e.preventDefault();
        this.props.handleRemoveIngredient(ingredient);
    }

    render() {
        let { ingredient, error } = this.state;
        let { ingredients, chosenIngredients } = this.props;

        return (
            <div className="card bg-info text-white d-flex align-items-center" >
                <form className="">
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

                        <button type="button" className="btn btn-primary btn-block" onClick={ this.handleClick }>Add</button>
                        { error ? <p className="text-danger">Please pick up to 3 different ingredients, from our list</p> : null }
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
        
                    <button type="submit" className="btn btn-primary btn-block" >Find Recipes</button>
                </div>
                    
            </form>
        </div>
        );
    };
}

export default Search;