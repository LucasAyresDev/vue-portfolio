<template>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <header>
    <title>Lucas Ayres Portfólio</title>
    <div class="nav">
      <a href="#home">Home</a>
      <a href="#services">Service</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </header>




  <section class="portfolio" id="portfolio">
  <h2>Latest <span>Projects</span></h2>
  <div class="portfolio-container">
    <div class="portfolio-box">
      <img src="@/assets/img/corrida.png.png" alt="blog-corrida">
      <img src="@/assets/img/vue.png.png" alt="vue-login">
      <div class="portfolio-layer">
        <h4>Web developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi labore expedita soluta repellendus nisi, eius accusamus tenetur cum vero.

        </p>

        <a href="#"><i class='bx bx-link-external'></i></a>

      </div>
    </div>
  </div>
  <div class="portfolio-container">
    <div class="portfolio-box">
      IMG
      <div class="portfolio-layer">
        <h4>Web developer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi labore expedita soluta repellendus nisi, eius accusamus tenetur cum vero.

        </p>

        <a href="#"><i class='bx bx-link-external'></i></a>

      </div>
    </div>
  </div>

</section>
<section class="contact" id="contact">
  <img src="@/assets/img/img-perfil.png" alt="img-about">
  <h2>Contact <span>Me!</span></h2>

  <form action="">
    <div class="input-box">
      <input type="text" placeholder="Full Name">
      <input type="email" placeholder="E-mail">
    </div>

    <div>
      <input type="number" placeholder="Phone Number">
      <input type="text" placeholder="Subject">
    </div>

    <textarea cols="30" rows="8" placeholder="Message"></textarea>

    <a href="#" class="btn">Send Message</a>
  </form>
</section>








<section class="about" id="about">
  <div class="about-img">
    <img src="" alt="">
  </div>

  <div>
    <h3>About Me</h3>
    <h1>Web <span>Developer</span></h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus fugit temporibus at quis blanditiis deserunt aperiam vitae odio nulla, excepturi ullam? Totam optio, illum ullam omnis amet esse. Obcaecati nam libero, neque iusto dolorem aliquam quis modi deserunt, enim, veritatis tempore excepturi debitis ut voluptatem assumenda magnam? Molestiae, rerum?

    </p>

    <a href="#" class="btn">Read More</a>

  </div>
</section>



<footer>
  <p>Copyright &copy; 2024 by &lt;/Ayres&gt;. All Rights Reserved.</p>
</footer>






   
        <div id="contato">
            <h3 class="centro">CONTATO</h3>
            <ol>Telefone: (21) 980 470 317</ol>
            <ol>Endereço: Rua:guaxima, 105, Campo Grande, Rio de Janeiro</ol>
            <ol>email:devlucasayres@gmail.com</ol>
        </div>    
               
        

         <div id="tabela">
            <table>
                <thead>
                    <tr>
                        <th id="habilidade" colspan="2">HABILIDADES E COMPETÊNCIAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td rowspan="2">Udemy</td><td>Vue.js</td></tr>
                    <tr><td>JavaScript</td></tr>
                <tr><td>Curso em vídeo</td><td>Html e Css</td></tr>
                <tr><td>Anhanguera</td><td>Análise e desenvolvimento de sistemas</td></tr>
                </tbody>
            </table>
        </div>

                   <h3>FORMAÇÃO</h3> 
           <p> Universidade Anhanguera - Análise e Desenvolvimento de Sistemas (Fevereiro 2024 - Junho 2026) <br>

            CIEMS - Centro Interescolar Miécimo da Silva - Técnico em administração (Fevereiro 2010 - Dezembro 2013)</p>

            <h3>EXPERIÊNCIA DE TRABALHO</h3>
            
            
            Autônomo - Motofretista
            (Uber - 99)
            Março 2024 - Atual <br>

            Craque do Pão
            Atendimento ao cliente
            Serviço de entrega rápida
            CLT - Motofretista
            Junho 2021 - Fevereiro 2024 <br>

            Pizzaria Dom Marzullo
            Atendimento ao cliente
            Serviço de entrega rápida
            Autônomo - Motofretista
            Junho 2020 - Junho 2021 <br>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


