import React from 'react';
import { selectCollection } from '../../redux/shop/shop.selectors';
// import './collection.styles.scss'
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPageContainer, CollectionTitleContainer, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)