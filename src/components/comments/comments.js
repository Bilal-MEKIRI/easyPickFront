import "./comments.scss";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { ClipLoader } from "react-spinners";

export default function Comments({ contentId }) {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formStatusType, setFormStatusType] = useState(""); // "success" or "error"
  const [commentsList, setCommentsList] = useState([]); // To hold list of comments

  // Fetch comments on component mount and whenever there's a new comment
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/comments/content/${contentId}`
        );
        setCommentsList(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [contentId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Fetch the JWT token from the localStorage
    const token = localStorage.getItem("token");

    // Check if user authentified
    if (!token) {
      setFormStatus("Veuillez vous connecter pour publier un commentaire.");
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

    // Check if the comment is empty
    if (!comment.trim()) {
      setFormStatus("Votre commentaire ne peut pas être vide.");
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3030/comments",
        { comment, contentId },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the request header
          },
        }
      );

      if (response.status === 200) {
        setFormStatus("Commentaire publié avec succès!");
        setFormStatusType("success");
        setComment(""); // Clear the comment textarea
        setCommentsList([...commentsList, response.data.savedComment]); // Add the new comment to the list
      } else {
        setFormStatus("Erreur lors de la publication du commentaire.");
        setFormStatusType("error");
      }
    } catch (error) {
      setFormStatus("Erreur lors de la publication du commentaire.");
      setFormStatusType("error");
      console.error("Error posting comment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="comments-section">
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="input-send-btn-container">
          <label htmlFor="comment" className="comment-label">
            Comment
          </label>
          <textarea
            className="comment-textarea"
            name="comment"
            id="comment"
            cols="100"
            rows="3"
            placeholder="Votre avis"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
          <button className="btn" disabled={isLoading}>
            {isLoading ? <ClipLoader color={"#000000"} size={30} /> : "Envoyer"}
          </button>
        </div>
        {formStatus && (
          <p className={`validation-message ${formStatusType}`}>{formStatus}</p>
        )}
      </form>
      {commentsList.map((cmt) => (
        <div key={cmt._id} className="published-comment-container">
          <div className="comment-info">
            <div className="user-info">
              <div className="user-icon">
                {cmt.userName ? cmt.userName.charAt(0) : ""}
              </div>
              <div className="user-email">{cmt.userName}</div>
            </div>
            <div className="published-at">
              {new Date(cmt.createdAt).toLocaleDateString()}
            </div>
          </div>
          <p className="published-comment">{cmt.comment}</p>
        </div>
      ))}
    </section>
  );
}
