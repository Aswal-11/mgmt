School Management System The application we have used in this project
are • Laravel (Backend) • React (Frontend) • Inertia to Glue up both
Laravel and React.

Installation Process • Install the Laravel project by using the Laravel
project installation command. Command name: composer create-project
laravel/laravel **project_name** 
• Go into project and open the terminal
then run this "npm i react react-dom". 
• After installing the react dom
then run this command " npm install --save-dev @vitejs/plugin-react" 
• Now install the inertia js "composer require inertiajs/inertia-laravel".
• Then delete the welcome.blade.php, make the app.blade.php and paste
the below code. 
• Then run this " php artisan inertia:middleware" and
paste the below code in the middleware. 
• Then go to resource, find the
app.js and change its name to app.jsx 
• Now go the vite.config.ts, then
add this
