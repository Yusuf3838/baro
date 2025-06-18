import React from 'react';

const Privacy = () => {
  return (
    <div className="privacy">
      {/* Hero Section */}
      <section className="privacy-hero somali-gradient sand-texture">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title star-accent">Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="privacy-card card">
              <div className="last-updated">
                <p><strong>Last Updated:</strong> June 17, 2025</p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Introduction</h2>
                <p>
                  Welcome to BARO. We are committed to protecting your privacy 
                  and ensuring the security of your personal information. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you use our 
                  English-Somali learning mobile application. By using BARO, you agree to 
                  the practices described in this policy.
                </p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Information We Collect</h2>
                
                <h3 className="subsection-title">Information You Provide</h3>
                <ul className="privacy-list">
                  <li>Text that you input for translation</li>
                  <li>Feedback and ratings you provide</li>
                  <li>Account information if you choose to create an account</li>
                </ul>

                <h3 className="subsection-title">Automatically Collected Information</h3>
                <ul className="privacy-list">
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Usage analytics (features used, frequency of use, crash reports)</li>
                  <li>Performance data to improve app functionality</li>
                  <li>Cached data (temporarily stored translations and text-to-speech outputs to enhance performance)</li>
                </ul>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">How We Use Your Information</h2>
                <ul className="privacy-list">
                  <li><strong>Translation Services:</strong> To provide accurate English-Somali translations based on your text input</li>
                  <li><strong>App Improvement:</strong> To enhance translation accuracy, user experience, and App features</li>
                  <li><strong>Technical Support:</strong> To troubleshoot issues and provide customer support</li>
                  <li><strong>Analytics:</strong> To understand usage patterns and improve our services</li>
                  <li><strong>Advertising:</strong> To deliver personalized ads through a third-party advertising service, in compliance with its guidelines</li>
                  <li><strong>Performance Optimization:</strong> To cache translations and text-to-speech outputs for faster access</li>
                </ul>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Data Storage and Security</h2>
                <div className="security-features">
                  <div className="security-item">
                    <div className="security-icon star-accent">🔒</div>
                    <div>
                      <h4>Encryption</h4>
                      <p>All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon somali-blue">🏠</div>
                    <div>
                      <h4>Local Processing</h4>
                      <p>Where possible, translations and text-to-speech are processed locally on your device to minimize data transmission.</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon star-accent">⏰</div>
                    <div>
                      <h4>Limited Retention</h4>
                      <p>Cached translation and text-to-speech data is retained only as long as necessary for performance optimization (typically 30 days), after which it is deleted unless required by law.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties for their own use. We may share information only in the following circumstances:</p>
                <ul className="privacy-list">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>With trusted service providers who assist in app operations (e.g., advertising partners) under strict confidentiality agreements</li>
                  <li><strong>Advertising:</strong> We use a third-party advertising service to display ads. This service may collect certain data (e.g., device identifiers, usage patterns) to personalize ads, as outlined in their privacy policy. We adhere to their guidelines to minimize data use.</li>
                </ul>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Your Rights and Choices</h2>
                <div className="rights-grid">
                  <div className="right-item">
                    <h4>Access</h4>
                    <p>Request access to the personal data we hold about you</p>
                  </div>
                  <div className="right-item">
                    <h4>Correction</h4>
                    <p>Request correction of inaccurate data</p>
                  </div>
                  <div className="right-item">
                    <h4>Deletion</h4>
                    <p>Request deletion of your personal data, including cached translations</p>
                  </div>
                  <div className="right-item">
                    <h4>Portability</h4>
                    <p>Request a copy of your data in a structured, machine-readable format</p>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Children's Privacy</h2>
                <p>
                  BARO is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe 
                  your child has provided us with personal information, please contact us at baroengtosom@gmail.com.
                </p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">International Data Transfers</h2>
                <p>
                  Your information may be transferred to and maintained on servers located outside of 
                  your jurisdiction where data protection laws may differ. We implement appropriate safeguards 
                  to protect your data during these transfers.
                </p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any significant changes by posting the updated 
                  policy within the App and updating the "Last Updated" date. Your continued use of BARO after 
                  such changes constitutes acceptance of the revised policy.
                </p>
              </div>

              <div className="section contact-section">
                <h2 className="section-title somali-blue">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> baroengtosom@gmail.com</p>
                  <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                </div>
                <p className="contact-note">
                  We are committed to addressing your privacy concerns promptly and transparently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .privacy-hero {
            padding: 80px 0;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: rgba(0, 112, 247, 0.9);
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
            color: rgba(0, 112, 247, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }
          
          .privacy-content {
            padding: 60px 0;
            background: linear-gradient(135deg, #f8f9fa, #ffffff);
          }
          
          .content-wrapper {
            max-width: 1000px;
            margin: 0 auto;
          }
          
          .privacy-card {
            margin-bottom: 40px;
          }
          
          .last-updated {
            text-align: center;
            margin-bottom: 40px;
            padding: 15px;
            background: rgba(65, 137, 221, 0.1);
            border-radius: 10px;
            border-left: 4px solid #4189DD;
          }
          
          .section {
            margin-bottom: 40px;
          }
          
          .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            border-bottom: 2px solid #4189DD;
            padding-bottom: 10px;
          }
          
          .subsection-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
            margin: 25px 0 15px 0;
          }
          
          .privacy-list {
            list-style: none;
            padding: 0;
          }
          
          .privacy-list li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            line-height: 1.6;
          }
          
          .privacy-list li::before {
            content: "★";
            color: #4189DD;
            position: absolute;
            left: 0;
            top: 8px;
          }
          
          .security-features {
            margin-top: 25px;
          }
          
          .security-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 25px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 10px;
            border-left: 4px solid #4189DD;
          }
          
          .security-icon {
            font-size: 1.5rem;
            flex-shrink: 0;
          }
          
          .security-item h4 {
            margin: 0 0 8px 0;
            color: #333;
            font-weight: 600;
          }
          
          .security-item p {
            margin: 0;
            color: #666;
            line-height: 1.5;
          }
          
          .rights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin-top: 25px;
          }
          
          .right-item {
            text-align: center;
            padding: 20px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 10px;
            border-top: 3px solid #4189DD;
          }
          
          .right-item h4 {
            color: #4189DD;
            margin-bottom: 10px;
            font-weight: 600;
          }
          
          .right-item p {
            color: #666;
            font-size: 0.9rem;
            margin: 0;
          }
          
          .contact-section {
            background: rgba(65, 137, 221, 0.05);
            padding: 30px;
            border-radius: 15px;
            border: 1px solid rgba(65, 137, 221, 0.2);
          }
          
          .contact-info {
            margin: 20px 0;
            padding: 15px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
          }
          
          .contact-info p {
            margin: 5px 0;
          }
          
          .contact-note {
            font-style: italic;
            color: #666;
            margin-top: 15px;
          }
          
          p {
            line-height: 1.7;
            color: #555;
            margin-bottom: 15px;
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .privacy-card {
              padding: 20px;
            }
            
            .section-title {
              font-size: 1.5rem;
            }
            
            .security-item {
              flex-direction: column;
              text-align: center;
            }
            
            .rights-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Privacy;