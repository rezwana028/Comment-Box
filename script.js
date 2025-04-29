function addComment() {
    const input = document.getElementById("commentInput");
    const commentText = input.value.trim();

    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }

    const commentList = document.getElementById("commentList");

    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);

    input.value = ""; // Clear input
}
