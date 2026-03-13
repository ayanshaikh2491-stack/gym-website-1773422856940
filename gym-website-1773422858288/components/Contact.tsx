function Contact() {
  return (
    <section className="py-12">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 p-2 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 p-2 rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-gray-100 p-2 rounded-md w-full h-64"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;