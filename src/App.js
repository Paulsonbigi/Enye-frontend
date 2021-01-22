import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import Posts from "./components/post"
import { Row, Container } from "reactstrap"
import "./App.css"
import Postfilter from "./components/PostFilter"
import Pagenation from "./components/Pagenation"
import { PartyModeTwoTone } from "@material-ui/icons"

const App = () => {
  const [posts, setposts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(20)
  const [search, setSearch] = useState("")
  const [filter1, setFilter1] = useState("")
  const [filter2, setFilter2] = useState("")

  useEffect(()=>{
    const fetchPost = async () => {
      setLoading(true)
      const res = await axios.get("https://api.enye.tech/v1/challenge/records")
        
        setposts(res.data.records.profiles)
        setLoading(false)
    }
    fetchPost();
  }, [])

  const filteredPosts = posts.filter(post => {
        if (search || filter1 || filter2) {
            if(search && (post.FirstName.toLowerCase().includes(search.toLowerCase()))){
                return post;
            }
            if(filter1 && (post.PaymentMethod.toLowerCase() === (filter1.toLowerCase()))){
                return post;
            }
            if(filter2 && (post.Gender.toLowerCase() === (filter2.toLowerCase()))){
                return post;
            }
        } else {
            return post
        }
    })



  // get current post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return(
    <Container>
      <h1 className="title mb-10">My Blog</h1>

      <div>
        <Postfilter placeholder="Search Name" search={search} setSearch={setSearch}/>
        <Postfilter placeholder="Filterby payment method" search={filter1} setSearch={setFilter1}/>
        <Postfilter placeholder="Filter by gender" search={filter2} setSearch={setFilter2}/>
      </div>
      <Row className="justify-content-center nominated mt-4">
        <Posts posts={currentPosts} loading={loading}/>     
      </Row>
      <Row className="justify-content-center nominated mt-4 mb-5">
      <Pagenation postPerpage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
      </Row>
      
    </Container>
  )
}

export default App;