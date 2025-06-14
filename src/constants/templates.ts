export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/Software-Development-Proposal.png",
    initialContent: `
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #2563eb; margin-bottom: 10px;">Software Development Proposal</h1>
      <h2 style="color: #64748b; font-weight: normal;">[Project Name]</h2>
    </div>

    <table style="width: 100%; margin-bottom: 30px;">
      <tr>
        <td style="width: 50%; vertical-align: top;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">From:</h3>
          <p style="margin: 15px 0;">
            <strong>[Your Company Name]</strong><br>
            [Street Address]<br>
            [City, State ZIP]<br>
            📞 [Phone Number]<br>
            ✉️ [Email Address]<br>
            🌐 [Website]
          </p>
        </td>
        <td style="width: 50%; vertical-align: top;">
          <h3 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">To:</h3>
          <p style="margin: 15px 0;">
            <strong>[Client Company Name]</strong><br>
            [Contact Person]<br>
            [Street Address]<br>
            [City, State ZIP]<br>
            📞 [Phone Number]<br>
            ✉️ [Email Address]
          </p>
        </td>
      </tr>
    </table>

    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
      <table style="width: 100%;">
        <tr>
          <td><strong>Proposal #:</strong></td>
          <td>[Proposal Number]</td>
          <td><strong>Date:</strong></td>
          <td>[Current Date]</td>
        </tr>
        <tr>
          <td><strong>Valid Until:</strong></td>
          <td>[Expiration Date]</td>
          <td><strong>Project Duration:</strong></td>
          <td>[Estimated Duration]</td>
        </tr>
      </table>
    </div>
 

  <h2>Executive Summary</h2>
  <p>
    [Provide a brief overview of the client's business problem and how your software solution will address it. Highlight the key benefits and value of your proposed solution.]
  </p>

  <h2>Project Scope</h2>
  <p>
    [Describe the boundaries of the project. What is included and what isn't. Be specific about deliverables and functionality.]
  </p>

  <h3>Key Features</h3>
  <ul>
    <li>[Feature 1]</li>
    <li>[Feature 2]</li>
    <li>[Feature 3]</li>
    <li>[Feature 4]</li>
  </ul>

  <h2>Technical Approach</h2>
  <p>
    [Outline the technological solutions you will implement. Include programming languages, frameworks, databases, and other technologies you plan to use.]
  </p>

  <h2>Project Timeline</h2>
  <table>
    <thead>
      <tr>
        <th>Phase</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Deliverables</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Planning</td>
        <td>[Description]</td>
        <td>[Duration]</td>
        <td>[Deliverables]</td>
      </tr>
      <tr>
        <td>Design</td>
        <td>[Description]</td>
        <td>[Duration]</td>
        <td>[Deliverables]</td>
      </tr>
      <tr>
        <td>Development</td>
        <td>[Description]</td>
        <td>[Duration]</td>
        <td>[Deliverables]</td>
      </tr>
      <tr>
        <td>Testing</td>
        <td>[Description]</td>
        <td>[Duration]</td>
        <td>[Deliverables]</td>
      </tr>
      <tr>
        <td>Deployment</td>
        <td>[Description]</td>
        <td>[Duration]</td>
        <td>[Deliverables]</td>
      </tr>
    </tbody>
  </table>

  <h2>Pricing</h2>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Description</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Development</td>
        <td>[Description]</td>
        <td>[Cost]</td>
      </tr>
      <tr>
        <td>Testing</td>
        <td>[Description]</td>
        <td>[Cost]</td>
      </tr>
      <tr>
        <td>Deployment</td>
        <td>[Description]</td>
        <td>[Cost]</td>
      </tr>
      <tr>
        <td>Maintenance</td>
        <td>[Description]</td>
        <td>[Cost]</td>
      </tr>
      <tr>
        <td colspan="2"><strong>Total</strong></td>
        <td><strong>[Total Cost]</strong></td>
      </tr>
    </tbody>
  </table>

  <h2>Payment Schedule</h2>
  <ul>
    <li>[X]% upon contract signing</li>
    <li>[X]% at [milestone]</li>
    <li>[X]% at [milestone]</li>
    <li>[X]% upon project completion</li>
  </ul>

  <h2>Team</h2>
  <p>
    [Introduce key team members who will work on the project. Include their roles, expertise, and relevant experience.]
  </p>

  <h2>Terms and Conditions</h2>
  <p>
    [Outline key terms including intellectual property rights, warranties, support and maintenance, termination conditions, etc.]
  </p>

  <h2>Next Steps</h2>
  <p>
    [Provide clear instructions on how to proceed if the client accepts the proposal. Include contact information and availability for follow-up discussions.]
  </p>

  
    
      <p>Authorized by:</p>
      <p>_________________________</p>
      <p>[Your Name]</p>
      <p>[Your Position]</p>
      <p>[Your Company]</p>
    
      <p>Accepted by:</p>
      <p>_________________________</p>
      <p>[Client Name]</p>
      <p>[Client Position]</p>
      <p>[Client Company]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/Project-Proposal.png",
    initialContent: `
    <div style="text-align: right; margin-bottom: 20px;">
      <p style="color: #64748b;">[Date]</p>
    </div>

    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="color: #059669; margin-bottom: 10px;">Project Proposal</h1>
      <h2 style="color: #374151; font-weight: normal; margin-bottom: 20px;">[Project Title]</h2>
      
      <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; display: inline-block;">
        <p style="margin: 5px 0;"><strong>Submitted by:</strong> [Your Name/Organization]</p>
        <p style="margin: 5px 0;"><strong>Submitted to:</strong> [Recipient Name/Organization]</p>
      </div>
    </div>
  

  <h2>Executive Summary</h2>
  <p>
    [Provide a concise overview of your project, including its purpose, goals, and expected outcomes. Highlight the problem it addresses and the benefits it offers. Keep this section brief but compelling.]
  </p>

  <h2>Background and Need</h2>
  <p>
    [Describe the context and history of the problem or opportunity your project addresses. Explain why this project is necessary, using data or evidence where available to support your case.]
  </p>

  <h2>Project Description</h2>
  <p>
    [Provide a detailed description of your project. What exactly will be done? How will it be implemented? What methodologies will be used?]
  </p>

  <h2>Goals and Objectives</h2>
  <p>
    [List specific, measurable goals for your project. What will success look like?]
  </p>
  <ul>
    <li>[Goal 1]</li>
    <li>[Goal 2]</li>
    <li>[Goal 3]</li>
  </ul>
  
  <h3>Specific Objectives:</h3>
  <ol>
    <li>[Objective 1]</li>
    <li>[Objective 2]</li>
    <li>[Objective 3]</li>
    <li>[Objective 4]</li>
  </ol>

  <h2>Timeline and Milestones</h2>
  <table>
    <thead>
      <tr>
        <th>Phase</th>
        <th>Activities</th>
        <th>Timeframe</th>
        <th>Deliverables</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Planning</td>
        <td>[List activities]</td>
        <td>[Start - End dates]</td>
        <td>[List deliverables]</td>
      </tr>
      <tr>
        <td>Implementation</td>
        <td>[List activities]</td>
        <td>[Start - End dates]</td>
        <td>[List deliverables]</td>
      </tr>
      <tr>
        <td>Evaluation</td>
        <td>[List activities]</td>
        <td>[Start - End dates]</td>
        <td>[List deliverables]</td>
      </tr>
      <tr>
        <td>Closeout</td>
        <td>[List activities]</td>
        <td>[Start - End dates]</td>
        <td>[List deliverables]</td>
      </tr>
    </tbody>
  </table>

  <h2>Budget</h2>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Personnel</td>
        <td>[Description]</td>
        <td>[Amount]</td>
      </tr>
      <tr>
        <td>Equipment</td>
        <td>[Description]</td>
        <td>[Amount]</td>
      </tr>
      <tr>
        <td>Supplies</td>
        <td>[Description]</td>
        <td>[Amount]</td>
      </tr>
      <tr>
        <td>Travel</td>
        <td>[Description]</td>
        <td>[Amount]</td>
      </tr>
      <tr>
        <td>Other</td>
        <td>[Description]</td>
        <td>[Amount]</td>
      </tr>
      <tr>
        <td colspan="2"><strong>Total</strong></td>
        <td><strong>[Total Amount]</strong></td>
      </tr>
    </tbody>
  </table>

  <h2>Team and Resources</h2>
  <p>
    [Describe the team that will execute the project. Include key personnel, their roles, qualifications, and experience. Also, list other resources that will be utilized.]
  </p>

  <h2>Evaluation Method</h2>
  <p>
    [Explain how you will measure the success of your project. What metrics will you use? How will you collect and analyze data?]
  </p>

  <h2>Expected Outcomes and Impact</h2>
  <p>
    [Describe the anticipated results of your project. What benefits will it bring? Who will be affected? What will change as a result?]
  </p>

  <h2>Risks and Mitigation Strategies</h2>
  <table>
    <thead>
      <tr>
        <th>Risk</th>
        <th>Impact</th>
        <th>Likelihood</th>
        <th>Mitigation Strategy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[Risk 1]</td>
        <td>[High/Medium/Low]</td>
        <td>[High/Medium/Low]</td>
        <td>[Strategy]</td>
      </tr>
      <tr>
        <td>[Risk 2]</td>
        <td>[High/Medium/Low]</td>
        <td>[High/Medium/Low]</td>
        <td>[Strategy]</td>
      </tr>
      <tr>
        <td>[Risk 3]</td>
        <td>[High/Medium/Low]</td>
        <td>[High/Medium/Low]</td>
        <td>[Strategy]</td>
      </tr>
    </tbody>
  </table>

  <h2>Sustainability Plan</h2>
  <p>
    [Explain how the project or its benefits will continue after the initial implementation. How will it be sustained financially and operationally in the long term?]
  </p>

  <h2>Conclusion</h2>
  <p>
    [Summarize your proposal, emphasizing the value and importance of your project. Restate the key benefits and express confidence in its success.]
  </p>

  <h2>Appendices</h2>
  <p>
    [List any additional materials that support your proposal, such as research data, detailed budgets, team CVs, etc.]
  </p>

  
    <p>Respectfully submitted,</p>
    <p style="margin-top: 40px;">_________________________</p>
    <p>[Your Name]</p>
    <p>[Your Position]</p>
    <p>[Your Organization]</p>
    <p>[Contact Information]</p>
  `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/Business-Letter.png",
    initialContent: `
    <div style="margin-bottom: 40px;">
      <div style="text-align: left; line-height: 1.4;">
        <strong style="font-size: 16px;">[Your Name]</strong><br>
        [Your Title]<br>
        [Your Company]<br>
        [Street Address]<br>
        [City, State ZIP Code]<br>
        📞 [Phone Number]<br>
        ✉️ [Email Address]
      </div>
    </div>

    <div style="text-align: right; margin-bottom: 30px;">
      <strong>[Month Day, Year]</strong>
    </div>

    <div style="margin-bottom: 30px; line-height: 1.4;">
      <strong>[Recipient Name]</strong><br>
      [Recipient Title]<br>
      [Company Name]<br>
      [Street Address]<br>
      [City, State ZIP Code]
    </div>

    <div style="margin-bottom: 25px;">
      <strong>Dear [Recipient's Name]:</strong>
    </div>

    <div style="line-height: 1.6; margin-bottom: 20px;">
      <p style="text-indent: 0; margin-bottom: 15px;">
        [Opening paragraph: Clearly state the purpose of your letter. Be direct and professional. If you're responding to a previous communication, reference it here. Example: "I am writing to follow up on our discussion about..."]
      </p>
      
      <p style="text-indent: 0; margin-bottom: 15px;">
        [Body paragraph(s): Provide supporting details, evidence, or background information relevant to your purpose. Explain the context and provide any necessary details. Be specific and organized in your presentation.]
      </p>
      
      <p style="text-indent: 0; margin-bottom: 15px;">
        [Action paragraph: If applicable, clearly state what action you would like the recipient to take. Be specific about deadlines, expectations, or next steps. If you are making a request, be clear about what you need and when.]
      </p>
      
      <p style="text-indent: 0; margin-bottom: 15px;">
        [Closing paragraph: Conclude with a professional closing statement. Thank the recipient for their time and consideration. Express your willingness to provide additional information if needed.]
      </p>
    </div>

    <div style="margin-top: 30px;">
      <p style="margin-bottom: 40px;">Sincerely,</p>
      
      <p style="margin-bottom: 5px;">[Your Signature Space]</p>
      
      <div style="line-height: 1.4;">
        <strong>[Your Typed Name]</strong><br>
        [Your Title]
      </div>
    </div>

    <div style="margin-top: 20px;">
      <em>Enclosure: [List any documents included with the letter]</em>
    </div>
`,
  },

  {
    id: "resume",
    label: "Resume",
    imageUrl: "/Resume-Template.png",
    initialContent: `
    <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #2563eb; padding-bottom: 15px;">
      <h1 style="margin: 0; color: #1e40af; font-size: 28px; font-weight: bold;">[YOUR NAME]</h1>
      <div style="margin: 8px 0; color: #64748b; font-size: 16px;">
        [City, State] • [Phone Number] • [Email Address]
      </div>
      <div style="color: #64748b; font-size: 14px;">
        [LinkedIn URL] • [Professional Website/Portfolio]
      </div>
    </div>

    <div style="margin-bottom: 25px;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px;">PROFESSIONAL SUMMARY</h2>
      <p style="line-height: 1.6; margin: 0; color: #374151;">
        [A compelling 2-3 sentence overview of your professional background, key skills, and career objectives. Highlight your most relevant experience and what makes you unique as a candidate.]
      </p>
    </div>

    <div style="margin-bottom: 25px;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px;">PROFESSIONAL EXPERIENCE</h2>
      
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
          <h3 style="margin: 0; color: #111827; font-size: 16px;">[Job Title]</h3>
          <span style="color: #6b7280; font-weight: normal;">[Month Year] - [Month Year]</span>
        </div>
        <div style="color: #374151; font-weight: 600; margin-bottom: 8px;">[Company Name], [Location]</div>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 4px;">[Quantified achievement using action verbs. Include specific metrics, percentages, or dollar amounts when possible.]</li>
          <li style="margin-bottom: 4px;">[Key responsibility that demonstrates relevant skills and impact on the organization.]</li>
          <li style="margin-bottom: 4px;">[Project leadership or collaboration example with measurable outcomes.]</li>
          <li style="margin-bottom: 4px;">[Technical skill application or process improvement achievement.]</li>
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
          <h3 style="margin: 0; color: #111827; font-size: 16px;">[Job Title]</h3>
          <span style="color: #6b7280; font-weight: normal;">[Month Year] - [Month Year]</span>
        </div>
        <div style="color: #374151; font-weight: 600; margin-bottom: 8px;">[Company Name], [Location]</div>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 4px;">[Quantified achievement using action verbs. Include specific metrics, percentages, or dollar amounts when possible.]</li>
          <li style="margin-bottom: 4px;">[Key responsibility that demonstrates relevant skills and impact on the organization.]</li>
          <li style="margin-bottom: 4px;">[Project leadership or collaboration example with measurable outcomes.]</li>
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
          <h3 style="margin: 0; color: #111827; font-size: 16px;">[Job Title]</h3>
          <span style="color: #6b7280; font-weight: normal;">[Month Year] - [Month Year]</span>
        </div>
        <div style="color: #374151; font-weight: 600; margin-bottom: 8px;">[Company Name], [Location]</div>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 4px;">[Quantified achievement using action verbs. Include specific metrics, percentages, or dollar amounts when possible.]</li>
          <li style="margin-bottom: 4px;">[Key responsibility that demonstrates relevant skills and impact on the organization.]</li>
          <li style="margin-bottom: 4px;">[Project leadership or collaboration example with measurable outcomes.]</li>
        </ul>
      </div>
    </div>

    <div style="margin-bottom: 25px;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px;">EDUCATION</h2>
      
      <div style="margin-bottom: 15px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
          <h3 style="margin: 0; color: #111827; font-size: 16px;">[Degree Type] in [Field of Study]</h3>
          <span style="color: #6b7280; font-weight: normal;">[Graduation Year]</span>
        </div>
        <div style="color: #374151; font-weight: 600; margin-bottom: 8px;">[University Name], [Location]</div>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 3px;"><strong>GPA:</strong> [GPA] / 4.0 (if 3.5 or higher)</li>
          <li style="margin-bottom: 3px;"><strong>Relevant Coursework:</strong> [List 4-6 most relevant courses]</li>
          <li style="margin-bottom: 3px;"><strong>Honors/Awards:</strong> [Academic achievements, scholarships, honors]</li>
        </ul>
      </div>
      
      <div style="margin-bottom: 15px;">
        <h3 style="margin: 0 0 5px 0; color: #111827; font-size: 16px;">[Certification Name]</h3>
        <div style="color: #374151; font-weight: 600;">[Issuing Organization], [Year Obtained]</div>
      </div>
    </div>

    <div style="margin-bottom: 25px;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px;">TECHNICAL SKILLS</h2>
      
      <div style="margin-bottom: 12px;">
        <strong style="color: #374151;">Programming Languages:</strong>
        <span style="color: #6b7280; margin-left: 8px;">[Language 1], [Language 2], [Language 3], [Language 4]</span>
      </div>
      
      <div style="margin-bottom: 12px;">
        <strong style="color: #374151;">Frameworks & Libraries:</strong>
        <span style="color: #6b7280; margin-left: 8px;">[Framework 1], [Framework 2], [Framework 3], [Framework 4]</span>
      </div>
      
      <div style="margin-bottom: 12px;">
        <strong style="color: #374151;">Tools & Technologies:</strong>
        <span style="color: #6b7280; margin-left: 8px;">[Tool 1], [Tool 2], [Tool 3], [Tool 4]</span>
      </div>
      
      <div style="margin-bottom: 12px;">
        <strong style="color: #374151;">Databases:</strong>
        <span style="color: #6b7280; margin-left: 8px;">[Database 1], [Database 2], [Database 3]</span>
      </div>
    </div>

    <div style="margin-bottom: 25px;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px;">KEY PROJECTS</h2>
      
      <div style="margin-bottom: 15px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
          <h3 style="margin: 0; color: #111827; font-size: 16px;">[Project Name]</h3>
          <span style="color: #6b7280; font-weight: normal;">[Month Year] - [Month Year]</span>
        </div>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 4px;">[Brief description of the project, your role, and key technologies used.]</li>
          <li style="margin-bottom: 4px;">[Specific achievements, metrics, or impact of the project.]</li>
          <li style="margin-bottom: 4px;"><strong>GitHub:</strong> [Repository link] | <strong>Live Demo:</strong> [Website link]</li>
        </ul>
      </div>
      
      <div style="margin-bottom: 15px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
          <h3 style="margin: 0; color: #111827; font-size: 16px;">[Project Name]</h3>
          <span style="color: #6b7280; font-weight: normal;">[Month Year] - [Month Year]</span>
        </div>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 4px;">[Brief description of the project, your role, and key technologies used.]</li>
          <li style="margin-bottom: 4px;">[Specific achievements, metrics, or impact of the project.]</li>
          <li style="margin-bottom: 4px;"><strong>GitHub:</strong> [Repository link] | <strong>Live Demo:</strong> [Website link]</li>
        </ul>
      </div>
    </div>

    <div style="margin-bottom: 25px;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-bottom: 15px;">ADDITIONAL INFORMATION</h2>
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li style="margin-bottom: 6px;"><strong>Languages:</strong> [Language 1 (Proficiency)], [Language 2 (Proficiency)]</li>
        <li style="margin-bottom: 6px;"><strong>Professional Memberships:</strong> [Organization 1], [Organization 2]</li>
        <li style="margin-bottom: 6px;"><strong>Volunteer Work:</strong> [Organization/Role] - [Brief description of contributions]</li>
        <li style="margin-bottom: 6px;"><strong>Publications:</strong> [Title of paper/article] - [Publication venue, year]</li>
      </ul>
    </div>
  `,
  },
  {
    id: "technical-spec",
    label: "Technical Specification",
    imageUrl: "/Technical-Specification.png",
    initialContent: `
    <h1>Technical Specification</h1>
    <h2>[Project/Feature Name]</h2>
    
    <h3>Document Information</h3>
    <p><strong>Version:</strong> 1.0</p>
    <p><strong>Date:</strong> [Date]</p>
    <p><strong>Author:</strong> [Author Name]</p>
    <p><strong>Status:</strong> [Draft/Review/Approved]</p>
    
    <h3>Overview</h3>
    <p>[Provide a high-level overview of the project/feature, its purpose, and its place in the larger system.]</p>
    
    <h3>Requirements</h3>
    
    <h4>Functional Requirements</h4>
    <ul>
      <li><strong>FR-001:</strong> [Requirement description]</li>
      <li><strong>FR-002:</strong> [Requirement description]</li>
      <li><strong>FR-003:</strong> [Requirement description]</li>
    </ul>
    
    <h4>Non-Functional Requirements</h4>
    <ul>
      <li><strong>Performance:</strong> [Performance requirements]</li>
      <li><strong>Security:</strong> [Security requirements]</li>
      <li><strong>Scalability:</strong> [Scalability requirements]</li>
      <li><strong>Reliability:</strong> [Reliability requirements]</li>
    </ul>
    
    <h3>System Architecture</h3>
    <p>[Describe the overall system architecture, including major components and their interactions.]</p>
    
    <h4>Components</h4>
    <ul>
      <li><strong>[Component 1]:</strong> [Description and responsibilities]</li>
      <li><strong>[Component 2]:</strong> [Description and responsibilities]</li>
      <li><strong>[Component 3]:</strong> [Description and responsibilities]</li>
    </ul>
    
    <h3>API Specification</h3>
    
    <h4>Endpoints</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Endpoint</th>
          <th>Description</th>
          <th>Parameters</th>
          <th>Response</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GET</td>
          <td>/api/[endpoint]</td>
          <td>[Description]</td>
          <td>[Parameters]</td>
          <td>[Response format]</td>
        </tr>
        <tr>
          <td>POST</td>
          <td>/api/[endpoint]</td>
          <td>[Description]</td>
          <td>[Parameters]</td>
          <td>[Response format]</td>
        </tr>
      </tbody>
    </table>
    
    <h3>Database Schema</h3>
    <p>[Describe the database schema, including tables, relationships, and key constraints.]</p>
    
    <h3>Technology Stack</h3>
    <ul>
      <li><strong>Frontend:</strong> [Technologies]</li>
      <li><strong>Backend:</strong> [Technologies]</li>
      <li><strong>Database:</strong> [Database system]</li>
      <li><strong>Infrastructure:</strong> [Deployment/hosting details]</li>
    </ul>
    
    <h3>Security Considerations</h3>
    <ul>
      <li>[Security consideration 1]</li>
      <li>[Security consideration 2]</li>
      <li>[Security consideration 3]</li>
    </ul>
    
    <h3>Testing Strategy</h3>
    <ul>
      <li><strong>Unit Testing:</strong> [Approach and tools]</li>
      <li><strong>Integration Testing:</strong> [Approach and tools]</li>
      <li><strong>Performance Testing:</strong> [Approach and tools]</li>
    </ul>
    
    <h3>Deployment Plan</h3>
    <ol>
      <li>[Deployment step 1]</li>
      <li>[Deployment step 2]</li>
      <li>[Deployment step 3]</li>
    </ol>
    
    <h3>Risks and Mitigation</h3>
    <table>
      <thead>
        <tr>
          <th>Risk</th>
          <th>Impact</th>
          <th>Probability</th>
          <th>Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Risk 1]</td>
          <td>[High/Medium/Low]</td>
          <td>[High/Medium/Low]</td>
          <td>[Mitigation strategy]</td>
        </tr>
      </tbody>
    </table>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/Cover-Letter.png",
    initialContent: `
    <div style="margin-bottom: 40px;">
      <div style="text-align: left; line-height: 1.4;">
        <strong style="font-size: 16px;">[Your Full Name]</strong><br>
        [Your Address]<br>
        [City, State ZIP Code]<br>
        📞 [Phone Number]<br>
        ✉️ [Email Address]<br>
        🔗 [LinkedIn Profile URL]
      </div>
    </div>

    <div style="text-align: right; margin-bottom: 30px;">
      <strong>[Month Day, Year]</strong>
    </div>

    <div style="margin-bottom: 30px; line-height: 1.4;">
      <strong>[Hiring Manager's Name]</strong><br>
      [Title]<br>
      [Company Name]<br>
      [Company Address]<br>
      [City, State ZIP Code]
    </div>

    <div style="margin-bottom: 25px;">
      <strong>Dear [Hiring Manager's Name / Hiring Team]:</strong>
    </div>

    <div style="line-height: 1.6;">
      <p style="margin-bottom: 20px;">
        I am writing to express my strong interest in the <strong>[Position Title]</strong> position at <strong>[Company Name]</strong>. [Where you found the job posting - company website, LinkedIn, referral, etc.]. With my [number] years of experience in [relevant field/industry] and proven track record in [key skill/achievement], I am confident that I would be a valuable addition to your team.
      </p>
      
      <p style="margin-bottom: 20px;">
        In my current role as <strong>[Current Position]</strong> at <strong>[Current Company]</strong>, I have successfully [specific achievement or responsibility that relates to the target job]. For example, [specific quantified achievement - increased sales by X%, managed a team of Y people, implemented Z system that resulted in specific improvement]. This experience has equipped me with [relevant skills] that directly align with the requirements for this position.
      </p>
      
      <p style="margin-bottom: 20px;">
        What particularly excites me about this opportunity at [Company Name] is [specific reason related to the company's mission, values, recent news, or projects]. I am impressed by [company's recent achievement, product, or initiative] and would welcome the opportunity to contribute to [specific goal or project mentioned in job posting]. My expertise in [relevant skill/technology/area] and passion for [relevant industry/field] make me well-suited to help [Company Name] achieve [specific company goal or continue specific success].
      </p>
      
      <p style="margin-bottom: 20px;">
        I would be delighted to discuss how my background in [relevant experience] and [specific skills] can contribute to your team's continued success. I have attached my resume for your review and would welcome the opportunity to speak with you further about this position. Thank you for your time and consideration.
      </p>
    </div>

    <div style="margin-top: 30px;">
      <p style="margin-bottom: 40px;">
        Sincerely,
      </p>
      
      <p style="margin-bottom: 5px;">[Your Signature Space]</p>
      
      <div>
        <strong>[Your Typed Full Name]</strong>
      </div>
    </div>

    <div style="margin-top: 20px; color: #6b7280; font-style: italic;">
      Enclosure: Resume
    </div>
`,
  },
  {
    id: "meeting-minutes",
    label: "Meeting Minutes",
    imageUrl: "/minutes-brown.webp",
    initialContent: `
    <h1>Meeting Minutes</h1>
    
    <h3>Meeting Details</h3>
    <p><strong>Date:</strong> [Date]</p>
    <p><strong>Time:</strong> [Start Time] - [End Time]</p>
    <p><strong>Location:</strong> [Location/Video Conference Link]</p>
    <p><strong>Meeting Type:</strong> [Weekly Team Meeting/Project Review/etc.]</p>
    
    <h3>Attendees</h3>
    <ul>
      <li>[Name] - [Role]</li>
      <li>[Name] - [Role]</li>
      <li>[Name] - [Role]</li>
      <li>[Name] - [Role]</li>
    </ul>
    
    <h3>Agenda Items</h3>
    <ol>
      <li>[Agenda Item 1]</li>
      <li>[Agenda Item 2]</li>
      <li>[Agenda Item 3]</li>
      <li>[Agenda Item 4]</li>
    </ol>
    
    <h3>Discussion Points</h3>
    
    <h4>[Topic 1]</h4>
    <p>[Discussion summary, key points raised, decisions made]</p>
    
    <h4>[Topic 2]</h4>
    <p>[Discussion summary, key points raised, decisions made]</p>
    
    <h4>[Topic 3]</h4>
    <p>[Discussion summary, key points raised, decisions made]</p>
    
    <h3>Action Items</h3>
    <table>
      <thead>
        <tr>
          <th>Action Item</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Action Item 1]</td>
          <td>[Name]</td>
          <td>[Date]</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>[Action Item 2]</td>
          <td>[Name]</td>
          <td>[Date]</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>[Action Item 3]</td>
          <td>[Name]</td>
          <td>[Date]</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>
    
    <h3>Decisions Made</h3>
    <ul>
      <li>[Decision 1]</li>
      <li>[Decision 2]</li>
      <li>[Decision 3]</li>
    </ul>
    
    <h3>Next Meeting</h3>
    <p><strong>Date:</strong> [Date]</p>
    <p><strong>Time:</strong> [Time]</p>
    <p><strong>Location:</strong> [Location]</p>
    <p><strong>Agenda Preview:</strong> [Brief overview of next meeting topics]</p>
    
    <hr>
    <p><strong>Minutes prepared by:</strong> [Name]</p>
    <p><strong>Date prepared:</strong> [Date]</p>
    `,
  },

  {
    id: "research-paper",
    label: "Research Paper",
    imageUrl: "/Research-Paper.png",
    initialContent: `
    <h1>[Paper Title]</h1>
    
    <p><strong>Author(s):</strong> [Author Name(s)]</p>
    <p><strong>Affiliation:</strong> [Institution/Organization]</p>
    <p><strong>Date:</strong> [Date]</p>
    
    <h2>Abstract</h2>
    <p>[A concise summary of your research, including the problem, methodology, key findings, and conclusions. Keep this to 150-250 words.]</p>
    
    <h2>Keywords</h2>
    <p>[List 3-6 relevant keywords separated by commas]</p>
    
    <h2>1. Introduction</h2>
    <p>[Introduce the research problem, provide background context, state your research question or hypothesis, and outline the structure of your paper.]</p>
    
    <h3>1.1 Problem Statement</h3>
    <p>[Clearly define the problem your research addresses.]</p>
    
    <h3>1.2 Research Objectives</h3>
    <ul>
      <li>[Objective 1]</li>
      <li>[Objective 2]</li>
      <li>[Objective 3]</li>
    </ul>
    
    <h2>2. Literature Review</h2>
    <p>[Review relevant previous work, identify gaps in current knowledge, and position your research within the existing body of knowledge.]</p>
    
    <h3>2.1 [Subtopic 1]</h3>
    <p>[Discussion of relevant literature]</p>
    
    <h3>2.2 [Subtopic 2]</h3>
    <p>[Discussion of relevant literature]</p>
    
    <h2>3. Methodology</h2>
    <p>[Describe your research design, data collection methods, analysis techniques, and any tools or instruments used.]</p>
    
    <h3>3.1 Research Design</h3>
    <p>[Explain your overall research approach]</p>
    
    <h3>3.2 Data Collection</h3>
    <p>[Describe how you collected your data]</p>
    
    <h3>3.3 Analysis Methods</h3>
    <p>[Explain how you analyzed your data]</p>
    
    <h2>4. Results</h2>
    <p>[Present your findings objectively, using tables, figures, and charts where appropriate. Do not interpret the results here.]</p>
    
    <h3>4.1 [Result Category 1]</h3>
    <p>[Present specific findings]</p>
    
    <h3>4.2 [Result Category 2]</h3>
    <p>[Present specific findings]</p>
    
    <h2>5. Discussion</h2>
    <p>[Interpret your results, discuss their implications, compare with previous studies, acknowledge limitations, and suggest future research directions.]</p>
    
    <h3>5.1 Interpretation of Results</h3>
    <p>[Analyze what your results mean]</p>
    
    <h3>5.2 Implications</h3>
    <p>[Discuss the broader significance of your findings]</p>
    
    <h3>5.3 Limitations</h3>
    <p>[Acknowledge any limitations in your study]</p>
    
    <h2>6. Conclusion</h2>
    <p>[Summarize your key findings, restate their significance, and provide final thoughts on future research directions.]</p>
    
    <h2>References</h2>
    <ol>
      <li>[Reference 1 in appropriate citation format]</li>
      <li>[Reference 2 in appropriate citation format]</li>
      <li>[Reference 3 in appropriate citation format]</li>
    </ol>
    
    <h2>Appendices</h2>
    <h3>Appendix A: [Title]</h3>
    <p>[Additional supporting material]</p>
    `,
  },
  {
    id: "invoice",
    label: "Invoice",
    imageUrl: "/Invoice-Template.png",
    initialContent: `
    <h1>INVOICE</h1>
    
    <table style="width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="width: 60%;">
          <h3>From:</h3>
          <p>
            <strong>[Your Company Name]</strong><br>
            [Street Address]<br>
            [City, State ZIP]<br>
            [Phone Number]<br>
            [Email Address]<br>
            [Website]
          </p>
        </td>
        <td style="width: 40%; text-align: right;">
          <p><strong>Invoice #:</strong> [Invoice Number]</p>
          <p><strong>Date:</strong> [Date]</p>
          <p><strong>Due Date:</strong> [Due Date]</p>
        </td>
      </tr>
    </table>
    
    <h3>Bill To:</h3>
    <p>
      <strong>[Client Name]</strong><br>
      [Company Name]<br>
      [Street Address]<br>
      [City, State ZIP]<br>
      [Email Address]
    </p>
    
    <h3>Services/Products</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Description</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Quantity</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: right;">Rate</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">[Service/Product Description 1]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">[Quantity]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">$[Rate]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">$[Amount]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">[Service/Product Description 2]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">[Quantity]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">$[Rate]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">$[Amount]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">[Service/Product Description 3]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">[Quantity]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">$[Rate]</td>
          <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">$[Amount]</td>
        </tr>
      </tbody>
    </table>
    
    <table style="width: 100%; margin-top: 20px;">
      <tr>
        <td style="width: 70%;"></td>
        <td style="width: 30%;">
          <table style="width: 100%;">
            <tr>
              <td><strong>Subtotal:</strong></td>
              <td style="text-align: right;">$[Subtotal]</td>
            </tr>
            <tr>
              <td><strong>Tax ([Tax Rate]%):</strong></td>
              <td style="text-align: right;">$[Tax Amount]</td>
            </tr>
            <tr style="border-top: 2px solid #333;">
              <td><strong>Total:</strong></td>
              <td style="text-align: right;"><strong>$[Total Amount]</strong></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
    <h3>Payment Information</h3>
    <p><strong>Payment Method:</strong> [Bank Transfer/Check/Credit Card/PayPal/etc.]</p>
    <p><strong>Payment Terms:</strong> [Net 30/Due upon receipt/etc.]</p>
    
    <h4>Bank Details (if applicable):</h4>
    <p>
      <strong>Account Name:</strong> [Account Name]<br>
      <strong>Account Number:</strong> [Account Number]<br>
      <strong>Routing Number:</strong> [Routing Number]<br>
      <strong>Bank Name:</strong> [Bank Name]
    </p>
    
    <h3>Notes</h3>
    <p>[Any additional notes, terms, or conditions]</p>
    
    <hr>
    <p style="text-align: center; font-size: 14px; color: #666;">
      Thank you for your business!<br>
      Please remit payment by the due date to avoid late fees.
    </p>
    `,
  },
  {
    id: "marketing-plan",
    label: "Marketing Plan",
    imageUrl: "/Marketing-Plan.png",
    initialContent: `
    <h1>Marketing Plan</h1>
    <h2>[Product/Service/Campaign Name]</h2>
    
    <h3>Executive Summary</h3>
    <p>[Provide a brief overview of your marketing plan, including key objectives, target audience, and expected outcomes.]</p>
    
    <h3>Situation Analysis</h3>
    
    <h4>Market Overview</h4>
    <p>[Describe the current market conditions, size, and growth trends.]</p>
    
    <h4>Competitive Analysis</h4>
    <table>
      <thead>
        <tr>
          <th>Competitor</th>
          <th>Strengths</th>
          <th>Weaknesses</th>
          <th>Market Share</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[Competitor 1]</td>
          <td>[Strengths]</td>
          <td>[Weaknesses]</td>
          <td>[Market Share]</td>
        </tr>
        <tr>
          <td>[Competitor 2]</td>
          <td>[Strengths]</td>
          <td>[Weaknesses]</td>
          <td>[Market Share]</td>
        </tr>
      </tbody>
    </table>
    
    <h4>SWOT Analysis</h4>
    <table>
      <thead>
        <tr>
          <th>Strengths</th>
          <th>Weaknesses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>[Strength 1]</li>
              <li>[Strength 2]</li>
              <li>[Strength 3]</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>[Weakness 1]</li>
              <li>[Weakness 2]</li>
              <li>[Weakness 3]</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    
    <table>
      <thead>
        <tr>
          <th>Opportunities</th>
          <th>Threats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li>[Opportunity 1]</li>
              <li>[Opportunity 2]</li>
              <li>[Opportunity 3]</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>[Threat 1]</li>
              <li>[Threat 2]</li>
              <li>[Threat 3]</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    
    <h3>Target Audience</h3>
    
    <h4>Primary Target Segment</h4>
    <ul>
      <li><strong>Demographics:</strong> [Age, gender, income, location, etc.]</li>
      <li><strong>Psychographics:</strong> [Interests, values, lifestyle, etc.]</li>
      <li><strong>Behavioral:</strong> [Buying patterns, usage, brand loyalty, etc.]</li>
      <li><strong>Pain Points:</strong> [What problems do they face?]</li>
    </ul>
    
    <h4>Secondary Target Segment</h4>
    <ul>
      <li><strong>Demographics:</strong> [Age, gender, income, location, etc.]</li>
      <li><strong>Psychographics:</strong> [Interests, values, lifestyle, etc.]</li>
      <li><strong>Behavioral:</strong> [Buying patterns, usage, brand loyalty, etc.]</li>
    </ul>
    
    <h3>Marketing Objectives</h3>
    <ul>
      <li><strong>Awareness:</strong> [Specific, measurable awareness goals]</li>
      <li><strong>Sales:</strong> [Revenue or unit sales targets]</li>
      <li><strong>Market Share:</strong> [Market share objectives]</li>
      <li><strong>Customer Acquisition:</strong> [New customer targets]</li>
      <li><strong>Customer Retention:</strong> [Retention rate goals]</li>
    </ul>
    
    <h3>Marketing Mix (4Ps)</h3>
    
    <h4>Product</h4>
    <p>[Describe your product/service, its features, benefits, and unique value proposition.]</p>
    
    <h4>Price</h4>
    <p>[Explain your pricing strategy, including price points, discounts, and payment terms.]</p>
    
    <h4>Place (Distribution)</h4>
    <p>[Describe how and where customers can purchase your product/service.]</p>
    
    <h4>Promotion</h4>
    <p>[Outline your promotional strategy and communication channels.]</p>
    
    <h3>Marketing Strategies and Tactics</h3>
    
    <h4>Digital Marketing</h4>
    <ul>
      <li><strong>Website:</strong> [Website strategy and optimization]</li>
      <li><strong>SEO:</strong> [Search engine optimization tactics]</li>
      <li><strong>Social Media:</strong> [Platform-specific strategies]</li>
      <li><strong>Email Marketing:</strong> [Email campaign strategies]</li>
      <li><strong>Content Marketing:</strong> [Content creation and distribution]</li>
      <li><strong>PPC Advertising:</strong> [Paid advertising campaigns]</li>
    </ul>
    
    <h4>Traditional Marketing</h4>
    <ul>
      <li><strong>Print Advertising:</strong> [Newspaper, magazine ads]</li>
      <li><strong>Radio/TV:</strong> [Broadcast advertising]</li>
      <li><strong>Direct Mail:</strong> [Mail campaigns]</li>
      <li><strong>Events:</strong> [Trade shows, conferences, sponsorships]</li>
    </ul>
    
    <h3>Budget Allocation</h3>
    <table>
      <thead>
        <tr>
          <th>Marketing Channel</th>
          <th>Budget Allocation</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Digital Advertising</td>
          <td>$[Amount]</td>
          <td>[%]</td>
        </tr>
        <tr>
          <td>Social Media Marketing</td>
          <td>$[Amount]</td>
          <td>[%]</td>
        </tr>
        <tr>
          <td>Content Creation</td>
          <td>$[Amount]</td>
          <td>[%]</td>
        </tr>
        <tr>
          <td>Events & Sponsorships</td>
          <td>$[Amount]</td>
          <td>[%]</td>
        </tr>
        <tr>
          <td>Traditional Advertising</td>
          <td>$[Amount]</td>
          <td>[%]</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>$[Total Amount]</strong></td>
          <td><strong>100%</strong></td>
        </tr>
      </tbody>
    </table>
    
    <h3>Timeline</h3>
    <table>
      <thead>
        <tr>
          <th>Quarter</th>
          <th>Activities</th>
          <th>Goals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Q1</td>
          <td>[List Q1 activities]</td>
          <td>[Q1 goals]</td>
        </tr>
        <tr>
          <td>Q2</td>
          <td>[List Q2 activities]</td>
          <td>[Q2 goals]</td>
        </tr>
        <tr>
          <td>Q3</td>
          <td>[List Q3 activities]</td>
          <td>[Q3 goals]</td>
        </tr>
        <tr>
          <td>Q4</td>
          <td>[List Q4 activities]</td>
          <td>[Q4 goals]</td>
        </tr>
      </tbody>
    </table>
    
    <h3>Key Performance Indicators (KPIs)</h3>
    <ul>
      <li><strong>Website Traffic:</strong> [Target number of visits]</li>
      <li><strong>Lead Generation:</strong> [Number of qualified leads]</li>
      <li><strong>Conversion Rate:</strong> [Percentage target]</li>
      <li><strong>Customer Acquisition Cost:</strong> [Cost per customer]</li>
      <li><strong>Return on Investment:</strong> [ROI target]</li>
      <li><strong>Brand Awareness:</strong> [Awareness metrics]</li>
    </ul>
    
    <h3>Risk Assessment</h3>
    <ul>
      <li><strong>Market Risk:</strong> [Potential market changes and mitigation strategies]</li>
      <li><strong>Competitive Risk:</strong> [Competitive threats and responses]</li>
      <li><strong>Budget Risk:</strong> [Budget constraints and alternatives]</li>
      <li><strong>Execution Risk:</strong> [Implementation challenges and solutions]</li>
    </ul>
    
    <h3>Conclusion</h3>
    <p>[Summarize your marketing plan and express confidence in achieving your objectives.]</p>
    `,
  },
];
