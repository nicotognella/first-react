import React from 'react';
import ContentRowMovies from './ContentRowMovies';



function ContentRowTop ({title}) {

  const widgetData = [
    {
      title: 'Movies in Data Base',
      quantity: 21 ,
      color: 'blue',
      position: 'border-left-primary' ,
      icon: 'fa-film' ,
    },
    {
      title: 'Total awards',
      quantity: 79,
      color: 'green',
      position: 'border-left-success',
      icon: 'fa-award',
    },
    {
      title: 'Actors quantity',
      quantity: 49,
      color: 'yellow',
      position: 'border-left-warning',
      icon: 'fa-user',
    }
  ]
    return (
        <div>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{title}</h1>
          </div>
          {/* Content Row Movies*/}
          <ContentRowMovies data={widgetData}  />
        </div>
      );

}

export default ContentRowTop