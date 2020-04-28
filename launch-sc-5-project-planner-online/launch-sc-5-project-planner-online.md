## Instructions

We want to design a database architecture to represent team members working on projects together.

### Getting Set up

Retrieve this challenge via `et` and install the necessary dependencies using the `bundle` command.

```no-highlight
et get launch-sc-5-project-planner-online
cd launch-sc-5-project-planner-online
bundle exec bundle install
```

Throughout this challenge, be sure to **prepend** your rake commands with `bundle exec` to ensure that your application is using the correct gem versions (e.g., `bundle exec rake db:migrate`).

## Meeting Expectations Requirements

This challenge will test your knowledge of ActiveRecord and acceptance testing.

Focus on **migrations**, **models**, and the database **schema** first.

* The relevant files that will be checked are:
  - All files in the `app/models` directory.
  - All files in the `db/migrate` directory.
  - All files in the `app/views` directory.
  - The routes in `server.rb` file.
* You **must** include database constraints and model validations where appropriate.
* Your migrations **must** be reversable (able to be rolled back). 

Create a schema and the necessary migrations and models to represent the following data and object relationships:

#### Users

* Users must have a first name and a last name.
* Users may (optionally) have an email.
* Users may (optionally) be involved with multiple projects.

#### Projects

* A project must have a name.
* A project may (optionally) have a description.
* A project may (optionally) have many users working on it.

### Satisfy User Stories
Ensure that the following user stories are satisfied when the server is running.

```no-highlight
As a user
I want to view a list of all projects
So I know what projects are ongoing
```

Acceptance Criteria:

* On the projects index page (`/projects`), I should see the name of each project.
* On the projects index page, the name of each project should be a link to that project's show page (`/projects/4` for the project with an `id` of `4`, etc.).

```no-highlight
As a user
I want to see the details of a project
So I can learn more about each project
```

Acceptance Criteria:

* On a project's show page, I should see the name and description (if any) of the project.

```no-highlight
As a user
I want to see the members of each project
So I know who is working on the project
```

Acceptance Criteria:

* On a project's show page, I should see the first name, last name, and email (if any) of each user who is working on the project.

### Tips

* You should feel free to add whatever migrations/models etc. you need to make these associations work.
* Draw out the ER diagram on paper so that you can understand what data you will need to save and what relationships you will need to create.
* Test your models in `pry` by running `pry -r "./server.rb"`. For example, you should be able to run `User.first.projects` to get all of the projects for the first user.
* **DO NOT** start the requirements for exceeding expectations before completing the requirements necessary to meet expectations and submitting your Meets attempt with `et submit`.

### Exceeds Expectations Requirements

We now want to be able to add tasks to our app. Make the necessary changes in accordance with the criteria below.

#### Tasks

* A task must have a name.
* A task may optionally have a description and a due date.
* A task may optionally be assigned to one user, or they may be unassigned.
* A task must belong to a single project.

#### Projects

* A project may optionally have a collection of individual tasks assigned to it.

#### User Stories


```no-highlight
As a user
I want to see the tasks of each project
So I know what needs to be completed in the project
```

Acceptance Criteria:

* On a project's show page, I should see all the names of each task as well as the first and last name of the user assigned to the task (if there is someone assigned to the task).

#### Acceptance Testing

Write an **acceptance test** for the Meets Expectations user stories and the Exceeds Expectations user stories and get the tests to pass.

Note: You should be running `bundle exec rake db:test:prepare` to sync any new migrations between your test and development databases.
