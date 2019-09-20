import { connect } from 'react-redux';
 
import RecipeList from './RecipeList';
import { updateRecipe } from '../../data/actions/state'

const mapStateToProps = ({ chosenIngredientsIDs }) => { 
    return { 
        ids: chosenIngredientsIDs
    }; 
};

const mapDispatchToProps = dispatch => { 
    return { 
        updateRecipe: (id) => dispatch(updateRecipe(id)),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
