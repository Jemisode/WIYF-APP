import { connect } from 'react-redux';
 
import Ingredients from './Ingredients';

const mapStateToProps = state => { 
    return { 
        recipe: state.recipe
    }; 
};

export default connect(mapStateToProps)(Ingredients);
