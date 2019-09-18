import { connect } from 'react-redux';
 
import Method from './Method';

const mapStateToProps = state => { 
    return { 
        recipe: state.recipe
    }; 
};

export default connect(mapStateToProps)(Method);
