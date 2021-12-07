class Comment {

    constructor(comment) {

        this.id = comment.id
        this.message = comment.message
        this.game_id = comment.game_id
        // console.log(comment.id)
    }

    static createComment(e) {
        e.preventDefault()
        const commentMessage = e.target.children[0].value
        const commentList = e.target.previousElementSibling
        const gameId = e.target.parentElement.dataset.id

        Comment.submitComment(commentMessage, commentList, gameId)
        e.target.reset()
    }

    static submitComment(commentMessage, commentList, gameId) {

        fetch(commentsURL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                message: commentMessage,
                game_id: gameId,
            })
        })
            .then(response => response.json())
            .then(comment => {
                let newComment = new Comment(comment)
                newComment.renderComment(commentList)
            })
    }

    renderComment(commentList) {

        const p = document.createElement('p')
        p.dataset.id = this.id
        p.innerText = "- " + this.message + " "

        const deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete"
        deleteButton.className = "btn btn-outline-danger btn-sm"

        p.append(deleteButton)

        deleteButton.addEventListener("click",this.deleteComment)
        commentList.appendChild(p)
    }
}
