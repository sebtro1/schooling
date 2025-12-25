# schooling

## JavaScript

Go to school folder!

`npm install` ausführen

`npm test` ausführen

## GitHub CLI

`gh repo create just-a-name --private --source=. --remote=upstream --push`

## GitHub Actions Tutorials

### Tutorial 1 
* Video https://www.linkedin.com/learning/learning-github-actions-event-driven-automation-for-your-codebase
* Code https://github.com/LinkedInLearning/learning-github-actions-5977410/tree/main

#### Custom Actions

##### Plan
* Objective
* Public repo
* Dockerfile
* Script
* Metadata and README files

Objective
* what problem does the action solve
* can the action be parameterized (reusability)

Repo
* use a dedicated repo for the action
* helps with managing and versioning code
* helps with sharing and reuse
 
Dockerfile
* Defines the container for the action
* Installs libraries or requirements
* Calls the action's script

Script
* Defines commands that are run by the action
* Interacts with environment variables, secrets and event data
* Just about any scripting language can be used
* Use a default shell when possible (native shell script)

Metadata
* Metadata file that named actions.yml
* Defines inputs, outputs and entrypoint
* Branding using icons and colors
* Name, description, author, version, etc.

README.md
* Provides basic details and information
* Explains environment variables and secrets
* Explains arguments
* Provides examples
* Write README last

we build an action for writing tests aka Test Scout

##### Dockerfile Review

Dockerfile
* Contains details for building an image
* Allows for consistent builds

Dockerfile format
* #Comment - adding detils 
* Instruction - are native docker commands 
* arguments - values passed to those commands

Dockerfile instructions ans usage
* FROM - set the base image
* RUN - commands to run during build process (to install dependencies)
* COPY - copy files from host to container (adds files to the image)
* WORKDIR - set working directory
* ENTRYPOINT - set entrypoint (default command run by the container)
* CMD - set command
* EXPOSE - expose ports
* ENV - set environment variables
* ARG - set arguments

##### github workflow

when a workflow runs github creates a virtual environment with everything our custom action needs

* Compute resources
  * One virtual CPU
  * Memory up to 3,75 GB
  * Remote network connectivity (to connect to APIs end remote services)
* Local filesystem
  * Read and Write access
  * Disk space up to 100 GB
    * /github/home
    * /github/workspace (to store files while action runs)
* Environment variables
  * several variables will be preloaded into the workflow and available for your action
  * they describe paths, metadata about the repo and identifiers for the job or workflow
  * Variables 
    * HOME
    * GITHUB_WORKFLOW
    * GITHUB_ACTION
    * GITHUB_ACTOR
    * GITHUB_REPOSITORY
    * GITHUB_EVENT_NAME
    * GITHUB_EVENT_PATH
    * GITHUB_WORKSPACE
    * GITHUB_SHA
    * GITHUB_REF
    * GITHUB_TOKEN
  * Variables important for working with github api
    * GITHUB_REPOSITORY - is a string that combines the name of the repo owner with the name of the repo seperated by a slash, useful for construction github api urls - octocat/Hello-World
    * GITHUB_EVENT_PATH - points to a local JSON file that holds the full payload of the event that triggered the workflow - /github/workflow/event.json
    * GITHUB_TOKEN - is a short-lived authentication token created automatically for each workflow, it is stored as a secret and must be explicitly passed to any step that uses it    
* Event payloads data
  * Many different events for triggering workflows
    * push
    * pull_request
    * workflow_dispatch
    * schedule
    * repository_dispatch
    * release
    * check_run
    * check_suite
    * create branch
    * delete branch
  * Each event has a unique payload structure - see github doc

##### Action Metadata

* YAML file named action.yml
* Provides details about the action (name, description, inputs, outputs, entrypoint, etc.)
* Specifies interfaces for the workflow environment
* GitHub provides 7 mEtadata fields
  * Required
    * name
    * description
    * runs    
  * Optional
    * author
    * inputs (pass values as parameters) -> In the test-scout action we use the inputs to let uses override the test file pattern or enable strict mode
    * outputs (return values as data for other steps to use) -> example test-scout can output the number of test files found
    * outputs
    * branding (control how actions appear in the marketplace)
      * GitHub uses https://feathericons.com
        * to use, add the name to metadata
        * these 8 colors are allowed
          * white
          * yellow
          * blue
          * green
          * red
          * purple
          * gray-dark          
    
##### Action README

* Not required for an action to work
* Required for sharing actions in the GitHub marketplace
* Helps others understand your action
* Should include 
  * a clear title and description
  * Secrets 
  * Environment variables
  * Arguments aka List of required inputs 
  * Examples usage in a workflow

### Tutorial 2
* Video https://www.linkedin.com/learning/advanced-github-actions
* Code https://github.com/LinkedInLearning/advanced-github-actions-3017420

### Tutorial 3
* Video https://www.linkedin.com/learning/github-actions-for-ci-cd/github-actions-for-ci-cd
* Code https://github.com/LinkedInLearning/github-actions-for-ci-cd-4375061

## Troubleshooting
https://dev.to/nutan_mishra_95d0a3808a4d/fixing-github-authentication-error-erase-operation-not-supported-and-invalid-username-or-token-47jp#:~:text=GitHub%20no%20longer%20allows%20password,invalid%20username%20or%20token%22%20error.

## Playwright
* Video https://www.linkedin.com/learning/learning-playwright/
* Code https://github.com/LinkedInLearning/learning-playwright-5911873
* also https://github.com/LinkedInLearning/learning-playwright-5911873/blob/main/RESOURCES.md

