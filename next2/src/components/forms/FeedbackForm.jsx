"use client";

const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("success");
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="text-center space-y-5 px-5">
        <textarea
          required
          className="w-xl border border-dashed p-3"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <hr />
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
