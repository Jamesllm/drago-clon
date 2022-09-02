import "./redesFooter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const LinkIcon = (props) => {
  const href = props.href;
  const icon = props.icon;

  return (
    <a href={href} target="_blank" rel="noreferrer" className="icon blue">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

const RedesFooter = () => {
  return (
    <div className="redesFooter mt-3">
      <LinkIcon href="https://www.facebook.com/drago.pe" icon={faFacebook} />
      <LinkIcon href="https://www.instagram.com/drago.pe_/" icon={faInstagram} />
      <LinkIcon href="https://twitter.com/drago_pe_" icon={faTwitter} />
      <LinkIcon href="https://www.linkedin.com/company/drago-pe" icon={faLinkedin} />
      <LinkIcon href="https://www.youtube.com/channel/UCs-iug4X5_JGWTi5WFFXKog" icon={faYoutube} />
      <LinkIcon href="https://www.tiktok.com/@drago.pe_" icon={faTiktok} />
    </div>
  );
};

export default RedesFooter;
