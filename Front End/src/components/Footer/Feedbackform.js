import * as React from 'react';

const Feedbackform = () => {

  const [name, setName]=React.useState('');
  const [email, setEmail] = React.useState('');
  const [feedbacktext, setFeedbacktext] = React.useState('');

  const handleName=(event)=>{
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleFeedbacktext = (event) => {
    setFeedbacktext(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setFeedbacktext('');
    setName('');
    // alert(email + ' ' + password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="feedback">
      <div className="feedback-left">
      <div className="feedback-feature feedback-name">
        <label htmlFor='name'>Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleName}
          />
      </div>
      <div className="feedback-feature feedback-email">
        <section>
        <label htmlFor="email">Email</label>
        </section>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmail}
        />
      </div>
      </div> 
      <div className="feedback-right">
      <div className="feedback-feature feedback-text">
        <label htmlFor="feedbacktext">Feedback</label>
        <input
          id="feedbacktext"
          type="feedbacktext"
          value={feedbacktext}
          onChange={handleFeedbacktext}
        ></input>
      </div>
      <button type="submit">Submit</button>
      </div>
      </div>
      
  
    </form>

  );
}

export default Feedbackform