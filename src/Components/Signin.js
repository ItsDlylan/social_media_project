function Signin(){
  return(
<div>
    <div className="ui middle aligned center aligned grid off">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">Log-in to your account</div>
        </h2>
        <form className="ui large form" id="sign_in_form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  required
                  id="signin_username"
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  id="signin_password"
                />
              </div>
            </div>
            <button
              className="ui fluid large teal submit button"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="ui error message active"></div>
        </form>

        <div className="ui message">
          New to us? <a href="javascript:;" id="signUp">Sign Up</a>
        </div>
      </div>
    </div>
    <div className="post"></div>
</div>
)}

export default Signin