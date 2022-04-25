import React, { Component } from 'react'

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

  render() {
      const {userId,title,body} = this.state
    return (
      <div>
      <form onSubmit={handleSubmit}>
      <div>
      <label>User Id</label>
      <input type='text' placeholder="User Id" name='user Id' value={userId} onChange={this.hanleChange} />
      </div>

      <div>
      <label>User Id</label>
      <input type='text' placeholder="title" name='title' value={title} onChange={this.hanleChange} />
      </div>

      <div>
      <label>User Id</label>
      <input type='text' placeholder="body" name='body' value={body} onChange={this.hanleChange} />
      </div>
      <div>
      <button type='submit'>Submit</button>
      </div>
      </form>
      </div>
    )
  }
}

export default PostForm