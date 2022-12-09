import React from 'react'
import axios from 'axios';
export default function AddPost() {
  const  submitHandler=(event)=>{
        event.preventDefault();
        const title = event.target.title.value;
        const name = event.target.author.value;
        const post = event.target.post.value;
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title,
            name,
            post
        })
.then((response)=>{
    console.log(response);
    event.target.reset();
})
.catch((error)=>{
    console.log(error);
});
    
      };
    
  return (
    <main className="mb-4">
    <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <p>Add Your Post</p>
    <div className="my-5">
                           
    <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit = {submitHandler}>
        <div className="form-floating">
            <input className="form-control" id="name" type="text" placeholder="Enter your name..." name = "title" data-sb-validations="required" />
            <label for="name">Title</label>
            <div className="invalid-feedback" data-sb-feedback="name:required">A title is required.</div>
        </div>
        
        <div className="form-floating">
            <input className="form-control" id="authname" type="text" name = "author" placeholder="Enter auther name..." data-sb-validations="required" />
            <label for="phone">auther name</label>
            <div className="invalid-feedback" data-sb-feedback="phone:required">Auther name required.</div>
        </div>
        <div className="form-floating">
            <textarea className="form-control" id="message" placeholder="Enter your message here..."  data-sb-validations="required" name = "post"></textarea>
            <label for="message">description</label>
            <div className="invalid-feedback" data-sb-feedback="message:required">A description is required.</div>
        </div>
        <br />
       
       
        <button className="btn btn-primary text-uppercase " id="submitButton" type="submit">Send</button>
    </form>
</div>
</div>
</div>
</div>
</main>
  )
}
