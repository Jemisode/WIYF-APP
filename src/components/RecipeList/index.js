import { connect } from 'react-redux';
 
import RecipeList from './RecipeList';
import { updateRecipe } from '../../data/actions/state'

const mapStateToProps = ({ chosenIngredients }) => { 
    return { 
        ids: chosenIngredients.map(ingredient => ingredient.id)
    }; 
};

const mapDispatchToProps = dispatch => { 
    return { 
        updateRecipe: (id) => dispatch(updateRecipe(id)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
