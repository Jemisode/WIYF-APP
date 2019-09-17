import React, { Component } from 'react';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipesDisplayed: 5,
            expanded: false
        };

        this.handleClick = this.handleClick.bind(this);
    }   

    handleClick() {
        this.state.recipesDisplayed === 5 ? (
            this.setState({ recipesDisplayed: this.props.recipes.length, expanded: true })
          ) : (
            this.setState({ recipesDisplayed: 5, expanded: false })
          )
    }
    
    render() {
        let { recipesDisplayed } = this.state;
        let { recipes } = this.props;

        return (
            <div className="container">
                { recipes.slice(0, recipesDisplayed).map((recipe, index) => (
                    <div key={index} className="card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={ recipe.imageSrc } className="card-img" alt={ recipe.imageAlt } />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{ recipe.name }</h3>
                                <p className="card-text">{ recipe.description }</p>
                                <p><small className="text-muted">Serves { recipe.serves }</small></p>
                                <p><small className="text-muted">Prep time { recipe.prepTime }</small></p>
                            </div>
                            </div>
                        </div>
                    </div> 
                )) }

                <button className="btn btn-primary" onClick={ this.handleClick }>
                    { this.state.expanded ?  <span>Show less</span> : <span>Show more</span> }
                </button>
            </div> 
        );
    };
}

export default RecipeList;