import React from 'react';

class Results extends React.Component{
    constructor(props){
        super(props)
       }

       

    render(){
        console.log('this.props.passedData ', this.props.passedData)
        return(
            <>

<div>{this.props.passedData && this.props.passedData.status  } </div>
            </>
        )
    }
}
export default Results ;