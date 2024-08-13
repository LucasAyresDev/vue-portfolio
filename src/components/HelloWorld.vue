<template>
  <div class="hello">
    

    <img :src="require('./img/img.perfil.png')" alt="img-perfil" id="foto">
    <a href="https://www.linkedin.com/in/devlucasayres2809/" target="_blank" class="button">
    <img :src="require('./img/linkedin-button.png')" alt="Perfil do LinkedIn">
    </a>
    <a href="https://github.com/LucasAyresDev" target="_blank" class="button">
      <img :src="require('./img/github-button.png')" alt="Botão do GitHub">
    </a>

    <h1 class="centro">LUCAS AYRES DE SOUZA</h1>
    <h2 class="centro">Front-End Developer</h2>
        <div class="perfil">
            <h3 class="centro">PERFIL PROFISSIONAL</h3>
                <p>Sou um estudante de Análise e Desenvolvimento de Sistemas com grande
                entusiasmo pelo desenvolvimento front-end. Tenho uma base em HTML, CSS e
                JavaScript, além de alguma experiência prática com Vue.js. Sou apaixonado por
                aprender e estou sempre buscando novas oportunidades para expandir meus
                conhecimentos e habilidades. <br>
                Estou procurando um estágio onde eu possa aplicar o que aprendi, crescer como
                desenvolvedor e contribuir para projetos significativos. Acredito na importância
                do trabalho em equipe e na comunicação eficaz, e estou ansioso para trazer
                minha energia e dedicação para sua equipe.
                </p>
        </div>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
