import React from 'react' ;

class Form extends React.Component{
    constructor(props){
        super(props)
      this.state = {
       url : '',
       method : 'GET'
      }  
    }

    handleSubmit =  async (e) =>{
        e.preventDefault();
        let url =e.target.url.value ;
        this.setState({ url })
        // console.log('this.state.url', this.state.url) here will not shown because render not happen 


        let response = await fetch(url
            //  , {
            // method: this.state.method, 
            // mode: 'cors', 
            // cache: 'no-cache', 
            // credentials: 'same-origin', 
            // headers: {
            //   'Content-Type': 'application/json'
            // },  
        
        // }
        )
        
console.log('output', response)
        // let output =  await response.text();
        this.props.updateResult(response)


    }


    render(){
        console.log('this.state.url', this.state.url)

        return(
            <>
            <form onSubmit= { e => this.handleSubmit(e)} >
                <label>
                Enter Url 
                <input name='url'  />
                </label>
                <button type ='submit'> Go </button>
            </form>



            </>
        )
    }

}
export default Form ;