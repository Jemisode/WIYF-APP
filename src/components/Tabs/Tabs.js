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
                <div className="tab d-flex flex-row btn-group card bg-warning mx-3 mt-5" role="group">
                    <button className={`tablinks d-inline btn btn-warning text-dark font-weight-bold px-5 border border-info ${ ingredients ? "active" : null }`} type="button" onClick={ this.handleIngredients }>Ingredients</button>
                    <button className="tablinks d-inline btn btn-warning text-dark font-weight-bold px-5 border border-info" type="button" onClick={ this.handleMethod }>Method</button>
                </div>

                { ingredients ? 
                    <div id="Ingredients" className="tabcontent card bg-warning text-dark d-flex w-100 p-2 mb-4">
                        <Ingredients ingredients={ this.props.ingredients }/>
                    </div> :
                    <div id="Method" className="tabcontent card bg-warning text-dark d-flex w-100 p-2 mb-4">
                        <Method method={ this.props.method }/>
                    </div> 
                }
            </>
        );
    };
}

export default Tabs;