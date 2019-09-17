import { connect } from 'react-redux';
 
import RecipeListCard from './RecipeListCard';

const mapStateToProps = state => { 
    return { 
        recipes: state.recipes,
    }; 
};

export default connect(mapStateToProps)(RecipeListCard);
