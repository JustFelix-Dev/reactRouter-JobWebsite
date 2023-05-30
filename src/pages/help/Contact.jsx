import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData()
    return ( 
           <>
           <div className="contact">
            <h3>Contact Us</h3>
            <Form method="post" action="/help/contacts">
                <label htmlFor="">
                    <span>Your Email:</span>
                    <input type="email" name="email" required/>
                </label>
                <label htmlFor="">
                    <span>Your Message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
                { data && data.error && <p>{data.error}</p>}
            </Form>
           </div>
           </>
     );
}

export const contactAction = async ({ request })=>{
     console.log(request)
     const data = await request.formData()

     const submission = {
        email: data.get('email'),
        message: data.get('message')
     }

     if(submission.message.length < 10){
        return {error:'Your message is not up to 10 characters.'}
     }
     console.log(submission)
      return redirect('/')
}

export default Contact;