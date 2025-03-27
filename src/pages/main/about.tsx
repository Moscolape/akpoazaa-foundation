import PageWrapper from "../../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../../utils/aos-init";
import { CEO, IT } from "../../constants/assets";
import Metrics from "../../components/metrics";

const About = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <section className="pt-12 sm:px-6 px-3 max-w-4xl mx-auto">
        <h1
          className="text-[#071125] text-3xl sm:text-5xl font-Script text-center font-bold sm:mt-0 -mt-12"
          data-aos="flip-down"
        >
          About Us
        </h1>

        <p
          className="sm:text-2xl text-lg text-gray-700 text-center mb-12 mt-6 font-Montserrat"
          data-aos="fade-right"
        >
          Welcome to <strong>Akpoazaa Foundation!</strong>
        </p>

        <div className="mb-15 font-Montserrat" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Our History
          </h2>
          <p className="text-gray-700">
            <em>
              "Akpoazaa Foundation is my birth child. I started it over 15 years
              ago. I was teaching then and I used to organize quiz competitions
              and buy mathematical sets and other equipments for the winners. I
              always told them that it was sponsored by Akpoazaa Foundation even
              though the company hadn't been fully incorporated then. From the
              quiz competitions in the school I was teaching, I now migrated to
              inter-school competitions. This was because of my love for
              education."
            </em>
            <br />
            <br />
          </p>
          <p>
            The above statement was provided by the <b>CEO</b> of Akpoazaa
            Foundation, <b>Dr. Frank Odinaka Igbojindu</b>
          </p>
          <br />
          <p>
            After his years of teaching, he started building up foundations for
            honourable individuals, most of whom were indigenes of his
            hometown, Okija. He found out that several individuals were of high
            social strata and they were willing to give back to the community
            and all they needed was someone who they could trust. So when he
            pitched his ideas to these individuals, they were glad to start it
            up. Some of these foundations are;
          </p>
          <ul className="list-disc ml-4">
            <li>Akuna Akuna empowerment scheme</li>
            <li>Ezejiagba foundation</li>
            <li>Ofiafulu ego foundation</li>
            <li>Abignwa foundation</li>
            <li>Igirigi Ego foundation</li>
          </ul>
          <br />
          <p>
            This prompted him to begin his own foundation{" "}
            <b>officially in 2023</b> and Akpoazaa foundation became a
            subsidiary of <b>Akpoazaa Group.</b>
          </p>
        </div>
        <div className="font-Montserrat" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p>
            At <b>Akpoazaa Foundation</b>, our mission is to empower individuals
            and communities through education, skill acquisition, and
            sustainable development.
          </p>
          <br />
          <p>
            We are committed to providing scholarships, organizing
            skill-enhancing workshops, and building essential support
            infrastructures that uplift lives.
          </p>
          <br />
          <p>
            Through our initiatives, we strive to create opportunities for
            growth, self-sufficiency, and lasting impact, driven by our
            dedication to service, compassion, and social responsibility.
          </p>
        </div>
        <Metrics />
        <div className="mb-15 font-Montserrat" data-aos="fade-up">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            Our vision is to be a catalyst for positive change, fostering a
            society where every individual has access to education, skills, and
            opportunities for a better future.
          </p>
          <br />
          <p>
            We envision thriving communities where empowerment leads to
            self-reliance, and acts of kindness inspire a cycle of generosity
            and transformation.
          </p>
          <br />
          <p>
            Guided by our motto,{" "}
            <em>
              <b>"Just a touch for God and humanity"</b>
            </em>
            , we aspire to create a world where compassion and development go
            hand in hand.
          </p>
        </div>
      </section>
      {/* Founder Section */}
      <div
        className="flex flex-col justify-center items-center text-center font-Montserrat"
        data-aos="fade-up"
      >
        <img src={CEO} alt="" className="w-100 h-100" />
        <h3 className="text-xl font-semibold mt-10">
          Dr. Frank Odinaka Igbojindu
        </h3>
        <p className="text-gray-600">(Dip Acc, BSc Acc, MSc Acc, PhD Acc)</p>
        <p className="text-gray-600">
          CEO, <b>Akpoazaa Foundation</b> | GMD, <b>Akpoazaa Group</b>
        </p>
      </div>
      <div
        className="mb-15 font-Montserrat max-w-4xl mx-auto sm:px-6 px-3 py-12"
        data-aos="fade-up"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Team</h2>
        <p>
          Our team is a dynamic one. We have a lot of amazing adhoc staff that
          we work with on a program/event basis. However, the charismatic
          individuals below have formed a backbone structure upon which Akpoazaa
          Foundation has successfully carried out its operations because of how
          they discharge their job responsibilities effectively and efficiently.
        </p>
        <br />
        <div>
          <div
            className="flex flex-col justify-center items-center text-center font-Montserrat"
            data-aos="fade-up"
          >
            <img src={IT} alt="IT" className="w-60 h-75" />
            <h3 className="text-xl font-semibold mt-10">
              Engr. Chukwunenye Moses Chidiebere
            </h3>
            <p className="text-gray-600">
              Web Developer, <b>Akpoazaa Foundation</b> | IT Manager, <b>Akpoazaa Group</b>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
