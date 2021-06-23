import React from 'react'
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

export class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            section: sections
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.section.map( ({id, ...otherProps}) => (
                        <MenuItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}