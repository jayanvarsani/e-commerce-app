import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions.';
import { connect } from 'react-redux';
// import { Suspense } from 'react';
// import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

// const CollectionPageContainer = lazy(() => import('../collection/collection.container'))
// const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'))
import { CollectionsOverviewContainer } from '../../components/collections-overview/collections-overview.styles';
import { CollectionPageContainer } from '../collection/collection.styles';

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => fetchCollectionsStart(), [fetchCollectionsStart])

    return (
        <div className="shop-page" >
            <ErrorBoundary>
                {/* <Suspense fallback={<Spinner />}> */}
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                    <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                {/* </Suspense> */}
            </ErrorBoundary>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)