import about from '../../assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <>
      <img src={about} class="img-fluid" alt="..."></img>
      <section class="border-bottom" id="about-section">
        <h3 class="display-6 fw-semibold text-gray mb-2 text-center">¿QUIÉNES SOMOS?</h3>
        <p class="text-center">
          En D&H creemos que la colaboración y la comunicación abierta con los clientes son esenciales para el éxito de cualquier negocio. Nuestro equipo está formado por profesionales que se interesan por tu empresa y se encuentran en constante búsqueda de las mejores soluciones para tu crecimiento.

          La capacitación constante y la mejora continua forman una parte central en el proceso de ofrecer un servicio contable de calidad que colabore en el crecimiento de tu negocio.
        </p>
      </section>

    </>
  )
}

export default About;