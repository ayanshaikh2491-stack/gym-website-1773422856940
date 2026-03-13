function Testimonials() {
  return (
    <section className="py-12">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">What Our Members Say</h2>
        <div className="flex space-x-4">
          <div className="bg-white p-4 rounded-md">
            <p>
              Gym Website has been a game-changer for me. The staff is
              knowledgeable and supportive, and the equipment is top-notch.
            </p>
            <p className="text-sm text-gray-500">John Doe</p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <p>
              I was hesitant to join a gym, but Gym Website has exceeded my
              expectations. The classes are challenging and fun, and the
              instructors are always available to help.
            </p>
            <p className="text-sm text-gray-500">Jane Doe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;