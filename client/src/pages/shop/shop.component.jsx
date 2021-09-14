import React from 'react';
import { Route } from 'react-router-dom';


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useEffect } from 'react';

const ShopPage = ({match, toggleCartHidden, hidden}) => {
    useEffect(() => {
        if (!hidden) toggleCartHidden()
    }, [toggleCartHidden])
    return (
        <div className="shop-page" >
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)