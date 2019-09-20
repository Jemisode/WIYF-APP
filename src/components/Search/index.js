import { connect } from 'react-redux';
 
import Search from './Search';
import { addIngredient, removeIngredient, addIngredientID } from "../../data/actions/state";

const mapStateToProps = state => { 
    return { 
        ingredients: state.ingredients,
        chosenIngredients: state.chosenIngredients,
    }; 
};

const mapDispatchToProps = dispatch => { 
    return { 
        handleIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
        handleRemoveIngredient: (ingredient) => dispatch(removeIngredient(ingredient)),
        handleIngredientID: (ingredientID) => dispatch(addIngredientID(ingredientID)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
