import React, { Component } from 'react';

import Method from '../Method/Method';
import Ingredients from '../Ingredients/Ingredients';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: true
        };

        this.handleIngredients = this.handleIngredients.bind(this);
        this.handleMethod = this.handleMethod.bind(this);
    }   
    
    handleIngredients() {
       this.setState({ ingredients: true })
    }

    handleMethod() {
        this.setState({ ingredients: false })
     }

    render() {
        let { ingredients } = this.state;

        return (
            <>
                <div className="tab">
                    <button className="tablinks" onClick={ this.handleIngredient }>Ingredients</button>
                    <button className="tablinks" onClick={ this.handleMethod }>Method</button>
                </div>

                { ingredients ? 
                    <div id="Ingredients" className="tabcontent">
                        <Ingredients ingredients={ this.props.ingredients }/>
                    </div> :
                    <div id="Method" className="tabcontent">
                        <Method method={ this.props.method }/>
                    </div> 
                }
            </>
        );
    };
}

export default Tabs;