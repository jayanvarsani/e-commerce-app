// import './collection-preview.styles.scss'
import '../collection-item/collection-item.component'
import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, PreviewTitleContainer, PreviewContainer } from './collection-preview.styles';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <PreviewTitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </PreviewTitleContainer>
        <PreviewContainer>
            {
                items
                    .filter( (item, idx) => idx < 4)
                    .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview)