
function Subscribe() {
  return (
    <>

      <div id='subscribe' className="subscriber" > {/* User Subscribe Main Container  */}

        <form action=""> {/* Form to submit user info  */}

          <div className='userSubscriber'>
            <div id="ftrHeading" >
              SUBSCRIBE
              <p>Sign-up to our newsletter</p>
            </div>

            <div><input type="text" placeholder='Your email' /></div>
            <button type='button' id='btnSubmit'>SUBMIT</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default Subscribe;