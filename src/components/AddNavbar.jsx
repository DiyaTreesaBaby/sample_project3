import React from 'react'

const AddNavbar = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <nav class="navbar bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      
      TuneTrack
    </a>
  </div>
</nav>
<a class="btn btn-danger" href="/" role="button">HOME</a>
<a class="btn btn-danger" href="/form" role="button">SIGN IN</a>
<a class="btn btn-danger" href="/search" role="button">SEARCH</a>
<a class="btn btn-danger" href="/fav" role="button">PLAYLIST</a>
        </div>
    </div>
</div>





    </div>
  )
}

export default AddNavbar