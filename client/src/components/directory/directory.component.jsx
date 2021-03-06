import React from 'react'
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
// import './directory.styles.scss'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {
            sections.map( ({id, ...otherProps}) => (
                <MenuItem key={id} {...otherProps}/>
            ))
        }
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)