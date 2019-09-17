import { connect } from 'react-redux';
 
import RecipeList from './RecipeList';

const mapStateToProps = state => { 
    return { 
        recipes: state.recipes,
    }; 
};

export default connect(mapStateToProps)(RecipeList);
