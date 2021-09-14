import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
// import './collection.styles.scss'
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPageContainer, CollectionTitleContainer, ItemsContainer } from './collection.styles';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { useEffect } from 'react';

const CollectionPage = ({ toggleCartHidden, hidden, title, items }) => {
    useEffect(() => {
        if (!hidden) toggleCartHidden()
    }, [toggleCartHidden])
    return (
        <CollectionPageContainer>
            <CollectionTitleContainer>{title.toUpperCase()}</CollectionTitleContainer>
            <ItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)