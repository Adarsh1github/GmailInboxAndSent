var React = require('react');

var Navbar = React.createClass({
render: function(){
  return(
    <div className="container-fluid">
      <div className="row" id="row1">
        <div className="col-md-3">
        <h1>Gmail</h1>
        </div>
        <div className="col-md-6">
        <form className="navbar-form">
        <div id="searchId">
              <input className="form-control" type="text" placeholder="search for.."/>
              <button type="submit" className="btn btn-default pull-left" id="glyphSearch" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-search"></span></button>
              </div>
            </form>
        </div>
        <div className="col-md-3">
        <div id="userDrop">
        <ul className="nav navbar">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user"></span>Adarsh<span className="caret"></span></a>
          <ul className="dropdown-menu">
          <li>
            <a href="#"><span className="glyphicon glyphicon-home"></span>Home</a>
          </li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-cog"></span>Settings</a>
          </li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-refresh"></span>Profile Update</a>
          </li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-off"></span>Sign Out</a>
          </li>
          </ul>
        </li>
      </ul>
      </div>
        </div>
      </div>
  </div>
);
}
});
module.exports = Navbar;
