Adventext - A player-made online text adventure
-----------------------------------------------
By Fiona Summers

Backend and API written in Python + Django.

Web client written in ES6 + React.


Installation
============

 * Clone from repo `git clone github.com:Fiona/adventext.git adventext`

 * Copy .env.example and fill in secret key.
 
 * Run `docker-compose build` to compose the stack.
  
 * Run `docker-compose run backend python manage.py createsuperuser` to create a top-level super user.
 
 * Run `docker-compose up` to start up the environments.
 
 * Go to `http://localhost:3000` in your browser.