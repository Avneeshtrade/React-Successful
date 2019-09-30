

import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';

class DisplayData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
this.Loaddata=this.Loaddata.bind(this); 
Loaddata=(response)=>{
  this.setState({
    posts: response.data
  });
}
    axios.get(`/sampledata.json`)
    .then(function (response) {
  console.log(response)
  Loaddata(response)
  console.log(this.posts)
})
.catch(function (error) {
  console.log(error);
});

  }

   

  render() 
    {
      
        // for(var i = 0; i < postData.length ; i++)
        //   {
        //     return (
        //       <ul>
        //         <li>{postData[i]}</li>
        //       </ul>
      
        //     );
        //   }
        return (<h1>Dont worry i will again</h1>)
    }
}
export default DisplayData;
