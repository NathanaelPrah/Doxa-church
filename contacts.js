document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm"); // Reference the form
  const feedback = document.getElementById("formFeedback"); // Reference the feedback area

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
      name: contactForm.name.value.trim(),
      email: contactForm.email.value.trim(),
      message: contactForm.message.value.trim(),
    };

    // Clear previous feedback
    feedback.textContent = "";

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      feedback.textContent = "All fields are required!";
      feedback.style.color = "red";
      return;
    }

    try {
      // Send the form data to the backend
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // On success, show success feedback
        feedback.textContent = "Your message was sent successfully!";
        feedback.style.color = "green";
        contactForm.reset(); // Clear the form
      } else {
        // Handle server-side errors
        const result = await response.json();
        feedback.textContent = result.error || "Failed to send message!";
        feedback.style.color = "red";
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Error:", error);
      feedback.textContent = "An error occurred. Please try again later.";
      feedback.style.color = "red";
    }
  });
});
