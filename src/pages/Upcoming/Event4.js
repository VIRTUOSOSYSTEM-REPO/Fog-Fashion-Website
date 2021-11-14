import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";

import "./Event.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/Event4Data";

function Event4() {
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles((t) => ({
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 15,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>Fog Fashion Studio | KIDS FASHION</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>FOG FASHION</h1>
      </div>
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body index">
          <div className="about-description">
            <h2 style={{ color: theme.fogYellow }}>FOG MRS INDIA GORGEOUS</h2>
            <h4 style={{ color: theme.header }}>NATIONAL EXPOSURE </h4>
            <p style={{ color: theme.tertiary80 }}>
              Selected Candidates for FOG MRS INDIA GOEGEOUS 2022 Will get an
              opportunity to work in Ad Films , Movies , Print Ads & Fashion
              Shows from Fog Fashion Studio.
            </p>
            <h4 style={{ color: theme.header }}>INTERNATIONAL EXPOSURE </h4>
            <p style={{ color: theme.tertiary80 }}>
              Winners of FOG MRS INDIA GORGEOUS 2022 will be sent to participate
              in international beauty pageants.
            </p>
            <hr />
            <p style={{ color: theme.tertiary80, fontSize: "18px" }}>
              <span style={{ color: theme.fogYellow }}>
                FOG MRS INDIA GORGEOUS
              </span>{" "}
              ® Beauty Pageant highlight the values of teamwork and comradeship
              in a quality & structured environment. All they require to become
              a part of these pageants is beauty with brains. This beauty
              pageant will be conducted with values of Indian culture and as a
              proud Indians. The Contestants of{" "}
              <span style={{ color: theme.tertiary80 }}>
                FOG MRS INDIA GORGEOUS
              </span>{" "}
              ® Beauty Pageant will be provided with special training sessions
              which will make them more confident by brushing up their skills
              and covering up flaws if any.{" "}
              <span style={{ color: theme.tertiary80 }}>
                FOG MRS INDIA GORGEOUS
              </span>{" "}
              ® Beauty Pageant gives them a platform where they can completely
              change their lives, touch the sky and become a professional. It is
              a step towards ushering them into the Glamour Industry.
              <span style={{ color: theme.tertiary80 }}>
                FOG MRS INDIA GORGEOUS
              </span>{" "}
              ® contest try to break this myth by choosing vulnerable women with
              Beauty and Brains. India is a country where women are normally not
              exposed to such type of pageants. But we, at{" "}
              <span style={{ color: theme.tertiary80 }}>
                FOG MRS INDIA GORGEOUS
              </span>{" "}
              ® conduct the competitions in such a decent and graceful manner
              that women from all cultures can come and participate with
              dignity. Fog Fashion Studio believes in giving an identity to the
              married Indian women in today’s competitive world.{" "}
              <span style={{ color: theme.tertiary80 }}>
                FOG MRS INDIA GORGEOUS
              </span>{" "}
              ® Beauty Pageant contest reaches out to beautiful and talented
              married women from India & across the globe, to be a part of this
              spectacular event and use this platform as door to enter the
              glamorous world of fame, attracting a lot of fanfare.
            </p>

            <h5 style={{ color: theme.header }}>RULES & REGULATIONS</h5>
            <p style={{ color: theme.tertiary80, fontSize: "15px" }}>
              • As applicant, I agree to abide by all rules, as changed from
              time to time by the organisers.
              <br />
              • The applicant should be between 21 years to 40 years of age
              while participating in FOG MRS INDIA GORGEOUS. As applicant, I
              shall submit the age proof (Passport, birth certificate, school
              leaving certificate, driver’s license, etc.).
              <br />
              • The applicant should be a natural born female, an Indian born,
              NRI, married & be good in health.
              <br />
              • The Applicant should be married, can be divorced or widowed with
              or without children while participating in FOG MRS INDIA GORGEOUS.
              <br />
              • The Applicant must never have, nor will she during her reign,
              pose for any photography, video, or film associated with any
              nudity or pornography. Nor has she ever or is presently involved
              in any form of employment which involves partial or complete
              nudity.
              <br />
              • The applicant should not be under any commercial contract with
              any modelling agency at the time of appearing for the auditions.
              The applicant once short listed cannot be a part of any other
              commercial contract.
              <br />
              • The organisers are not responsible for any delays or non-receipt
              of applications on any account and for any reason whatsoever.
              <br />
              • The applicant will have to participate in a disciplined and
              diligent manner throughout as per schedule given. Only persons of
              good health and moral character can participate.
              <br />
              • The auditions, regional rounds, State level, Zone level expenses
              & Grand Finale (Travel & Stay) including grooming & training will
              have to be borne by the participant.
              <br />
              • I understand and agree to pay a registration fee at the time of
              registration. I also agree to entry fee and to pay it pertaining
              to State, Zone level and National events after getting shortlisted
              and after auditions that includes grooming, hotel (with roommate),
              food, crown & banner for the duration of the event.
              <br />
              • I agree to pay any personal expenses for the pageant, including
              airfare, travel, wardrobe and hotel personal charges & other
              miscellaneous charges.
              <br />
              • The organisers are not responsible; if the sponsors do not make
              good the prizes promised by them.
              <br />
              • The organisers are not responsible for any loss or physical
              injury that occur to the applicant on account of their
              participation in the event. The applicant will participate at her
              own risk.
              <br />
              • Applicant agrees that if selected as a contestant to compete in
              the FOG MRS INDIA GORGEOUS Pageant, they will participate in the
              Auditions, State Level, Zone Level & National Pageant and if
              selected as the National titleholder will compete at the
              International pageant if given opportunity. Assume all
              responsibility for payment thereafter of fees will have to be
              borne by the participant herself.
              <br />
              • If selected as a National Titleholder, winner will continue to
              hold said title granted only for a year until the successor is
              crowned.
              <br />
              • Contestant further understands that if selected a winner in her
              competition, that for one year her professional affairs as said
              winner will be under the sole management of FOG MRS INDIA GORGEOUS
              and/or its licensees and that she will not give any written or
              oral endorsements without the express written permission of same.
              Contestant acknowledges that all rights for any appearances,
              endorsements, speaking engagements, acting roles, etc. resulting
              from winning or being a contestant in any regional, state or
              international competition affiliated with FOG MRS INDIA GORGEOUS
              shall belong exclusively to same.
              <br />
              • FOG MRS INDIA GORGEOUS Pageant may disclose any and all
              information provided by me to any person for any purpose.
              <br />
              • Applicant understands and agrees to authorize FOG MRS INDIA
              GORGEOUS RAMP and those authorized by the FOG MRS INDIA GORGEOUS
              Pageant to research and verify the information I have given on
              this application for this pageant including personal and
              professional background, character, work history, awards, and
              qualifications.
              <br />
              • I understand and agree that if I am selected as a Contestant,
              State, Zone Titleholder or National Titleholder, all decisions
              concerning production, promotions, photographs, advertising,
              program, media, social media, endorsements, testimonials,
              appearance, and all other aspects of the FOG MRS INDIA GORGEOUS
              Pageant as well as throughout my reign are solely at the
              discretion of the FOG MRS INDIA GORGEOUS Pageant.
              <br />
              • Titleholder agrees that FOG MRS INDIA GORGEOUS Pageant will be
              informed of and approve all appearances. Crowns and sashes remain
              the property of the FOG MRS INDIA GORGEOUS Pageant. Any Contestant
              that defaults on her contract must return all prizes, crown and
              sash to the national office in the condition in which it was
              received.
              <br />
              • During their reign, all Titleholders agree to be loyal to the
              FOG MRS INDIA GORGEOUS Pageant and give their time and energy to
              their pageant title only. That this is the Titleholders main
              pageant-related priority and that Titleholder will not promote
              verbally, in writing, or on any social media any other pageant
              title(s) or pageant system(s).
              <br />
              • Applicant understands and agrees that any misconduct, negative
              innuendoes or misrepresentation of themselves or other
              participants, through any form, be it oral, written and/or by
              actions, will be grounds for disqualification, without question.
              Incorrect information will result in disqualification, whether
              discovered prior to, during or after participation.
              <br />
              • Applicant must be willing to release, unconditionally and
              forever, any claim against FOG MRS INDIA GORGEOUS Pageant its
              parent and affiliated or related companies and their respective
              officers, sponsors, directors, partners, volunteers, employees,
              agents and assigns, which they may have by virtue of their
              participation in the national pageant, or by any use of their
              name, likeness, voice, and/or biography in connection with the
              national pageant, including use in promotional and advertising
              material.
              <br />
              • Applicant is not a party to any contract written or verbal with
              any person, firm, business, Public Relations Firm, publicist,
              charity or corporation in respect to any present title that she
              holds or may hold, nor has Contestant made any commitments for the
              future regarding any such titles.
              <br />
              • I understand in joining this event I give permission to FOG MRS
              INDIA GORGEOUS to use my name, likeliness and title to use for
              promotion. All images become personal property of the FOG MRS
              INDIA GORGEOUS
              <br />
              • Only the applicant will be allowed inside the designated venue
              of the preliminaries.
              <br />
              • The schedule of events and qualification rounds are subject to
              change at the discretion of the organisers.
              <br />
              • Under no circumstances and not for any reason shall participants
              be entitled to a refund in whole or in part of any fees already
              paid. All fees paid to the FOG MRS INDIA GORGEOUS Pageant are not
              refundable and not transferable in full or in part under any
              circumstances.
              <br />
              • All fees paid to the pageant are not refundable and not
              transferable in full or in part under any circumstance. The fees
              paid towards grooming is non-refundable in any circumstances.
              <br />
              • This includes, but not limited to entry fees, advertising fees,
              application fees, program book ads, pageant admission tickets
              sales fees, guest meal fees, extra event fees, crown and sash
              fees, special award fees, and any other fees paid to FOG MRS INDIA
              GORGEOUS Pageant by anyone including, but not limited to
              Contestants, Sponsors, Family Members and Advertisers.
              <br />
              • I understand and agree that in the event the FOG MRS INDIA
              GORGEOUS determines I am ineligible and not allowed to compete in
              the National Pageant. I will not be entitled to any refund
              whatsoever.
              <br />
              • The organisers are not responsible for non-completion /
              non-occurrence of the event. In the event of any dispute, the
              organizer decisions are final and binding on the applicant. The
              organisers have all the right to cancel, reschedule, postpone, and
              amend the show.
              <br />
              • In the event of any dispute, the organizers decisions are final
              and binding on the applicant. Deadlines are determined by the
              number of entries. The decision of the Jury/Judges are final.
              <br />
              • The courts of Bangalore have the jurisdiction over all disputes.
              <br />
            </p>
          </div>
          <div className="registerBtn index">
            <a
              href={
                "https://www.instamojo.com/@fogfashionstudio/l6d7f86c39a16427e9ae2388c70581a0c/"
              }
              rel="im-checkout"
              data-text="Pay"
              data-css-style="color:#ffffff; background:#75c26a; width:300px; border-radius:4px"
              data-description="KIDS FASHION RUNWAY EDITION 3 HAPPENING AT BANGALORE"
              data-layout="vertical"
            >
              <button
                class="button"
                href={
                  "https://www.instamojo.com/@fogfashionstudio/l6d7f86c39a16427e9ae2388c70581a0c/"
                }
              >
                <span>Register </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event4;
