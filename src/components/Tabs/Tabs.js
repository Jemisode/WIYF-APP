import React, { Component } from 'react';

import Method from '../Method';
import Ingredients from '../Ingredients';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredient: true
        };

        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleMethod = this.handleMethod.bind(this);
    }   
    
    handleIngredient() {
       this.setState({ ingredient: true })
    }

    handleMethod() {
        this.setState({ ingredient: false })
     }

    render() {
        let { ingredient } = this.state;

        return (
            <>
                <div className="tab">
                    <button className="tablinks" onClick={ this.handleIngredient }>Ingredients</button>
                    <button className="tablinks" onClick={ this.handleMethod }>Method</button>
                </div>

                { ingredient ? 
                    <div id="Ingredient" className="tabcontent">
                        <Ingredients />
                    </div> :
                    <div id="Method" className="tabcontent">
                        <Method />
                    </div> 
                }
            </>
        );
    };
}

export default Tabs;