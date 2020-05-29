import React,{useState} from 'react'

const BlogForm=({createBlog})=>{
    const [title,setNewTitle]=useState('')
    const [author,setNewAuthor]=useState('')
    const [url,setNewUrl]=useState('')


    const handleTitleChange=(event)=>{
    setNewTitle(event.target.value)
    }
    const handleAuthorChange=(event)=>{
        setNewAuthor(event.target.value)
        }
        const handleUrlChange=(event)=>{
            setNewUrl(event.target.value)
            }
    const addBlog=(event)=>{
        event.preventDefault()
        createBlog({
            title:title,
            author:author,
            url:url
        })
        setNewAuthor('')
        setNewTitle('')
        setNewUrl('')
       
    }
    
    return(
        <div>
            <h2>Add new blog</h2>

            <form
            onSubmit={addBlog}>
                title
                <input
                value={title}
                onChange={handleTitleChange}
                />
                <br/>
                author
                <input
                value={author}
                onChange={handleAuthorChange}
                />
                <br/>
                url
                <input
                value={url}
                onChange={handleUrlChange}
                />
                <br/>
                <button type="submit">save</button>
            </form>
         
        </div>
    )
}

export default BlogForm