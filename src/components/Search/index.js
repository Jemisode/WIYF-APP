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
        handleIngredient: (id, name) => dispatch(addIngredient(id, name)),
        handleRemoveIngredient: (id) => dispatch(removeIngredient(id)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
