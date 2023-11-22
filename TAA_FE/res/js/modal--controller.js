window.addEventListener("load", () => {
    const openModalBtns = document.querySelectorAll("[data-modal-target]");
    const closeModalBtns = document.querySelectorAll(".modal__btn--close");
    let activeModal = null;
    let previousModal = null;

    openModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modalId = btn.dataset.modalTarget;
            const modal = document.querySelector(modalId);
            if (modal) {
                closeModal(); // Ẩn popup cũ
                previousModal = activeModal; // Lưu popup hiện tại vào biến previousModal
                activeModal = modal; // Lưu popup mới vào biến activeModal
                modal.classList.add("active"); // Hiển thị popup mới
                console.log(previousModal);
                console.log(activeModal);
            }
        });
    });
    closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            activeModal.classList.remove("active")
        });
    });
    function closeModal() {
        if (activeModal) {
            activeModal.classList.remove("active"); // Ẩn popup hiện tại
            if (previousModal) {
                previousModal.classList.add("active"); // Hiển thị popup trước đó
                activeModal = previousModal; // Cập nhật activeModal với popup trước đó
                previousModal = null; // Xóa trạng thái popup trước đó
            }
        }
        // previousModal.classList.remove("active"); // Ẩn popup hiện tại
    }

});
