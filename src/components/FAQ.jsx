import sleepingDog from '../assets/support/sleepingDog.gif'

export default () => {
  return (
    <section className="faq">
      <div className="faq-box">
        <img
          src={sleepingDog}
          alt="Sleeping dog - Billy the bot"
          className="sleeping-dog"
        />
        <div className="faq-text">
          <h2>Oops! Billy is Taking a Nap 😴</h2>
          <p>
            Meet <strong>Billy</strong>, our Enerplaz Bot who knows everything about EVs — from charging speeds to battery secrets. But after answering thousands of questions, he’s decided to take a little break.
          </p>
          <p>
            While Billy recharges, feel free to contact us or check back soon. He’ll be back — well rested and ready to power through your EV curiosities!
          </p>
        </div>
      </div>
    </section>
  );
};