import Layout from '../layout';

function ContactPage() {
  return (
    <Layout>
      <h1>Get in Touch</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea />
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}

export default ContactPage;