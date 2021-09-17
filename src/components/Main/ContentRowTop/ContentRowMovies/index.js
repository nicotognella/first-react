import React from 'react';
import Widget from './Widget';

function ContentRowMovies ({data}) {
    return (        
        <div className="row">
        
        {data.map ((widgetData, index) => <Widget title={widgetData.title} quantity={widgetData.quantity} icon={widgetData.icon} position={widgetData.position} key={index} />)}

        </div>
      );

}

export default ContentRowMovies