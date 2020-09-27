import React, { useEffect, useState } from 'react';
import { Users } from 'react-feather'

import Navbar from './components/Navbar'
import NavTabs from './components/NavTabs'
import SearchForm from './components/SearchForm'
import ListActions from './components/ListActions'
import SuppListsTable from './components/SuppListsTable'
import Pagination from './components/Pagination'
import ProcQueueList from './components/ProcQueueList'

import './css/App.css'

function App() {
  const iconSize = 20
  const [isLoading, setIsLoading] = useState(false)
  const [suppLists, setSuppLists] = useState([])
  const [pages, setPages] = useState({
    baseURL : "https://crm.mdsmedia.co.in/api/supplist",
    prevPage : null,
    currentPage : 'https://crm.mdsmedia.co.in/api/supplist?page=1',
    nextPage : null
  })
  const [search, setSearch] = useState("")
  const [isLoading2, setIsLoading2] = useState(false)
  const [procUrl, setProcUrl] = useState('https://crm.mdsmedia.co.in/api/proqueue')
  const [procQueue, setProcQueue] = useState([])
  const [isLoading3, setIsLoading3] = useState(false)

  // Set loading on scroll to bottom of processing queue
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
    setIsLoading3(true)
  }

  // Load the data when loading state update
  useEffect(() => {
    if (!isLoading3) return
    if (procUrl === null) {
      setIsLoading3(false)
      return
    }
    loadProcQueue();
  }, [isLoading3]); // Loading dependency


  // Get Processing ques data via api.
  // Used API created by me instead of static data from json files.
  const loadProcQueue = () => {
    fetch(procUrl)
    .then(response => response.json())
    .then(jsonData => {
      if(jsonData.status === "success") {
        setIsLoading2(false)
        setIsLoading3(false)
        let data = jsonData.data.data
        setProcQueue(procQueue.concat(data))
        setProcUrl(jsonData.data.next_page_url)
      }
    })
    .catch(error => console.log(error))
  }

  // Set search query state
  const handleSearch = (e) => {
    e.preventDefault()
    let form = e.target
    setSearch(form["q"].value)
  }

  // set search query state to blank
  const handleSearchChange = (e) => {
      if(e.target.value === "" && search !== "") {
          setSearch("")
      }
  }

  // set pagination state
  const handlePaginate = (e) => {
    setPages({
      ...pages,
      currentPage : e.target.getAttribute('data-url')
    })
  }

  // Load Suppression Lists via API.
  const loadSuppLists = () => {
    setIsLoading(true)
    let url = pages.currentPage
    if(search !== "") {
      url = pages.baseURL + "?q=" + search
    }

    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
      if(jsonData.status === "success") {
        setIsLoading(false)
        setSuppLists(jsonData.data.data)
        setPages({
          baseURL : jsonData.data.path,
          prevPage : jsonData.data.prev_page_url,
          currentPage : jsonData.data.path + "?page=" + jsonData.data.current_page,
          nextPage : jsonData.data.next_page_url
        })
      }
    })
    .catch(error => console.log(error))
  }

  // Set onscroll event listener for processing queue and load data
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setIsLoading2(true)
    loadProcQueue()
  }, [])

  // Loas suppression lists data.
  useEffect(() => {
    loadSuppLists()
  }, [pages.currentPage, search])

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <NavTabs>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade" id="target-lists" role="tabpanel" aria-labelledby="target-lists-tab">
              Target Lists Space
            </div>

            <div className="tab-pane fade show active" id="suppression-lists" role="tabpanel" aria-labelledby="suppression-lists-tab">
              <div className="row mb-3">
                <div className="col-md-6">
                  <strong>Total Suppression Records:</strong> <Users size={iconSize} /> <span className="span-F2A954">15,500</span>
                </div>
                <div className="col-md-4">
                  <SearchForm search={search} handleSearchChange={handleSearchChange} handleSearch={handleSearch} />
                </div>
                <div className="col-md-2 text-md-right">
                  <ListActions />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-12 mb-4">
                  <SuppListsTable isLoading={isLoading} lists={suppLists} />
                  <Pagination pages={pages} handlePaginate={handlePaginate} />
                </div>
                <div className="col-md-6">
                  <h4>Processing Queue</h4>
                </div>
                <div className="col-md-6 text-right">
                  <a href="#">View Suppression List History</a>
                </div>
                <div className="col-md-12">
                  <ProcQueueList isLoading2={isLoading2} procQueue={procQueue} />
                  {
                    isLoading3 ?
                    <p>Loading More Data. Please Wait.</p> :
                    ""
                  }
                </div>
              </div>
              
            </div>
          </div>
        </NavTabs>
        
      </div>
    </>
  );
}

export default App;
