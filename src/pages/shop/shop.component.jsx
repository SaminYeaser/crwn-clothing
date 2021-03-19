import React from 'react'

import SHOP_DATA from './shop_data'
import PreviewCollection from '../../components/previewCollection/preview-collection.component'

class ShopPage extends React.Component{
    constructor(props){
    super(props)

    this.state = {
        collections: SHOP_DATA
    }
    }
    render(){
      const {collections} = this.state
      return(
        <div className='shop-page'>
            {
              collections.map(({id, ...othersCollectionPorps}) => (
                <PreviewCollection key={id}{...othersCollectionPorps}/>
              ))
            }
        </div>
        )
      }
}
export default ShopPage