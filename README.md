# Fillactive-Community-App
Build a community that reaches out and encourages teenage girls aged 12-17 to change their mindset about physical activity and be able to better their health by staying active and healthy as a long term goal with the help of technology and joining Fillactive

## Fillactive Community App guidelines

To login:
  - By default the first page you see will be the login page
  - To login, you'll have to use one of the following credentials
    (since this is a prototype, we've not implemented extensive authentication or security controls; we've focused on presentational aspects)
    
    username: (one of the following, based on which role you want to access the site as)
      - student@test.com
      - teacher@test.com
    password: any value is acceptable (not implemented yet)
 
 Once you've logged in, you'll be taken to the 'Feed' page.
 
 ### Website architecture:
 
     Login
     |
     |------- Feed
     |------- Events
     |------- Wellness Hub
     |------- Manage (not implemented yet)

### Access

The actions and features that are visible or available to you will depend on which role (`user_role`) you've logged in with.

Teachers and Fillactive ambassadors will have additional authority and access in most cases, like to add an event, or manage their groups.

### Layout

**Feed**
- Feed page will display primarily three types of posts - commons posts, recognition posts and challenges
- Eventually, we planned to provide a view where the user can switch between the types of post they want to view at any given time
- Privacy can be managed by using *tags* which the author of the post can add while creating the post to manage who the post will be visible to (ex: friends, entire group, entire school etc.)
- Ability to like the posts is present, but without any number count, since the purpose is to recognize not compete

**Events**
- Displays a list of upcoming events
- User has the ability to interact and provide vital information like whether they are going or not, or haven't made a decision yet
- Ability for the users to add events from the platform directly to their Google calendar
- Ability for the user to provide feedback on why they might not go

**Wellness Hub**
- Wellness and mindfulness relates content curated by Fillactive partner teachers and ambassadors
- Ability for the user to subscribe to receive updates on new posts related to wellness and mindfulness

**Manage** (not implements yet)
- Page to manage user profile settings (update name, email, password, etc.)
- For teachers - additional ability to manage their group(s) and students

### Technical details

**stack:**
  - Run environment:  Nodejs
  - Web framework:    Express
  - View engine:      EJS
  - Languages:        JavaScript (ES6), HTML/EJS, CSS
  
 **Project code structure:**
 
 We've followed the Express app project guidelines to structure our code in a modular and efficient way.
 
      parent directory
      |
      |----------- public
      |               |------ images
      |               |------ stylesheets
      |----------- data
      |               |------ (all data files)
      |----------- routes
      |               |------ index.js (primary routes)
      |               |------ users.js (user/access management routes)
      |----------- views
      |               |------ (all project view files)
      |
      |----------- Other files (config files required for development)
 
 ### Team members (creators)
 Evan Freayh, Carina Tam, JiaQi Zhao, Tyler Watson, Pranav Kural, Robert Joseph George, Tanyaradzwa Gozhora

**Morgan Stanley Mentor**: Pascal Forget
