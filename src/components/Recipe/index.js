import { connect } from 'react-redux';
 
import Recipe from './Recipe';

const mapStateToProps = state => { 
    return { 
        recipe: state.recipe,
    }; 
};

export default connect(mapStateToProps)(Recipe);
