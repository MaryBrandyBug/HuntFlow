const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        {newUser
          ? (
            <p>Hello!</p>
          )
          : (
            <main>
              <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js" />
                <link rel="stylesheet" href="./css/style.css" />
                <div className="container">
                  <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                      <div className="tab" role="tabpanel">
                        <ul className="nav nav-tabs" role="tablist">
                          <li role="presentation" className="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">sign in</a></li>
                          <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">sign up</a></li>
                        </ul>
                        <div className="tab-content tabs" id="formdiv">
                          <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                            <form className="form-horizontal" name="enterForm">
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email addres</label>
                                <input type="email" className="form-control" name="enterEmail" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="enterPassword" />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn btn-default">Sign in</button>
                              </div>
                            </form>
                          </div>
                          <div role="tabpanel" className="tab-pane fade" id="Section2">
                            <form className="form-horizontal" method="POST" action="/" name="regForm">
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control" name="name" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn btn-default">Sign up</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
        <script defer src="/index.js" />
      </div>
    </Layout>
  );
};
