export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
    modal.setAttribute("aria-hidden", "true");
}

window.closeModal = closeModal;