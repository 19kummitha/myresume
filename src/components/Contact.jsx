import { FaMobileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <ul className="space-y-4">
        <li className="flex items-center text-lg">
          <FaMobileAlt className="mr-3 text-blue-500" />
          <span>+123 456 7890</span>
        </li>
        <li className="flex items-center text-lg">
          <FaEnvelope className="mr-3 text-red-500" />
          <a href="mailto:your-email@example.com" className="hover:underline">
            your-email@example.com
          </a>
        </li>
        <li className="flex items-center text-lg">
          <FaLinkedin className="mr-3 text-blue-700" />
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
