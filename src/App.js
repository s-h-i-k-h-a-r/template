import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Post from './Components/Post';
import About from './Components/About';
import axios from "axios";
import PostPreview from './Components/PostPreview';
import AddPost from './Components/AddPost';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

 class App extends Component {
  loginHandler=()=>{
    this.setState({auth:!this.state.auth});
  }
  constructor(props) {
    super(props)
  
    this.state = {
       auth:false,
       posts : null,
    }
  };
    componentDidMount(){
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
        
       this.setState({posts:response.data})
      })
      .catch((error)=>{
        console.log(error);
      });
    }
   deleteHandler =(id)=>{
   
    axios.delete("https://jsonplaceholder.typicode.com/posts/"+ id)
    .then((response)=>{
      console.log(response);
    })
  .catch((error)=>{
    console.log(error);
  });
   }
   
  render() {
  let posts = null;
  if(this.state.posts!=null){
    const tenPost = this.state.posts.splice(0,5);
    posts = tenPost.map((post)=>{
      return<PostPreview key = {post.id} title={post.title} body = {post.body} delete = {()=>this.deleteHandler(post.id)}/>
    });
  }
    
    return (
    <BrowserRouter>
    <NavBar login = {this.loginHandler} name ={this.state.auth===false?"LogIn":"LogOut"}/>
    <Routes>
   <Route path="/" element = {[<Header img = "home-bg.jpg" title = "Antibug Blog"/>,<Home>{posts}</Home>] } />
   <Route path="/about" element = {[<Header img = "about-bg.jpg" title = "About Me"/>,<About/>]}/>
   <Route path="/post"  element = {this.state.auth === false ? (<Navigate to ="/"/> ): ([<Header img = "post-bg.jpg" title = "Man must explore, and this is exploration at its greatest"/>,<Post/>])}/>
   <Route path="/contact" element = {[<Header img = "contact-bg.jpg" title = "Get In Touch"/>,<Contact/>]}/>
   <Route path="/add" element = {[<Header img = "home-bg.jpg" />,<AddPost />]}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  );
    }
}

export default App;



     