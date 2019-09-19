import { connect } from 'react-redux';
 
import RecipeList from './RecipeList';
import { updateRecipe } from '../../data/actions/state'

const mapDispatchToProps = dispatch => { 
    return { 
        updateRecipe: (id) => dispatch(updateRecipe(id)),
    }; 
};

export default connect(null, mapDispatchToProps)(RecipeList);
