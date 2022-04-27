import React, { Component } from 'react'
import axios from 'axios'
import './postform.css'

 class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
        title: '',
        body: ''
      }
    }

handleChange=(e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
  e.preventDefault()
  axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
          console.log(response)
        })
}


  render() {
      const {userId,title,body} = this.state
    return (
      <div  className="form">
      <form onSubmit={this.handleSubmit}>
      <div className='text'>
      <label>User Id</label>
      <input className='input' type='text' placeholder="User Id" name='userId' value={userId} onChange={this.handleChange} />
      </div>

      <div className='text'>
      <label>Title</label>
      <input className='input' type='text' placeholder="title" name='title' value={title} onChange={this.handleChange} />
      </div>

      <div className='text'>
      <label>Body</label>
      <input className='input' type='text' placeholder="body" name='body' value={body} onChange={this.handleChange} />
      </div>
      <div>
      <button className='button' type='submit'>Submit</button>
      </div>
      </form>
      
      </div>
    )
  }
}

export default PostForm