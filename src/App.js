import React, { Component } from 'react';

class LifeCycle extends Component {

class App extends Component {
  constuctor () {
      super ();
      this.state = {
        items:[],
        isLoaded: false
    };
  };

componentDidmount (){
fetch ('https://jsonplaceholder.typicode.com/users')
.then ( res => {
  return res.json();
  })
.then ( data => {
  console.log(data);
  this.setState({
    items: data,
    isLoaded: true,
    })
  })
};

};


render(){
  var { isLoaded, items } = this.state;
return {
<div>
<ul>
{items.map(el => {
return(
<li key={el.id}>
Name: {el.name} | UserName: {el.username} | { ' ' } <a href={'https://${el.website}'}>Website</a>
</li>
)

})}
</ul>
</div>
    };
  };
};
export default LifeCycle;
