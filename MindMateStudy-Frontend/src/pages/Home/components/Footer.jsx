// import {
//   resourcesLinks,
//   platformLinks,
//   communityLinks,
// } from "../../../constants";
const Footer = () => {
  return (
    <footer className="mt-20 pb-10">
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-300">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md text-gray-300 font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-300">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-300">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="pt-4 text-center border-t flex items-center justify-center"> &copy; 2025 MindMate</div>
    </footer>
  );
};

export default Footer;
