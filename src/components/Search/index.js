import { connect } from 'react-redux';
 
import Search from './Search';
import { addIngredient } from "../../data/actions/state";

const mapStateToProps = state => { 
    return { 
        ingredients: state.ingredients,
        chosenIngredients: state.chosenIngredients,
    }; 
};

const mapDispatchToProps = dispatch => { 
    return { 
        handleIngredient: (ingredient) => dispatch(addIngredient(ingredient)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);