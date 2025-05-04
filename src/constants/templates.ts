export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
  <h1>Software Development Proposal</h1>
      <h3>From:</h3>
      <p>
        [Your Company Name]<br>
        [Street Address]<br>
        [City, State ZIP]<br>
        [Phone Number]<br>
        [Email]
      </p>
    
    
      <h3>To:</h3>
      <p>
        [Client Company Name]<br>
        [Street Address]<br>
        [City, State ZIP]<br>
        [Phone Number]<br>
        [Email]
      </p>
    

  
    <p><strong>Proposal #:</strong> [Proposal Number]</p>
    <p><strong>Date:</strong> [Current Date]</p>
    <p><strong>Valid Until:</strong> [Expiration Date]</p>
 

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
    id: "proeject-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
  
    <p>[Date]</p>
  

  
    <h1>Project Proposal</h1>
    <h2>[Project Title]</h2>
    <p>Submitted by: [Your Name/Organization]</p>
    <p>Submitted to: [Recipient Name/Organization]</p>
  

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
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    [Your Name]<br>
    [Your Title]<br>
    [Your Company]<br>
    [Street Address]<br>
    [City, State ZIP]<br>
    [Phone Number]<br>
    [Email Address]
  

  
    [Month Day, Year]
  

  
    [Recipient Name]<br>
    [Recipient Title]<br>
    [Company Name]<br>
    [Street Address]<br>
    [City, State ZIP]
  

  
    Dear [Recipient's Name]:
  

  
    <p>
      [First paragraph: Clearly state the purpose of your letter. Be direct and concise. If you're responding to a previous communication, reference it here.]
    </p>
    
    <p>
      [Second paragraph: Provide supporting details, evidence, or background information relevant to your purpose. Explain the what, why, when, where, and how of your main message.]
    </p>
    
    <p>
      [Third paragraph: If applicable, discuss what action you would like the recipient to take. Be specific about deadlines, expectations, or next steps. If you are making a request, be clear about what you need and when you need it.]
    </p>
    
    <p>
      [Fourth paragraph: Conclude with a forward-looking statement, a summary of your main points, or an expression of goodwill. Thank the recipient for their time and consideration.]
    </p>
  

  
    Sincerely,
  

    [Your handwritten signature]

    [Your typed name]<br>
    [Your title]

    Enclosure: [List any documents included with the letter]
`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>[YOUR NAME]</h1>
    <div class="contact-info">[City, State] | [Phone Number] | [Email Address]</div>
    <div class="contact-info">[LinkedIn URL] | [Professional Website/Portfolio]</div>

    <h2>PROFESSIONAL SUMMARY</h2>
    <p class="summary">
      [A brief 2-3 sentence overview of your professional background, skills, and career goals. Tailor this to the job you're applying for.]
    </p>

    <h2>EXPERIENCE</h2>
    
      [JOB TITLE][Month Year] - [Month Year][Company Name], [Location]
      
        <ul>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
        </ul>
      

    
      [JOB TITLE][Month Year] - [Month Year]
      [Company Name], [Location]
      
        <ul>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
        </ul>
      

   [JOB TITLE] [Month Year] - [Month Year]
      [Company Name], [Location]
      
        <ul>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
          <li>[Accomplishment-oriented bullet point describing a responsibility. Use action verbs and quantify results when possible.]</li>
        </ul>
      

  
    <h2>EDUCATION</h2>
    
   
      [Degree Type] in [Field of Study] [Graduation Year]
      [University Name], [Location]
      
        <ul>
          <li>GPA: [GPA] / 4.0</li>
          <li>Relevant Coursework: [List relevant courses]</li>
          <li>Honors/Awards: [List any academic achievements]</li>
        </ul>
      
    
    
      [Certification Name] [Year Obtained]
      [Issuing Organization]
    

  
    <h2>SKILLS</h2>
    
    Technical Skills:
      <ul class="skills-list">
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
        <li>[Skill 4]</li>
        <li>[Skill 5]</li>
        <li>[Skill 6]</li>
      </ul>
    
    
    Soft Skills:
      <ul class="skills-list">
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
        <li>[Skill 4]</li>
      </ul>
    
    
    Languages:
      <ul class="skills-list">
        <li>[Language 1]: [Proficiency Level]</li>
        <li>[Language 2]: [Proficiency Level]</li>
      </ul>
    

 
    <h2>PROJECTS</h2>
    
   
      [Project Name] [Month Year] - [Month Year]
      
        <ul>
          <li>[Description of the project, your role, technologies used, and outcomes.]</li>
          <li>[Link to GitHub or project website if applicable.]</li>
        </ul>
      
    
   
      [Project Name] [Month Year] - [Month Year]
  
        <ul>
          <li>[Description of the project, your role, technologies used, and outcomes.]</li>
          <li>[Link to GitHub or project website if applicable.]</li>
        </ul>
     


    <h2>ADDITIONAL INFORMATION</h2>
    <ul>
      <li>Volunteer Work: [Description of volunteer activities]</li>
      <li>Professional Memberships: [List relevant professional organizations]</li>
      <li>Publications/Presentations: [List any papers, articles, or presentations]</li>
      <li>Interests: [Optional: Include relevant interests that showcase your personality]</li>
    </ul>
  `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
 
    [Your Name]<br>
    [Your Address]<br>
    [City, State ZIP]<br>
    [Phone Number]<br>
    [Email Address]
  

  
    [Month Day, Year]`,
  },
];
