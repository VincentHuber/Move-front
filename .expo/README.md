> Why do I have a folder named ".expo" in my project?
<<<<<<< HEAD
=======
<<<<<<< HEAD

The ".expo" folder is created when an Expo project is started using "expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "packager-info.json": contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.
- "settings.json": contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.

=======
>>>>>>> cf8dfc033964c557af7243aae4769ae1f3172a1f
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
<<<<<<< HEAD
=======
>>>>>>> b1eddc93dbacd6cf987accc95492773b8be2bf6e
>>>>>>> cf8dfc033964c557af7243aae4769ae1f3172a1f
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
