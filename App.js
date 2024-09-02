import './App.css';
import './backend';
function App() {
  return (
          <div className='bod'>
              <form method="post" name="contact-form" className="container" action="https://script.google.com/macros/s/AKfycbx42xJR1NptUaagkhkP7Z_VecsGCTZCG-lIuTDTzQidRVQfEIWNfuwq9YWdBseEjQnsTw/exec">
                <h1 className='head'>Feedback form</h1>
                Enter Your Name: <input type='text' name='Name'  className="name" placeholder='Name'/><br></br>
                Enter Your Number: <input type='text' name='Number'   className="name" placeholder='Number'/><br></br>
                Enter Your Email: <input type='email' name='Email' className="name" placeholder='E-mail'/><br></br>
                Comments: <textarea type='text' name='Comments' className='Add'  rows='7' placeholder='Comments'/><br></br>
                <input type='submit' id='submit' className="butt" value="Submit"/>
              </form>
          </div>
        
  )
}
export default App;
