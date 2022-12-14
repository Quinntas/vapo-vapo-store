
import Copyright from "./copyright";
import { footer } from "./data";
const { payment } = footer;

const Footer: React.FC = () => (
  <footer className="border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2">
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
