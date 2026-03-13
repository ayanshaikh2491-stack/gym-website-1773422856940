function Memberships() {
  return (
    <section className="py-12">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Membership Options</h2>
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-2xl">Basic</h3>
            <p>$49.99/month</p>
            <p>Unlimited access to equipment and classes.</p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-2xl">Premium</h3>
            <p>$99.99/month</p>
            <p>Additional perks, including personalized coaching and
              priority access to classes.</p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-2xl">Elite</h3>
            <p>$199.99/month</p>
            <p>Top-of-the-line perks, including private coaching and priority
              access to all classes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memberships;