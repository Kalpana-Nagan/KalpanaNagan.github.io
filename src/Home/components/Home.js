import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <div className="page">
        <div className="container-fluid mt-3" style={{maxWidth:'1400px'}}>
            <div className="row">
                <div className="col-sm-12 col-md-4">

                    <div className="header card  box">
                        <div className="container-fluid p-0 text-on-image">
                            <img src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} style={{width:'100%'}} alt="Avatar"/>
                            <div className="container bottom-left text-light">
                                <h2>Kalpana Nagan</h2>
                            </div>
                        </div>
                    
                        <div className="container mt-2">
                            <p><i className="fa fa-briefcase fa-fw mr-3 lead text-info"></i>Full Stack Developer</p>
                            <p><i className="fa fa-home fa-fw mr-3 lead text-info"></i>Toronto, ON , Canada</p>
                            <p><i className="fa fa-envelope fa-fw mr-3 lead text-info"></i>nkalpana@gmail.com</p>
                            <p><i className="fa fa-phone fa-fw mr-3 lead text-info"></i>+1 6478632316</p>
                            <hr/>

                            <p className="lead"><b><i className="fa fa-asterisk fa-fw mr-3 text-info"></i>Skills</b></p>
                            <p>React.js</p>
                            <div className="progress mb-3" style={{height: '18px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'90%'}}>90%</div>
                            </div>

                            <p>Redux</p>
                            <div className="progress mb-3" style={{height: '18px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'90%'}}>90%</div>
                            </div>

                            <p>BackboneJS</p>
                            <div className="progress mb-3" style={{height: '18px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'90%'}}>90%</div>
                            </div>

                            <p>Bootstrap</p>
                            <div className="progress mb-3" style={{height: '18px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'80%'}}>80%</div>
                            </div>

                            <p>HTML, CSS and Javascript</p>
                            <div className="progress mb-3" style={{height: '18px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'80%'}}>80%</div>
                            </div>

                            <p>Java</p>
                            <div className="progress mb-3" style={{height: '18px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'80%'}}>75%</div>
                            </div>

                            <hr/>

                            <p className="lead"><b><i className="fa fa-globe fa-fw mr-3 text-info"></i>Languages</b></p>
                            <p>English</p>
                            <div className="progress mb-3" style={{height: '24px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'100%'}}>100%</div>
                            </div>

                            <p>Kannada</p>
                            <div className="progress mb-3" style={{height: '24px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'100%'}}>100%</div>
                            </div>

                            <p>Hindi</p>
                            <div className="progress mb-3" style={{height: '24px', borderRadius: '20px'}}>
                                <div className="progress-bar bg-info" style={{width:'100%'}}>100%</div>
                            </div>
                            <br/>
                        </div>
                    </div><br/>

                </div>

                <div className="col-sm-12 col-md-8">
                    <div className="container card mb-4 box">
                        <h2 className="header1 p-3"><i className="fa fa-suitcase fa-fw mr-3 text-info"></i>Work Experience</h2>
                        <div className="container">
                            <h5 className="header1"><b>Full Stack Developer / CGI</b></h5>
                            <h6 className="text-info"><i className="fa fa-calendar fa-fw mr-3"></i>Mar 2015 - <span className="badge bg-info text-light">Jun 2018</span></h6>
                            <p>As a full stack developer, worked on various projects using Javascrip libraries and Java</p>
                            <hr/>
                        </div>
                        <div className="container mb-4">
                            <h5 className="header1"><b>Frontend web devloper / Robert Bosch</b></h5>
                            <h6 className="text-info"><i className="fa fa-calendar fa-fw mr-3"></i>Jul 2018 - Nov 2018</h6>
                            <p>As a Frontend web developer, developed responsive web applications.</p>
                        </div>
                    </div>

                    <div className="container card mb-4 box">
                        <h2 className="header1 p-3"><i className="fas fa-book-open fa-fw mr-3 text-info"></i>Education</h2>
                        <div className="container">
                            <h5 className="header1"><b>SSLC</b></h5>
                            <h6 className="text-info"><i className="fas fa-calendar fa-fw mr-3"></i>2006 - 2007</h6>
                            <p>Shastry High School, Hunsur</p>
                            <hr/>
                        </div>
                        <div className="container mb-4">
                            <h5 className="header1"><b>PUC</b></h5>
                            <h6 className="text-info"><i className="fa fa-calendar fa-fw mr-3"></i>2007 - 2009</h6>
                            <p>SDM PU college, Mysore</p>
                            <hr/>
                        </div>
                        <div className="container mb-4">
                            <h5 className="header1"><b>Bachelor of Engineering</b></h5>
                            <h6 className="text-info"><i className="fa fa-calendar fa-fw mr-3"></i>2009 - 2013</h6>
                            <p>BGS institute of technology, Mysuru</p>
                        </div>
                    </div>

                    <div className="clearfix pb-2">
                        <a href={`${process.env.PUBLIC_URL}/Kalpana_Nagan_Resume.pdf`} download className="btn btn-info float-sm-left float-md-right">
                            <i className="fa fa-download"></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <footer className="container-fluid text-center bg-secondary text-white p-1">
            <p>Find me on social media.</p>
            <ul className="list-inline m-0">
                <li className="list-inline-item">
                    <a className="text-light" rel="noopener noreferrer" href="https://www.facebook.com/kalpana.nagan" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light" rel="noopener noreferrer" href="https://www.instagram.com/Kalpana_Nagan/" target="_blank">
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light" rel="noopener noreferrer" href="https://linkedin.com/in/kalpana-n-4b972577/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light" rel="noopener noreferrer" href="https://twitter.com/KalpanaNagan" target="_blank">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </li>
            </ul>
        </footer>

    </div>
    );
  }
}

export default Home;