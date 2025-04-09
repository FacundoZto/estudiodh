import { comments } from './comments';
import './Clients.css';

const Clients = () => {
  return (
    <section class="py-5 border-bottom h-100">
      <div class="container px-5 my-5 px-5">
        <div class="text-center mb-5">
          <h2 class="fw-bolder">Testimonios & Partners</h2>
          <p class="lead mb-0">¿Qué dicen nuestros Clientes?</p>
        </div>

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            {comments.map((comment, index) => (
              index === 0 ? (
                <div class="carousel-item active" key={comment.id}>
                  <div class="card h-100 comment-card">
                    <div class="card-body">
                      <div class="comentary text-center">
                        <i class="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                        <h5 class="card-title">{comment.name}</h5>
                      </div>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <p class="card-text pt-3">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="carousel-item" key={comment.id}>
                  <div class="card h-100 comment-card">
                    <div class="card-body">
                      <div class="comentary text-center">
                        <i class="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                        <h5 class="card-title">{comment.name}</h5>
                      </div>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <p class="card-text pt-3">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients;