<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Wouter
        <span class="text-primary"> Kayser</span>
      </h1>
      <div class="subheading mb-3">
        Jacoba van Beierenlaan 39, 2613 HX Delft
        <a
          href="mailto:site@wakayser.nl"
        >mail @wakayser.nl</a>
      </div>
      <p class="lead mb-3">
        I am an Electrical Engineering Master student. Currently I am following courses on Wireless Networking such as Cellular Networks and IoT, but also on Quantum Networking. These courses are powered by other heavy mathematical basis. On the side I enjoy several small programming projects. My remaining time is dedicated to committee work at several organizations. 
      </p>
      <p class="lead mb-4">
        Get in contact via mail, or my socials:
      </p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/wouter-kayser-337b26119/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/Werser" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://www.facebook.com/wouterkayser" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'facebook']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
