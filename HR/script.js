document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Employee Switching Logic ---
    const employeeButtons = document.querySelectorAll(".employee-btn");
    const headerTitle = document.getElementById("header-emp-name");

    employeeButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            employeeButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Update the Header text with the employee's name and ID
            const name = button.getAttribute("data-name");
            const id = button.getAttribute("data-id");
            headerTitle.textContent = `${name} (${id})`;
        });
    });

    // --- 2. Leave Approval Logic ---
    const approveBtn = document.getElementById("btn-approve");
    const declineBtn = document.getElementById("btn-decline");
    const leaveCard = document.getElementById("leave-request-card");
    const emptyState = document.getElementById("empty-state");
    const leaveCounter = document.getElementById("leave-counter");

    // Function to handle the removal of the leave card
    const resolveLeaveRequest = () => {
        // Fade out/hide the card
        leaveCard.style.display = "none";
        
        // Show the success/empty message
        emptyState.classList.remove("hidden");

        // Update the top stat counter to 0
        leaveCounter.textContent = "0 Requests";
        leaveCounter.classList.remove("text-slate-800");
        leaveCounter.classList.add("text-emerald-600"); // Make it green to show all clear
    };

    // Attach the logic to both buttons
    if (approveBtn && declineBtn) {
        approveBtn.addEventListener("click", resolveLeaveRequest);
        declineBtn.addEventListener("click", resolveLeaveRequest);
    }
});