document.addEventListener('DOMContentLoaded', function() {
  // Tab navigation functionality
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update active tab link
      tabLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding content
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabId}-content`) {
          content.classList.add('active');
        }
      });
    });
  });
  
  // Open section in new tab functionality
  const openTabButtons = document.querySelectorAll('.open-tab-btn');
  
  openTabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const section = this.getAttribute('data-section');
      openSectionInNewTab(section);
    });
  });
  
  function openSectionInNewTab(section) {
    // Create a new HTML document for the tab
    const newWindow = window.open('', '_blank');
    
    // Get the content for the selected section
    let title, content;
    
    switch(section) {
      case 'history':
        title = 'Our History - Urban Auto Hub';
        content = document.getElementById('history-content').innerHTML;
        break;
      case 'mission':
        title = 'Mission & Values - Urban Auto Hub';
        content = document.getElementById('mission-content').innerHTML;
        break;
      case 'team':
        title = 'Our Team - Urban Auto Hub';
        content = document.getElementById('team-content').innerHTML;
        break;
      case 'future':
        title = 'Future Vision - Urban Auto Hub';
        content = document.getElementById('future-content').innerHTML;
        break;
    }
    
    // Write the new document
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
          }
          h1, h2, h3 {
            color: #003366;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          h1 {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #00BFFF;
            padding-bottom: 15px;
          }
          ul {
            list-style-type: none;
            padding-left: 0;
          }
          ul li {
            padding: 8px 0;
            padding-left: 30px;
            position: relative;
          }
          ul li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #00BFFF;
            font-weight: bold;
          }
          .back-btn {
            background-color: #003366;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 30px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 1rem;
            transition: background-color 0.3s;
          }
          .back-btn:hover {
            background-color: #00BFFF;
          }
          .content-section {
            margin-bottom: 25px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          }
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .team-member {
            background: #f5f9ff;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
          }
          .member-photo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: #ddd;
            margin: 0 auto 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: #003366;
          }
          .member-name {
            font-weight: 600;
            color: #003366;
            margin-bottom: 5px;
          }
          .member-role {
            color: #00BFFF;
            font-size: 0.9rem;
            margin-bottom: 10px;
          }
          .tab-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
          }
          .open-tab-btn {
            display: none;
          }
        </style>
      </head>
      <body>
        <button class="back-btn" onclick="window.close()">
          <i class="fas fa-times"></i> Close Tab
        </button>
        <h1>${title}</h1>
        ${content}
      </body>
      </html>
    `);
    newWindow.document.close();
  }
});