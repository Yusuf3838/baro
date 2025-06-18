import React from 'react';

const Terms = () => {
  return (
    <div className="terms">
      {/* Hero Section */}
      <section className="terms-hero somali-gradient sand-texture">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title star-accent">Terms of Service</h1>
            <p className="hero-subtitle">
              Please read these terms carefully before using BARO
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="terms-card card">
              <div className="last-updated">
                <p><strong>Last Updated:</strong> June 17, 2025</p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Agreement to Terms</h2>
                <p>
                  By downloading, installing, or using the BARO mobile application ("Service"), you agree 
                  to be bound by these Terms of Service ("Terms"). If you disagree with any part of these 
                  terms, then you may not access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Description of Service</h2>
                <p>
                  BARO is an English-Somali translation application that provides:
                </p>
                <ul className="terms-list">
                  <li>Text translation between English and Somali languages</li>
                  <li>Text-to-speech capabilities</li>
                  <li>Cultural context and pronunciation guidance</li>
                  <li>Language learning resources</li>
                </ul>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">User Accounts and Registration</h2>
                <div className="subsection">
                  <h3 className="subsection-title">Account Creation</h3>
                  <p>
                    To access the full range of features in BARO, including advanced translation tools, 
                    text-to-speech capabilities, and personalized language learning resources, you must 
                    create an account. You can create an account directly within the app by navigating to the 
                    'Sign Up' option on the login screen.
                  </p>
                </div>
                <div className="subsection">
                  <h3 className="subsection-title">Account Security</h3>
                  <p>
                    You are responsible for safeguarding your account credentials and for all activities 
                    that occur under your account. You must immediately notify us of any unauthorized use 
                    by contacting <a href="mailto:baroengtosom@gmail.com" className="somali-blue">baroengtosom@gmail.com</a>.
                  </p>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Acceptable Use</h2>
                <div className="acceptable-use">
                  <div className="use-section positive">
                    <h3 className="use-title positive">✓ You May:</h3>
                    <ul className="use-list positive">
                      <li>Use BARO for personal, educational, or professional translation needs</li>
                      <li>Share translations in accordance with these terms</li>
                      <li>Provide feedback to help improve our services</li>
                    </ul>
                  </div>
                  <div className="use-section negative">
                    <h3 className="use-title negative">✗ You May Not:</h3>
                    <ul className="use-list negative">
                      <li>Use the Service for any unlawful purpose or illegal activity</li>
                      <li>Transmit harmful, offensive, or inappropriate content</li>
                      <li>Attempt to reverse engineer, hack, or compromise the Service</li>
                      <li>Use the Service to infringe on intellectual property rights</li>
                      <li>Upload malicious code or attempt to disrupt the Service</li>
                      <li>Use automated systems to access the Service without permission</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Translation Accuracy and Limitations</h2>
                <div className="accuracy-notice">
                  <div className="notice-icon">⚠️</div>
                  <div className="notice-content">
                    <h4>Important Notice</h4>
                    <p>
                      While BARO strives for accuracy, translations are provided "as is" and may not be 
                      perfect. We recommend professional human translation for critical documents, legal 
                      matters, or medical information.
                    </p>
                  </div>
                </div>
                <ul className="terms-list">
                  <li>BARO uses AI and machine learning for translations</li>
                  <li>Cultural context and idioms may not always translate directly</li>
                  <li>We continuously improve accuracy through user feedback and updates</li>
                  <li>Users should verify important translations independently</li>
                </ul>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Intellectual Property Rights</h2>
                <div className="ip-section">
                  <h3 className="subsection-title">Our Rights</h3>
                  <p>
                    The Service and its original content, features, and functionality are owned by BARO 
                    and are protected by international copyright, trademark, patent, trade secret, and 
                    other intellectual property laws.
                  </p>
                </div>
                <div className="ip-section">
                  <h3 className="subsection-title">Your Content</h3>
                  <p>
                    You retain ownership of any content you input for translation. By using our Service, 
                    you grant us a limited license to process your content solely for providing translation services.
                  </p>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Privacy and Data Protection</h2>
                <p>
                  Your privacy is important to us. Please review our <a href="/privacy" className="somali-blue">Privacy Policy</a>, 
                  which also governs your use of the Service, to understand our practices regarding your personal information.
                </p>
                <div className="privacy-highlights">
                  <div className="privacy-item">
                    <span className="privacy-icon star-accent">🔒</span>
                    <span>Your translations are processed securely</span>
                  </div>
                  <div className="privacy-item">
                    <span className="privacy-icon somali-blue">🏠</span>
                    <span>Local processing when possible</span>
                  </div>
                  <div className="privacy-item">
                    <span className="privacy-icon star-accent">🗑️</span>
                    <span>Data minimization and retention limits</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Service Availability and Modifications</h2>
                <ul className="terms-list">
                  <li>We strive to maintain Service availability but cannot guarantee uninterrupted access</li>
                  <li>We may modify, suspend, or discontinue the Service with reasonable notice</li>
                  <li>Updates and improvements may be released periodically</li>
                  <li>Some features may require internet connectivity</li>
                </ul>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, BARO shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, or any loss of 
                  profits or revenues, whether incurred directly or indirectly, resulting from:
                </p>
                <ul className="terms-list">
                  <li>Your use or inability to use the Service</li>
                  <li>Translation inaccuracies or errors</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Any other matter relating to the Service</li>
                </ul>
                <div className="liability-note">
                  <p>
                    <strong>Important:</strong> This includes any damages resulting from translation 
                    inaccuracies, though we make every effort to provide accurate translations.
                  </p>
                </div>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Service immediately, without 
                  prior notice, for conduct that we believe violates these Terms or is harmful to other 
                  users, us, or third parties, including but not limited to:
                </p>
                <ul className="terms-list">
                  <li>Violation of acceptable use policies</li>
                  <li>Engaging in illegal activities</li>
                  <li>Attempting to compromise the Service’s security</li>
                </ul>
                <p>
                  You may discontinue use of the Service at any time by deleting the application from your device.
                </p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the jurisdiction, 
                  without regard to its conflict of law provisions. Any disputes arising from these Terms 
                  or your use of the Service will be resolved in the courts of the Jurisdiction.
                </p>
              </div>

              <div className="section">
                <h2 className="section-title somali-blue">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any 
                  material changes through the app, email, or other reasonable means. Your continued use 
                  of the Service after changes become effective constitutes acceptance of the revised Terms.
                </p>
              </div>

              <div className="section contact-section">
                <h2 className="section-title somali-blue">Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> baroengtosom@gmail.com</p>
                  <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
                </div>
                <p className="contact-note">
                  We will respond to your inquiries as promptly as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .terms-hero {
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
          
          .terms-content {
            padding: 60px 0;
            background: linear-gradient(135deg, #f8f9fa, #fff);
          }
          
          .content-wrapper {
            max-width: 1000px;
            margin: 0 auto;
          }
          
          .terms-card {
            margin-bottom: 30px;
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
            font-weight: bold;
            margin-bottom: 20px;
            border-bottom: 2px solid #4189DD;
            padding-bottom: 10px;
          }
          
          .subsection {
            margin-bottom: 20px;
          }
          
          .subsection-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
            margin: 15px 0 10px;
          }
          
          .terms-list {
            padding: 0;
            list-style: none;
          }
          
          .terms-list li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            line-height: 1.6;
          }
          
          .terms-list li::before {
            content: "★";
            color: #4189DD;
            position: absolute;
            left: 0;
            top: 10px;
          }
          
          .acceptable-use {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 25px;
          }
          
          .use-section {
            padding: 20px;
            border-radius: 10px;
            border: 2px solid;
          }
          
          .use-section.positive {
            border-color: #28a745;
            background: rgba(40, 167, 69, 0.05);
          }
          
          .use-section.negative {
            border-color: #dc3545;
            background: rgba(220, 53, 69, 0.05);
          }
          
          .use-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .use-title.positive {
            color: #28a745;
          }
          
          .use-title.negative {
            color: #dc3545;
          }
          
          .use-list {
            list-style: none;
            padding: 0;
          }
          
          .use-list li {
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            line-height: 1.5;
          }
          
          .use-list.positive li::before {
            content: "✓";
            color: #28a745;
            position: absolute;
            left: 0;
            font-weight: bold;
          }
          
          .use-list.negative li::before {
            content: "✗";
            color: #dc3545;
            position: absolute;
            left: 0;
            font-weight: bold;
          }
          
          .accuracy-notice {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 25px 0;
            padding: 20px;
            background: rgba(255, 193, 7, 0.1);
            border-radius: 10px;
            border-left: 4px solid #ffc107;
          }
          
          .notice-icon {
            font-size: 1.5rem;
            flex-shrink: 0;
          }
          
          .notice-content h4 {
            margin: 0 0 8px;
            color: #333;
            font-weight: 600;
          }
          
          .notice-content p {
            margin: 0;
            color: #666;
            line-height: 1.5;
          }
          
          .ip-section {
            margin-bottom: 25px;
          }
          
          .privacy-highlights {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .privacy-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 5px;
          }
          
          .privacy-icon {
            font-size: 1.2rem;
          }
          
          .liability-note {
            margin-top: 20px;
            padding: 15px;
            background: rgba(65, 137, 221, 0.1);
            border-radius: 10px;
            border-left: 4px solid #4189DD;
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
            
            .acceptable-use {
              grid-template-columns: 1fr;
            }
            
            .use-section {
              margin-bottom: 20px;
            }
            
            .terms-card {
              padding: 20px;
            }
            
            .section-title {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Terms;