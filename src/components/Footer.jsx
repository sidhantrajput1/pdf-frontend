function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-16 ">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                Elite Coding Test is designed to challenge your coding abilities
                and take you to the next level. It's more than a test – it's an
                opportunity to showcase your skills.
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Email: support@elitecoding.com</li>
                <li>Phone: +1 234 567 8901</li>
                <li>Location: 123 Coding Street, Tech City</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a href="/about" className="hover:text-blue-500">About Us</a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-blue-500">FAQ</a>
                </li>
                <li>
                  <a href="/support" className="hover:text-blue-500">Support</a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-blue-500">Privacy Policy</a>
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://twitter.com" className="hover:text-blue-500">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://linkedin.com" className="hover:text-blue-500">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
            &copy; 2024 Elite Coding Test. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  