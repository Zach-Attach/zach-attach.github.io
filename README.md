### VALUES YOU SHOULD CHANGE ###

# GENERAL SITE SETTINGS
# title: This will be displayed as the website's name in your browser tab.
title: Neumorphism
# description: This will be meta HTML tag content. This can be ignored.
description: Personal website powered by Jekyll
# baseurl: The subpath of your site
# > set this to "", if you renamed the repository to <user>.github.io
baseurl: "/neumorphism"

# LANDING PAGE
# username: This will displayed on the landing page as your name.
username: Neumorphism
# typing_text: This will be typed before 'scroll down for more'.
# > set this to your job title, e.g. Fullstack Developer
typing_text: Jekyll Theme
# email: Your E-Mail address for the email button.
email: email@example.com
# For every social button you want to display, set your username or userid
# If you do not use one of the following websites, then leave it empty
# > twitter_username:
github_username: longpdo
codepen_username: exampleUser
dev_username: exampleUser
linkedin_username: exampleUser
twitter_username: exampleUser

# ABOUT ME SECTION
# show_aboutme_card:
# > setting this to true, will display the About Me section
# > setting this to false, will omit the About Me section
show_aboutme_card: true
# about_me_title: The will be displayed as the title in the About Me section
about_me_title: About Me
# about_me_description: This will be displayed under the title.
about_me_description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. If you like this theme and want to use it for yourself, checkout the source code and the documentation at <a class="highlight-link" href="https://github.com/longpdo/neumorphism" target="_blank" rel="noreferrer"> Github </a>. You can also find me on <a class="highlight-link" href="https://jamstackthemes.dev/theme/jekyll-neumorphism/" target="_blank" rel="noreferrer">JAMstack Themes</a> and on <a class="highlight-link" href="https://jekyll-themes.com/neumorphism/" target="_blank" rel="noreferrer">Jekyll Themes</a>.

# SKILLS SECTION
# show_skills_card:
# > setting this to true, will display the Skills section
# > setting this to false, will omit the Skills section
show_skills_card: true
# about_me_title: The will be displayed as the title in the Skills section
skills_title: Skills

# TIMELINE SECTION
# show_timeline_card:
# > setting this to true, will display the Timeline section
# > setting this to false, will omit the Timeline section
show_timeline_card: true
# timeline_title: The will be displayed as the title in the Timeline section
timeline_title: Education & Experience
# cv_download_link: The link where you host your cv.
# > e.g. you share your cv on your dropbox, then add the dropbox link here
cv_download_link: https://example.com/

# PROJECTS SECTION
# show_projects_card:
# > setting this to true, will display the Projects section
# > setting this to false, will omit the Projects section
show_projects_card: true
# show_projects:
# > setting this to true, will display your listed projects in _data/projects.yml
# > setting this to false, will omit your listed projects
show_projects: true
# projects_title: The will be displayed as the title of your projects
projects_title: Projects
# show_os_projects:
# > setting this to true, will display your public projects on github
# > setting this to false, will omit your public projects on github
show_os_projects: true
# os_projects_title: The will be displayed as the title of your open source projects
os_projects_title: Open Source Projects

# CONTACT SECTION
# show_contact_card:
# > setting this to true, will display the Contact section
# > setting this to false, will omit the Contact section
show_contact_card: true
# contact_title: The will be displayed as the title in the Contact section
contact_title: Contact
# contact_description: This will be displayed under the title.
contact_description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. If you like this theme and want to use it for yourself, checkout the source code and the documentation at <a class="highlight-link" href="https://github.com/longpdo/neumorphism" target="_blank" rel="noreferrer"> Github </a>.

# GITHUB-METADATA
# Set this to your forked repository
# > e.g. <user>/<user>.github.io
repository: longpdo/neumorphism
projects:
  # sortby:
  # > set this to pushed, if you want to sort your github repositories by time.
  # > set this to stars, if you want to sort your github repositories by stars.
  sort_by: pushed
  exclude:
    # archived:
    # > setting this to true, will exclude archived repositories
    # > setting this to false, will also display archived repositories
    archived: true
    # forks:
    # > setting this to true, will exclude forked repositories
    # > setting this to false, will also display forked repositories
    forks: true
    # projects: A list of the repository names you want to exclude from the listing.
    projects:
    # - repo1-to-be-excluded
    # - repo2-to-be-excluded

# GOOGLE-ANALYTICS
# Set the id, if you want to track your website with Google Analytics
# > set this to "", if you do not want to track with Google Analytics
google-analytics:
  id: "UA-158757509-2"

### END OF VALUES YOU SHOULD CHANGE ###

plugins:
  - "jekyll-github-metadata"

exclude:
  [
    "_assets",
    "Gemfile",
    "Gemfile.lock",
    "gulpfile.js",
    "node_modules",
    "package.json",
  ]