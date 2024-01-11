import {useState} from 'react'


export default function Contact(){

  const [contactFormValues, setContactFormValues] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    enquiry: "",
  })

  const [invalidEmail, setInvalidEmail] = useState({
    invalidEmailAddress: false,
    emailsDoNotMatch: false,
  });

  

  

  function handleContactFormChange(identifier, value){
    setContactFormValues((prevValues)=>({
      ...prevValues,
      [identifier]: value
    }))
    
  }

  function handleContactFormSubmit(){
    // email address has no @
    if(!contactFormValues.email.includes('@')){
      setInvalidEmail((prevValues)=>({
        ...prevValues,
        invalidEmailAddress: true,
      }))
      return;
    }else{
      setInvalidEmail((prevValues)=>({
        ...prevValues,
        invalidEmailAddress: false
      }))
    }
    // email addresses do not match
    if(contactFormValues.email !== contactFormValues.confirmEmail){
      setInvalidEmail((prevValues)=>({
        ...prevValues,
        emailsDoNotMatch: true
      }))
      return;
    }else{
      setInvalidEmail((prevValues)=>({
        ...prevValues,
        emailsDoNotMatch: false
      }))
    }
    
    setContactFormValues({
      name: "",
      email: "",
      confirmEmail: "",
      enquiry: "",
    })
  }

 



  return(
    <div id="contact" className="flex ">
      <div id="socials" className="flex flex-col p-8 -pt-4 mt-72 bg-gray-700 w-full justify-end align-bottom mb:auto h-6">
        <p className="text-center text-yellow-500 font-semibold text-3xl">&copy; Lewis Aberdein</p>
      </div>
      <div id="contact-form" className="flex border border-gray-700 rounded lg:justify-end sm:justify-center pb-10 ml-auto">
          <div className="flex justify-end">
              <div className="flex flex-col justify-end w-96 h-96 rounded px-4 mx-2 my-2">
                  <h2 className="m-4 font-semibold text-left text-yellow-500 text-2xl">Contact Me!</h2>
                  <input 
                    name={contactFormValues.name}
                    value={contactFormValues.name}
                    onChange={(event)=>handleContactFormChange("name", event.target.value)}
                    className="m-4 p-2 rounded focus:text-black" placeholder="Name">
                  </input>
                  <input
                    type="email"
                    value={contactFormValues.email}
                    name={contactFormValues.email}
                    onChange={(event)=>handleContactFormChange("email", event.target.value)} 
                    className={`m-4 p-2 rounded border focus:text-black ${invalidEmail.invalidEmailAddress ? 'border-red-600' : 'border'}`}
                    placeholder="Email"
                    required
                    >
                  </input>
                  <input
                    type="email"
                    value={contactFormValues.confirmEmail}
                    name={contactFormValues.confirmEmail}
                    onChange={(event)=>handleContactFormChange("confirmEmail", event.target.value)} 
                    className="m-4 p-2 rounded focus:text-black" 
                    placeholder="Confirm Email"
                    required
                    >
                  </input>
                  
                  <textarea
                    value={contactFormValues.enquiry}
                    name={contactFormValues.enquiry}
                    onChange={(event)=>handleContactFormChange("enquiry", event.target.value)} 
                    className="m-4 p-2 rounded focus:text-black" placeholder="Enquiry">
                  </textarea>
                  <div className="flex justify-end">
                    <div className="mr-auto text-red-400 ml-4">
                      {!invalidEmail.invalidEmailAddress ? <p>Invalid Email.</p> : <p className="text-green-300">Form Submitted!</p>}
                  
                    </div>
                    <button name="submit-btn" onClick={handleContactFormSubmit} className="bg-yellow-500 rounded w-16 font-semibold text-white mr-4">Submit</button>  
                  </div>
                  
              </div>
          </div>
        </div>
    </div>
    
          
    
  )
}